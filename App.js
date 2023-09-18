import { Text, View,SafeAreaView } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './pages/HomePage';
import AndroidSafeViewer from './styles/AndroidSafeViewer';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
  
    <SafeAreaView style = {AndroidSafeViewer.AndroidSafeArea}>
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomePage} 
          options={{ headerShown: false }}
          />
        </Stack.Navigator>
    </NavigationContainer>
  </SafeAreaView>
      
  );
}