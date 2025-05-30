import * as React from 'react';
import { Surface, Text } from 'react-native-paper';
import { Image, Touchable, TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';
import { navigate } from '../Services/NavigationService';

const ServiceCard = ( {img,title, routeName} :{ img: any , title: string, routeName: string}) => {
  return (
    <TouchableOpacity onPress={()=>{navigate(routeName)}}>
    <Surface style={styles.surface} mode='flat'>
    <Image source={img} style={styles.image} />
    <Text variant='titleSmall'>{title}</Text>
 </Surface>
 </TouchableOpacity>
      );
}
// const styles = StyleSheet.create({
//     card: { padding: 10, elevation: 3 , alignItems:'center', justifyContent:'center'},
//    image: { width: 80, height: 80, borderRadius: 10, marginBottom: 10 ,resizeMode:'cover', alignItems:'center', justifyContent:'center'},
//    title: { textAlign: 'center', fontSize: 16, fontWeight: 'bold' }
//    });
   const styles = StyleSheet.create({
    surface: {
      padding: 8,
      width: 110,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10,
      marginVertical: 7,
      backgroundColor: 'none',
    },
    image: { width: 50, height: 50, borderRadius: 10, marginBottom: 5 ,resizeMode:'cover', tintColor: '#97d700'},

  });
   export default ServiceCard;