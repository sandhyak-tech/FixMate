import React, { useState } from "react";
import { View, Alert, Image, StyleSheet, TouchableOpacity, Platform } from "react-native";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../Services/FireBaseService";
import PhoneInputComponent from "./PhoneInputComponent";
import { Card } from 'react-native-paper';
import VerifyOTPComponent from "./VerifyOTP";

const SignInScreen = () => {
  const [confirm, setConfirmation] = useState(null);
  const [showOTP, setShowOTP] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState(null);


  // Send OTP to the user
  const sendOtp = async (phone) => {
    try {
      setPhoneNumber(phone);
      const recaptcha = new RecaptchaVerifier(auth, "recaptcha-container", {
        size: "invisible",
      });
      const confirmationResult = await signInWithPhoneNumber(auth, phone, recaptcha);
      setConfirmation(confirmationResult);
      setShowOTP(true);
      Alert.alert("OTP Sent!");
    } catch (error) {
      // Alert.alert("Error", error.message);
      Platform.OS === 'android' ? setShowOTP(true) : Alert.alert("Error", error.message);
      
    }
  };



  return (
    <TouchableOpacity activeOpacity={1} style={styles.container}>
      <Card style={styles.card}>
        <Card.Content style={{padding:0}}>
          {/* Image at the top */}
          <Image source={require('../assets/images/Master-ALT-e1732087309434.png')} style={styles.image} resizeMode='contain' />
          <View id="recaptcha-container"></View>
          <View  style={{width:'100%'}}>
          {!showOTP ? (
            <PhoneInputComponent sendOTP={sendOtp} />

          ) : (
            <VerifyOTPComponent confirm={confirm} phoneNumber={phoneNumber}/>
              
            )}
            </View>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center", // Center vertically
    alignItems: "center", // Center horizontally
    backgroundColor:'transparent',
    width: "100%",
  },
  card: {
    justifyContent: "center",
    marginHorizontal:10,
    padding:10,
    borderRadius: 10,
    alignItems: "center",
    elevation: 5, // Shadow effect
    backgroundColor:'transparent',
    width:"100%"
  },
  image: {
    height: 100,
    marginBottom: 20,
    borderRadius: 50,
    width:'100%'
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: "center",
    fontWeight: "bold",
  },
  phoneInput: {
    width: "100%",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
  button: {
    padding: 12,
    borderRadius: 5,
    marginTop: 15,
    alignItems: "center",
    width: "100%",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default SignInScreen;
