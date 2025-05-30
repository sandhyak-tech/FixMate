import React, { useState } from 'react';
import { ScrollView, StyleSheet, Animated, View } from 'react-native';
import { List ,Text} from 'react-native-paper';

const faqData = [
  { question: 'What types of AC systems do you service?', answer: 'We service all types of AC systems, including split units, central air conditioning, ducted systems, and window units. Our technicians are experienced with a wide range of brands and models.' },
  { question: 'Is professional AC duct cleaning necessary?', answer: 'Absolutely. Over time, dust, debris, and allergens accumulate in AC ducts, reducing airflow and affecting air quality. Professional duct cleaning improves your system\'s efficiency and ensures cleaner, healthier indoor air.' },
  { question: 'Do you provide emergency AC repair services? ( In emergency service )', answer: 'Yes, we offer emergency AC repair services to address urgent issues. Our team is available to ensure you’re never left without cooling during critical times.' },
];

const FAQSection = () => {
  const [expanded, setExpanded] = useState(null);
  const [animations, setAnimations] = useState(faqData.map(() => new Animated.Value(0)));

  const handlePress = (index) => {
    const newExpanded = expanded === index ? null : index;

    // Animate arrow rotation and background color change
    Animated.timing(animations[index], {
      toValue: newExpanded === index ? 1 : 0,
      duration: 200,
      useNativeDriver: false, // Required for background color change
    }).start();

    setExpanded(newExpanded);
  };

  return (
    <View style={styles.container}>
        <Text variant='headlineSmall' style={{marginVertical: 5}}>FAQs</Text>
      {faqData.map((item, index) => {
        const rotate = animations[index].interpolate({
          inputRange: [0, 1],
          outputRange: ['0deg', '180deg'], // Rotates the down icon
        });

        return (
              <List.Accordion
              key={index}
                title={item.question}
                expanded={expanded === index}
                onPress={() => handlePress(index)}
                titleStyle={styles.question}
                titleNumberOfLines={2} 
                theme={{ colors: { background: "transparent" } }} 
                style={{...styles.accordion, backgroundColor: expanded === index ? '#eb007c' : 'transparent'}}
                right={() => (
                  <Animated.View style={{ transform: [{ rotate }] , alignItems:'center', justifyContent:'center'}}>
                    <List.Icon icon="arrow-down" color='#97d700' />
                  </Animated.View>
                )}
              >
                <List.Item title={item.answer} titleNumberOfLines={5} titleStyle={styles.answer} />
              </List.Accordion>
       );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical:5  },
  accordion: {
    borderRadius: 8,
    borderColor:'#eb007c',
    borderWidth:1,
backgroundColor:'transparent',
marginBottom: 10
  },
   question: {
    fontSize: 16,
    fontWeight: 'bold',
    color:'white',
    flexWrap:'wrap',
    backgroundColor:'transparent'
  },
  answer: {
    fontSize: 14,
    color: 'white',
  },
});

export default FAQSection;
