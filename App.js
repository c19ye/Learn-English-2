import { Text, View,SafeAreaView } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './pages/HomePage';
import MyDictionaryPage from './pages/MyDictionaryPage';
import AndroidSafeViewer from './styles/AndroidSafeViewer';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';

export default function App() {
  const Stack = createNativeStackNavigator();
  const [fontsLoaded] = useFonts({
    'Kristen-Normal-ITC-Std-Regular': require('./assets/fonts/Kristen-Normal-ITC-Std-Regular.ttf'),
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {

    return null;
  }
  
  return (
  
    <SafeAreaView style = {AndroidSafeViewer.AndroidSafeArea}>
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomePage} 
          options={{ headerShown: false }}
          />
          <Stack.Screen name="MyDictionary" onLayout={onLayoutRootView} component={MyDictionaryPage} 
            options={{
              headerTitle:"My Dictionary",
              headerTitleStyle: {
                fontFamily: 'Kristen-Normal-ITC-Std-Regular',
                
              },
              headerStyle: {
                backgroundColor: 'red',
               
                
              },
                          }}
          />

        </Stack.Navigator>
    </NavigationContainer>
  </SafeAreaView>
      
  );
}