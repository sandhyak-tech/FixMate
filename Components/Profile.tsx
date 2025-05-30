import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { Button, Divider, Icon } from 'react-native-paper';
import { navigate } from '../Services/NavigationService';
import { Linking, Alert } from 'react-native';
const { width, height } = Dimensions.get('window');

const Profile = () => {
    const openEmail = () => {
        const email = 'info@fixmate.com';
        const subject = 'Support Request';
        const body = 'Hi team, I need help with...';
      
        const url = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
        Linking.canOpenURL(url)
          .then((supported) => {
            if (!supported) {
              Alert.alert('Email app is not available');
            } else {
              return Linking.openURL(url);
            }
          })
          .catch((err) => console.error('Error opening mail app:', err));
      };
    const openWhatsApp = () => {
        const url = `https://api.whatsapp.com/send?phone=9123455454543&text=I+would+like+help+with...`;
      
        Linking.canOpenURL(url)
          .then((supported) => {
            if (!supported) {
              Alert.alert('WhatsApp is not installed');
            } else {
              return Linking.openURL(url);
            }
          })
          .catch((err) => console.error('Error opening WhatsApp:', err));
      };
const callUs = () => {
  const phoneNumber = 'tel:+912323343455'; // US number with country code

  Linking.canOpenURL(phoneNumber)
    .then((supported) => {
      if (!supported) {
        Alert.alert('Phone call is not supported on this device');
      } else {
        return Linking.openURL(phoneNumber);
      }
    })
    .catch((err) => console.error('Error opening dialer:', err));
};

  return (
    <TouchableOpacity activeOpacity={1} style={{flex: 1}}>
    <View style={styles.container}>
      <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom:20, marginTop:10}}>
        <Text style={styles.text}>Login to access all features!</Text>
        <Button
          mode="contained"
          onPress={() => navigate('SignIn')}
          style={styles.button}
          >
            <Text style={{ color: 'white' }}>Login</Text>
        </Button>
        </View>
        <Divider horizontalInset bold style={{marginHorizontal:5, backgroundColor:'white', height:2}}/>
    <View style={{flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', marginVertical:15}}>
               <Button
          mode="contained"
          onPress={openWhatsApp}
                    style={styles.contactButton}
          >
             <View style={{ alignItems: 'center', justifyContent: 'center'}}>
            <Icon source="chat-processing-outline" size={30} color="white" />
            <Text style={{ color: 'white', marginTop:10, fontSize:15 }}>Chat With Us</Text>
            </View>
        </Button>
        <Button
          mode="contained"
          onPress={callUs}
          style={styles.contactButton}
          >
            <View style={{ alignItems: 'center', justifyContent: 'center'}}>
            <Icon source="phone-outline" size={30} color="white" />
            <Text style={{ color: 'white', fontSize: 15 }}>Call Us</Text>
            </View>
        </Button>
        </View>
    </View>
    <Divider horizontalInset bold style={{marginHorizontal:5,backgroundColor:'grey', height:4}}/>
<View style={{marginVertical:10, padding: 20,flex: 1}}>
    <TouchableOpacity activeOpacity={1} style={{flexDirection: 'row', alignItems: 'center'}} onPress={openEmail}>
      <Icon source="email-outline" size={30} color="deeppink" />
      <View style={{marginLeft: 20}}>
        <Text style={styles.MainText}>Mail Us</Text>
        <Text style={styles.SubText}> Email us your queries</Text>
        </View>
    </TouchableOpacity>

    <TouchableOpacity activeOpacity={1} style={{flexDirection: 'row', alignItems: 'center', marginVertical:5}} onPress={()  => navigate('PrivacyPolicy')}>
      <Icon source="file-document-multiple-outline" size={30} color="deeppink" />
      <View style={{marginLeft: 20}}>
        <Text style={styles.MainText}>Privacy Policy</Text>
        <Text style={styles.SubText}> A Brief About Our Platform</Text>
        </View>
    </TouchableOpacity>
    <TouchableOpacity activeOpacity={1} style={{flexDirection: 'row', alignItems: 'center', marginVertical:5}} onPress={()  => navigate('TermsAndConditions')}>
      <Icon source="file-sign" size={30} color="deeppink" />
      <View style={{marginLeft: 20}}>
        <Text style={styles.MainText}>Terms And Conditions</Text>
        <Text style={styles.SubText}> A Brief About Our Platform</Text>
        </View>
    </TouchableOpacity>
    </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    padding: 20,
    paddingBottom: 5
  },
  text: {
    fontSize: 15,
    letterSpacing:1.5,
    color: 'white',
    marginRight: 10
  },
  MainText:{
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  SubText:{
    marginTop: 5,
    fontSize: 12,
    color: 'rgba(255,255, 255, 0.75)',
  },
  contactButton:{
    borderRadius: 8,
    width: width * 0.4,
    height: 75,
    backgroundColor: '#eb007c',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    padding: 10,
  },
  button: {
    borderRadius: 8,
    backgroundColor: '#eb007c',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'semibold',
  },
});

export default Profile;