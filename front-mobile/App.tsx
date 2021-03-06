import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { AppLoading } from 'expo';
import { View } from 'react-native';
import { useFonts, Play_400Regular, Play_700Bold } from '@expo-google-fonts/play';
import Routes from './src/routes'; 


export default function App() {
  const [fontsLoaded] = useFonts({
    Play_400Regular,
    Play_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <View style={{flex: 1}}>
        <StatusBar style="light" />
        <Routes />
      </View> 
    );
  }
}