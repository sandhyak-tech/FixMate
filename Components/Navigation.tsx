import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { Appbar, BottomNavigation, Text } from 'react-native-paper';
import Home from './Home';
import ACMaintenance from './ACMaintenanace';
import { StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import SignInScreen from './SignIn';
import BookingScreen from './Booking';
import Profile from './Profile';
import PrivacyPolicy from './PrivacyPolicy';
import TermsAndCondtiotions from './Terms';
import Services from './Services';

const AlbumsRoute = () => <Text>Albums</Text>;

const CustomHeader = ({ navigation, title }:{navigation : any, title: string}) => (
  <Appbar.Header style={styles.transparent}>
     <LinearGradient
             colors={['rgba(0, 0, 0, 1)', 'rgba(235, 0, 124, 1)']} // ✅ Adjust opacity
             locations={[0.5, 1]} // ✅ 0% Black, 70% Pink, 100% Transparent
             start={{ x: 0.74, y: 1 }}// ✅ 207-degree effect
             end={{ x: 0.26, y: 0 }}
             style={styles.gradient}
          />
    {navigation.canGoBack() && <Appbar.BackAction onPress={() => navigation.goBack()} />}
    <Appbar.Content title={title}  titleStyle={{justifyContent: 'center'}}/>
  </Appbar.Header>
);

const screenTitles: { [key: string]: string } = {
  MainTabs: 'FixMate App',
  ACMaintenance: 'AC Maintenance',
  ElectricalMaintenance: 'Electrical Maintenance',
  Booking: 'Book an Appointment',
  PrivacyPolicy: 'Privacy Policy',
  TermsAndConditions: 'Terms and Conditions',
};

const BottomTabs = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: 'Home', focusedIcon: 'home', unfocusedIcon: 'home-outline'},
    { key: 'services', title: 'Services', focusedIcon: 'toolbox', unfocusedIcon: 'toolbox-outline'},

    // { key: 'bookings', title: 'Bookings', focusedIcon: 'calendar', unfocusedIcon: 'calendar-outline' },
    { key: 'profile', title: 'Profile', focusedIcon: 'account', unfocusedIcon: 'account-outline' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: () => <Home/>,
bookings: AlbumsRoute,
services: () => (<View style={{padding: 20}}><Services/></View>),
    profile: () => <Profile/>,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      activeColor="#eb007c"
      
          />
  );
};

// Stack Navigator for handling screens
const Stack = createStackNavigator();

const MainStack = () => (
  <Stack.Navigator
  
    screenOptions={({ navigation, route }) => ({
      header: () => <CustomHeader navigation={navigation} title={screenTitles[route.name] || 'FixMate'}  />,
    })}
  >
    {/* Bottom Navigation */}
    <Stack.Screen name="MainTabs" component={BottomTabs} options={{ headerShown: false }} />

    {/* Hidden Screen (Not in Bottom Tabs) */}
    <Stack.Screen name="ACMaintenance"  component={ACMaintenance} />
    <Stack.Screen name="Booking"  component={BookingScreen} />
        <Stack.Screen name="PrivacyPolicy"  component={PrivacyPolicy} />
        <Stack.Screen name="TermsAndConditions"  component={TermsAndCondtiotions} />

    <Stack.Screen name="SignIn" component={SignInScreen} options={{ headerShown: false }} />
  </Stack.Navigator>
);


const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: 56, // Default Appbar height
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  transparent: {
    backgroundColor: 'transparent', // Make Appbar transparent to show image
  },
  
  gradient: {
    ...StyleSheet.absoluteFillObject, // Covers the entire image
  },
});

export default MainStack;