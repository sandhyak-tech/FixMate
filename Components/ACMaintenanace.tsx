import * as React from 'react';
import { View, Image, Dimensions, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { ScrollView } from 'react-native';
import { DataTable, Text, Button, ActivityIndicator } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';
import FAQSection from './FAQ';
import AsyncStorage from "@react-native-async-storage/async-storage"; // Store login state
import { navigate } from '../Services/NavigationService';

const { width, height } = Dimensions.get('window');
const features = ['Certified Multi-Technician Teams', 'Transparent Pricing', 'Advanced Equipment and Quality Materials', 'Reliability and Professionalism', 'Tailored Maintenance Plans'];

const ACMaintenance = () => {
  const [loading, setLoading] = React.useState(false);
  const checkLoginStatus = async () => {
    const userToken = await AsyncStorage.getItem("userToken");
    if (userToken) {
      navigate("Booking"); // Redirect if logged in
    }
    else{
      navigate("SignIn");
    }
    setLoading(false);
  };
// React.useEffect(() => {
  

//   checkLoginStatus();
// }, []);

if (loading) {
return(
<Image
  source={require('../assets/images/logomotion-ezgif.com-video-to-gif-converter.gif')}
  style={{ width: 100, height: 100 }}
  resizeMode={'contain'}

/>);
}
  return (
    <TouchableOpacity activeOpacity={1} style={styles.container}>
      <ScrollView style={{marginBottom:60}}>
        <Image source={require('../assets/images/electrician-with-screwdriver-repairing-air-conditioner-indoors-scaled.jpg')}
          style={{ width: width - 20, resizeMode: 'cover', height: height * 0.3, borderRadius: 10, alignItems: 'center', marginBottom: 10 }}
        />
        <Text variant='headlineSmall' style={{ color: 'white', marginBottom: 10 }}>AC Maintenance</Text>
        <Text variant='bodySmall' style={{ color: 'rgba(255,255,255,0.88)' }}>At FixMate, we believe that a reliable air conditioning system is more than just a luxury—it’s a necessity for maintaining comfort in the hot and humid climate of Dubai. We offer comprehensive AC services designed to keep your home cool, fresh, and energy-efficient.</Text>
        <View style={{ height: 80, flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
          <Text variant='bodyMedium' style={{ color: 'rgba(255,255,255,0.88)' }}>Why</Text>
          <Image source={require('../assets/images/Master-ALT-e1732087309434.png')} style={{ width: 100, height: '100%', marginHorizontal: 10 }} resizeMode='contain' />
          <Text variant='bodyMedium' style={{ color: 'rgba(255,255,255,0.88)' }}>?</Text>
        </View>
        <DataTable>
          {/* Table Header */}
          <DataTable.Header style={styles.header}>
            <DataTable.Title style={{ width: width * 0.8 }} textStyle={{ color: 'black' }}>Feature</DataTable.Title>
            <DataTable.Title style={{ ...styles.center_alignment, width: width * 0.1 }} numeric textStyle={{ color: 'black' }}>Local vendors</DataTable.Title>
            <DataTable.Title style={{ width: width * 0.1, ...styles.center_alignment }} numeric textStyle={styles.premiumColumn}>FixMate</DataTable.Title>
          </DataTable.Header>

          {features.map((feature, index) => (
            <DataTable.Row style={{ padding: 0 }} key={index}>
              <DataTable.Cell style={{ width: width * 0.8, flex: 1, paddingHorizontal: 5 }} textStyle={{ fontWeight: 100 }}><Text style={{ flexWrap: 'wrap', flex: 1 }}>{feature}</Text></DataTable.Cell>
              <DataTable.Cell numeric style={{ width: width * 0.1, ...styles.center_alignment }} >
                <MaterialIcons name="close" size={15} color="red" />
              </DataTable.Cell>
              <DataTable.Cell numeric style={{ ...styles.premiumCell, width: width * 0.1 }}>
                <MaterialIcons name="check" size={15} color="#97d700" />
              </DataTable.Cell>
            </DataTable.Row>
          ))}
        </DataTable>
        <FAQSection />
      </ScrollView>
      <View style={styles.buttonContainer}>
        <Button mode="contained" style={styles.button} onPress={() => checkLoginStatus()}>
          <Text style={styles.buttonText}>Book this Service</Text>
        </Button>
      </View>
    </TouchableOpacity>

  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  container: { 
    backgroundColor: 'black', 
    padding: 10,
    height: height * 0.9
  },
  header: {
    backgroundColor: '#f0f0f0', // Light gray header background
    alignItems: 'center', // Center align content
    justifyContent: 'center',
    paddingHorizontal: 5
  },
  premiumColumn: {
    fontWeight: 'bold', // Make header text bold
    color: '#E3007E', // Premium pink color for text
  },
  center_alignment: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  premiumCell: {
    alignItems: 'center', // Center align icons
    borderRadius: 5, // Rounded corners for better UI
    justifyContent: 'center', // Center align icons
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    right: 10,
    color: 'white',
  },
  button: {
    borderRadius: 8,
    padding: 8,
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
export default ACMaintenance;