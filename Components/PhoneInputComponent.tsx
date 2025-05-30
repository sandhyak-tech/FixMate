import React, { useRef, useState } from "react";
import { View, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { shadow ,Text} from "react-native-paper";
import PhoneInput from "react-native-phone-input";

const PhoneInputComponent = ({sendOTP}) => {
  const phoneRef = useRef(null);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [isFocused, setIsFocused] = useState(false); // Track focus state

  // 🔹 Function to Validate Phone Number
  const validatePhoneNumber = (text) => {
    if (phoneRef.current) {
      setIsValid(phoneRef.current.isValidNumber());
    }
    setPhoneNumber(text);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label} >Sign in to your account</Text>

      {/* Phone Input with Country Picker */}
      <View style={[styles.phoneContainer ]}>
      <PhoneInput 
        ref={phoneRef}
        initialCountry="us" // Default country
        onChangePhoneNumber={(text) => {
          validatePhoneNumber(text);
        }}
        textProps={{  onFocus:() => setIsFocused(true) , placeholder: "Enter phone number",placeholderTextColor:'white', keyboardType:'phone-pad',selectionColor: "transparent",selectionHandleColor:'transparent'  }}
        textStyle={{color:'white'}}
      
        style={[styles.phoneInput]}
      />
      </View>

      {/* Validation Message */}
      <Text style={[styles.validationText, { color: isValid ? "green" : "red" }]}>
        {phoneNumber ? isValid ? "✅ Valid Phone Number" : "❌ Invalid Phone Number" : ""}
      </Text>

      {/* OTP Button (Disabled if Invalid) */}
      <TouchableOpacity style={[styles.button, !isValid && styles.buttonDisabled]} disabled={!isValid}>
        <Text style={styles.buttonText} onPress={() => sendOTP(phoneNumber)}>Send OTP</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 25,
    borderColor:'#eb007c',
    boxShadow: 'rgba(235,0, 124, 0.85) -5px -5px 15px',
    borderWidth:1,
    width: "100%",
  },
  label: {
    fontSize: 30,
    marginBottom: 10,
    color:'white',
    fontFamily: 'Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif',
    letterSpacing: 1.5,
    lineHeight: 40,
    fontWeight: 500,
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
  },
  validationText: {
    marginTop: 5,
    fontSize: 14,
  },
  button: {
    backgroundColor: "#eb007c",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    alignItems: "center",
  },
  buttonDisabled: {
    backgroundColor: "#ccc",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  noOutline: {
    borderWidth: 0, // Remove border on focus
  },
});

export default PhoneInputComponent;
