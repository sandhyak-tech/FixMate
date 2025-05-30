import * as React from 'react';
import { ScrollView, TouchableOpacity, View, Text } from 'react-native';
import ImageCarousel from './Carousel';
import Services from './Services';
import { Icon } from 'react-native-paper';
import { Image } from 'expo-image';

export default function Home() {
const HappinessData = [
  { id: '1', title: 'Fast Service', icon: 'clock-outline' },
  { id: '2', title: 'Live Support', icon: 'message-text-outline' },
  { id: '3', title: 'Predefined Pricing', icon: 'currency-usd' },
  { id: '4', title: 'Verified Professionals', icon: 'check-circle-outline' }]
    return (<ScrollView style={{ flex: 1, margin: 20 }}>
        <TouchableOpacity activeOpacity={1}>
        <ImageCarousel />
        <Services />
        <Image source={require('../assets/images/logomotion-ezgif.com-video-to-gif-converter.gif')} style={{ width: '100%', height: 170, borderRadius: 10, marginBottom: 10 , alignSelf:'center'}} contentFit='cover' transition={100}/>
       <View>
        <Text style={{ fontSize: 25, fontWeight: 600, marginTop: 10,marginBottom:20, color:"deeppink" }}>Happiness Guarantee</Text>
       {
       HappinessData.map((item) => (
        <View  key={item.id}  style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
            <View  style={{
                borderWidth: 1, borderColor: '#E3007E', borderRadius: 10, padding: 10, backgroundColor: '#E3007E', 
                marginRight: 10
                }}>
        <Icon   source={item.icon} color="white" size={20} />
        </View>
        <Text style={{color:"white", fontSize:20}}> {item.title}</Text>
        </View>
       ))}
       </View>
        </TouchableOpacity>
    </ScrollView>);
}