import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { RadioButton, Button, Card, Icon } from "react-native-paper";
import { db } from "../Services/FireBaseService";
import { doc, setDoc } from "firebase/firestore";
import moment from "moment";
import AsyncStorage from "@react-native-async-storage/async-storage";

const { height } = Dimensions.get('window');
const getNext4Days = () => {
  const days = [];
  const today = new Date();

  for (let i = 1; i <= 4; i++) {
    const nextDay = new Date();
    nextDay.setDate(today.getDate() + i);

    const day = nextDay.toLocaleDateString("en-US", { weekday: "short" }); // "Thu"
    const date = nextDay.getDate().toString().padStart(2, "0"); // "04" instead of "4"
    const fulldate = nextDay.toISOString().split("T")[0];
    days.push({ day, date, fulldate });
  }

  return days;
};

const BookingScreen = () => {

  const [selection, setSelection] = useState("now");
  const [date, setDate] = useState("");
  const [days, setDays] = useState(getNext4Days());

  const [availableSlots, setAvailableSlots] = useState([{}]);
  const [selectedSlot, setSelectedSlot] = useState('');
  const getAvailableTimeSlots = (date, startTime, endTime, intervalMinutes = 30, bookedSlots = []) => {
    const slots = [];
    const day = moment(date).format("YYYY-MM-DD")
    const start = new Date(`${day}T${startTime}:00`);
    const end = new Date(`${day}T${endTime}:00`);

    let current = new Date(start);

    while (current <= end) {
      const hour24 = current.getHours().toString().padStart(2, "0");
      const min = current.getMinutes().toString().padStart(2, "0");
      const value = `${hour24}:${min}`;

      let hour12 = current.getHours() % 12 || 12;
      const ampm = current.getHours() >= 12 ? "PM" : "AM";
      const label = `${hour12}:${min} ${ampm}`;

      // Skip booked slots
      if (!bookedSlots.includes(value)) {
        slots.push({ label, value });
      }

      current.setMinutes(current.getMinutes() + intervalMinutes);
    }
    setAvailableSlots(slots);
    return slots;
  }



  const handleBooking = async () => {
    if (!date || !selectedSlot) return;

    const formattedDate = moment(date).format("YYYY-MM-DD");
    const slotRef = doc(db, "bookings", formattedDate, "slots", selectedSlot);

    await setDoc(slotRef, { slot: selectedSlot, userId: await AsyncStorage.getItem("userId"), booked: true });

    alert(`Booked ${selectedSlot} on ${formattedDate}`);
  };

  return (
    <TouchableOpacity activeOpacity={1} style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 18, marginBottom: 10, color: "white" }}>When should the professional arrive?</Text>
      <View style={{ height: height * 0.8 }} >
        <RadioButton.Group onValueChange={value => {
          setSelection(value)
          if (value === "now") {
            const date = moment().local().format('YYYY-MM-DD');
            const time = moment().local().add(90, 'minutes').format('HH:mm');
            setDate(date);
            setSelectedSlot(time);
          }
          else {
            setSelectedSlot('');
            setDate("");
          }

        }} value={selection} >
          <View style={{ width: '100%', flexDirection: "row", alignItems: "center", marginBottom: 10, borderWidth: 1, borderColor: '#eb007c', padding: 10, borderRadius: 10}}>
            <TouchableOpacity style={{ marginBottom: 10, width: '90%' }} onPress={() => {
              setSelection("now");
              const date = moment().local().format('YYYY-MM-DD');
              const time = moment().local().add(90, 'minutes').format('HH:mm');
              setDate(date);
              setSelectedSlot(time);
            }
            }>
              <Text style={{ color: '#97d700', marginVertical: 5 }}><Icon source="lightning-bolt" size={20} color="#97d700" /><Text>INSTANT</Text> </Text>
              <Text style={{ color: "white", marginVertical: 5, fontSize: 15, fontWeight: 500 }}>In 90 mins</Text>
              <Text style={{ color: '#97d700', marginVertical: 5 }}>High demand</Text>
            </TouchableOpacity>
            <View style={{ alignItems: "center", marginBottom: 10 }} >
              <RadioButton value="now" color="#eb007c" />
            </View>
          </View>
          <View style={{ height: height * 0.6, width: '100%', marginBottom: 10, borderWidth: 1, borderColor: '#eb007c', padding: 10, borderRadius: 10 }}>
            <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 10 }}>
              <TouchableOpacity style={{ marginBottom: 10, width: '90%' }} onPress={() => {
                setSelection("later");
                setSelectedSlot('');
                setDate("");
              }
              } >
                <Text style={{ color: "white", fontSize: 15, fontWeight: 500, marginVertical: 5 }}>Schedule for Later</Text>
                <Text style={{ color: "grey" }}>Select your preferred day & time</Text>
              </TouchableOpacity>
              <RadioButton value="later" color="#eb007c" />
            </View>
            <View>
              {selection === "later" && (
                <View>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ flexDirection: "row", alignItems: "center", marginBottom: 10 }}>
                      {days.map((day, index) => (
                        <TouchableOpacity
                          key={index}
                          onPress={() => {
                            setDate(day.fulldate);
                            setSelectedSlot('');
                            getAvailableTimeSlots(day.date, "09:00", "17:00");
                          }}

                        >
                          <View style={{ width: 80, alignItems: "center", justifyContent: "center", marginBottom: 10, borderWidth: 1, borderColor: '#eb007c', paddingVertical: 5, paddingHorizontal: 20, borderRadius: 10, backgroundColor: date === day.fulldate ? "#eb007c" : "transparent", marginRight: 10 }}>
                            <Text style={{ color: "white", fontSize: 15, fontWeight: 500, marginTop: 5 }}>{day.day}</Text>
                            <Text style={{ color: "white", fontSize: 12, marginVertical: 5 }}>{day.date}</Text>
                          </View>
                        </TouchableOpacity>
                      ))}
                    </ScrollView>

                    {date && availableSlots.length > 0 && (
                      <View style={{height: height * 0.4}}>
                        <Text style={{ marginTop: 10, marginBottom: 10, color: "white", fontSize: 15, fontWeight: 500 }}>Select start time of service</Text>
                        <ScrollView showsVerticalScrollIndicator={true} contentContainerStyle={{ flexDirection: "row", flexWrap: "wrap" }}>
                          {availableSlots.map((slot, index) => (
                            <TouchableOpacity
                              key={index}
                              onPress={() => setSelectedSlot(slot.value)}
                              style={{
                                borderColor: '#eb007c',
                                borderWidth: 1,
                                alignItems: "center",
                                justifyContent: "center",
                                backgroundColor: selectedSlot === slot.value ? "#eb007c" : "transparent",
                                padding: 10,
                                borderRadius: 10,
                                margin: 5,
                                minWidth: 80,
                                minHeight: 50,
                              }}
                            >
                              <Text style={{ color: "white" }}>{slot.label}</Text>
                            </TouchableOpacity>
                          ))}
                        </ScrollView>
                      </View>
                    )}
                </View>
              )}
            </View>
          </View>
        </RadioButton.Group>
      </View>

      <View style={styles.buttonContainer}>
        <Button mode="contained" style={{ ...styles.button, backgroundColor: (selectedSlot || selection === "now") ? "#eb007c" : "grey" }}
          onPress={handleBooking}
          disabled={!selectedSlot || selection !== "now"}>
          <Text style={styles.buttonText}>Proceed to checkout</Text>
        </Button>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    right: 10,
    color: 'white',
  },
  button: {
    borderRadius: 8,
    width: '100%',
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'semibold',
  }
});
export default BookingScreen;
