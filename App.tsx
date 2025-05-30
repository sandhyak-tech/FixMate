import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { MD3DarkTheme, PaperProvider } from 'react-native-paper';
import MainStack from './Components/Navigation';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './Services/NavigationService';

const App = () => {
  return (
    <PaperProvider theme={MD3DarkTheme}>
      <NavigationContainer ref={navigationRef} theme={{...MD3DarkTheme, colors: { ...MD3DarkTheme.colors, card: '', text: '', border: '', notification: '', background:'#050607' }, fonts: { ...MD3DarkTheme.fonts, regular: { fontFamily: '', fontWeight: '400' }, medium: { fontFamily: '', fontWeight: '500' }, bold: { fontFamily: '', fontWeight: '700' }, heavy: { fontFamily: '', fontWeight: '900' } } }}>
        <MainStack />
        </NavigationContainer>
      <StatusBar style="light" />
    </PaperProvider>
  );
};

export default App;