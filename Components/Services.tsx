import * as React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import ServiceCard from './ServiceCard';
const Services = () =>{
const data = [
  {  id: '1', title : 'Air conditioner', img: require('../assets/images/services/air-conditioner-(2).png'), routeName:'ACMaintenance'},
   { id: '2', title : 'Electrical', img: require('../assets/images/services/electrician.png'), routeName:'ACMaintenance'},
   { id: '3', title : 'Plumbing', img: require('../assets/images/services/pipeline-(2).png'), routeName:'ACMaintenance'},
{ id: '4', title : 'Handyman', img: require('../assets/images/services/handsaw.png'), routeName:'ACMaintenance'},];
    return (<View>
<Text variant='headlineSmall' >All Services</Text>
<View style={{ flexDirection: 'row', flexWrap:'wrap'}} >
{data.map((item, key) => <ServiceCard title={item.title} img={item.img} routeName={item.routeName} key={key}/>)}
    </View>
    </View>);
}

  const styles=StyleSheet.create({
    
  });
export default Services;