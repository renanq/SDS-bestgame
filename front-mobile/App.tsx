import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { AppLoading } from 'expo';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts, Play_400Regular, Play_700Bold } from '@expo-google-fonts/play';
import Header from './src/components/Header';
import Home from './src/pages/Home';


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
        <Header />
        <Home />
      </View> 
    );
  }
}