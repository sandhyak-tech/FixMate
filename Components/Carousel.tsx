import React from 'react';
import { View, Dimensions, StyleSheet, Pressable } from 'react-native';
import {Carousel} from 'react-native-basic-carousel';
import { Image } from 'expo-image';

const { width, height } = Dimensions.get('window');

const images = [
  { id: 1, url: require('../assets/images/electrician-installer-with-tool-his-hands-working-with-cable-construction-site-1024x683.jpg') },
  { id: 2, url: require('../assets/images/people-renovating-house-concept-1024x786.jpg') },
  { id: 3, url: require('../assets/images/repairing-air-conditioner-1024x683.jpg') },
];

const ImageCarousel = () => { 

  const renderItem = ({ item } : {item : any}) => (
    <Pressable onPress={() => {}}>
      <Image source={ item.url} style={styles.image} contentFit='cover' />
      </Pressable>
  );

  return (
    < View id="carousel-view" style={styles.container}>
    
<Carousel 
data={images} 
renderItem={renderItem}
itemWidth={width - 40}
paginationColor='#eb007c'
paginationType='default'
pagination
autoplay
ItemSeparatorComponent={() => <View style={{ width: 20 }} />}
/>
    </View>
  );
};                                                                                                          

const styles = StyleSheet.create({
  container: { justifyContent: 'center', alignItems: 'center' },
  image: { width: '100%', height: height*0.3, borderRadius: 10 } ,
});

export default ImageCarousel;