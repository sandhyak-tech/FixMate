import React, { useState } from "react";
import { Alert, Platform } from "react-native";
import { View, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { Text} from "react-native-paper";
import { navigate } from "../Services/NavigationService";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore';
import { db } from "../Services/FireBaseService";

const VerifyOTPComponent = ({confirm, phoneNumber}) => {
  const [otp, setOtp] = useState("");
  const [isValid, setIsValid] = useState(true);

  // Verify OTP
  const verifyOtp = async () => {
    try {
      var userCredential = Platform.OS === 'android' ? {user: {uid : 'Yuysakl', phoneNumber: phoneNumber}} : await confirm.confirm(otp);  // Show loading message
      await AsyncStorage.setItem("userToken", "authenticated");
      await AsyncStorage.setItem("userId", userCredential.user.uid);

      const { uid, phoneNumber } = userCredential.user;

      const userRef = doc(db, 'users', uid);
      const userSnap = await getDoc(userRef);
  
      if (!userSnap.exists()) {
        await setDoc(userRef, {
          uid,
          phoneNumber,
          createdAt: serverTimestamp(),
        });
      } else {
        console.log("Existing user signed in");
      }
      navigate("Booking"); // Navigate to Booking screen
    } catch (error) {
      Alert.alert("Invalid OTP", "Please enter the correct OTP.");
      setIsValid(false);
      Platform.OS === 'android' ?       navigate("Booking"):''; // Navigate to Booking screen
    }
  };
  
  return (
    <TouchableOpacity activeOpacity={1} style={styles.container}>
      <Text style={styles.label} >Phone Number Verification</Text>
      <Text style={styles.sub_label} >Enter SMS code sent to</Text>
      <Text style={styles.phoneNumber}>{phoneNumber}</Text>


      {/* Phone Input with Country Picker */}
      <View style={[styles.phoneContainer ]}>
      <TextInput
                placeholder="Enter OTP"
                keyboardType="number-pad"
                value={otp}
                onChangeText={setOtp}
                style={styles.phoneInput}
              />
      </View>

      {/* Validation Message */}
          {!isValid && ( <Text style={[styles.validationText, { color: "red" }]}>
            ❌ Invalid OTP
            </Text>
  )}
      <TouchableOpacity style={[styles.button]}>
        <Text style={styles.buttonText} onPress={() => verifyOtp()}>Submit</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderColor:'#eb007c',
    boxShadow: 'rgba(235, 0, 124 , 0.85) -5px -5px 15px',
    borderWidth:1,
    elevation: 5, // Shadow effect
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    fontSize: 23,
    marginBottom: 10,
    color:'white',
    // fontFamily: 'Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif',
    letterSpacing: 0.05,
    lineHeight: 40,
    fontWeight: 400,
  },
  sub_label:{
    color:'grey',
    marginVertical: 10,
    fontSize: 20,
  },
  phoneNumber:{
    color:'white',
    fontSize: 22,
    marginBottom: 10,
    // fontFamily: 'Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif',
    letterSpacing: 0.05,
    lineHeight: 40,
    fontWeight: 600,
  },
  phoneContainer: {
    width: "100%",
    borderWidth: 2, // Fixed outer border
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 5,
    marginBottom: 10,
  },
  phoneInput: {
    backgroundColor: "transparent", // Remove inner background
    borderWidth: 0, // Remove inner border
    width: "100%",
    padding: 10,
    borderRadius: 10,
    color: 'white',
  },
  button: {
    backgroundColor: "#eb007c",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    alignItems: "center",
    width: "100%",
  },
  buttonDisabled: {
    backgroundColor: "#ccc",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  validationText: {
    marginTop: 5,
    fontSize: 14,
  },
  noOutline: {
    borderWidth: 0, // Remove border on focus
  },
});

export default VerifyOTPComponent;
