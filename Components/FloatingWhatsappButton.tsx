import React from "react";
import { View, TouchableOpacity, Image, Linking, StyleSheet } from "react-native";

const FloatingWhatsAppButton = () => {
  const openWhatsApp = () => {
    const phoneNumber = "+1234567890";
    const url = `whatsapp://send?phone=${phoneNumber}`;
    Linking.openURL(url).catch(() => alert("Make sure WhatsApp is installed!"));
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={openWhatsApp}>
        <Image
          source={require("../assets/whatsapp.png")}
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 20,
    right: 20,
  },
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#25D366",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  icon: {
    width: 35,
    height: 35,
    tintColor: "#fff",
  },
});

export default FloatingWhatsAppButton;
