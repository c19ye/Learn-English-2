import { View,ImageBackground, Image,Dimensions,TouchableOpacity,Text } from 'react-native'
import React from 'react'
import BackgroundStyle from '../styles/BackgroundStyle';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');
SplashScreen.preventAutoHideAsync();

export default function HomePage() {
  const navigation = useNavigation();
  const [fontsLoaded] = useFonts({
    'Kristen-Normal-ITC-Std-Regular': require('../assets/fonts/Kristen-Normal-ITC-Std-Regular.ttf'),
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
    <ImageBackground source={require('../assets/backgroundImage.png')}
    resizeMode='cover' 
    style = {BackgroundStyle.container}
    >
      <Image source={require('../assets/headerImage.png')}
      style={{
        width: '100%',
        height: '30%',
        alignSelf: 'center',
        borderRadius: 10,}}
      />
      <View style={{ width : "100%" , height:"45%"}}>

     

      <Image source={require('../assets/home2.png')}
      style={{width: "34%", height: "35%", alignSelf: 'flex-start', borderRadius: 100,marginTop : "5%",marginLeft : "10%"}}
      />
       <Image source={require('../assets/home3.png')}
      style={{width: '34%', height: '35%', alignSelf: 'flex-end', borderRadius: 100,marginRight : "10%",marginTop : "-20%"}}
      />
      <Image source={require('../assets/home4.png')}
      style={{width: '34%', height: '35%', alignSelf: 'flex-start', borderRadius: 100,marginLeft : "10%"}}
      />
       <Image source={require('../assets/home1.png')}
      style={{width: '34%', height: '35%', alignSelf: 'flex-end', borderRadius: 100,marginRight : "10%",marginTop : "-20%"}}
      />
    </View>
    <View style={{ alignItems: "center", height: "25%",marginTop:"4%",}} onLayout={onLayoutRootView} >
  <TouchableOpacity
    style={{
      width: "75%",
      height: "30%",
      backgroundColor: "white",
      borderRadius: 50,
      marginTop: "5%",
      flexDirection: "row", // Satır düzeni ekleniyor
      justifyContent: "center", // Elemanları yatayda sağa hizala
      alignItems: "center", // Elemanları dikeyde ortala
      borderWidth: 1, // Kenarlık kalınlığı
    }}
    
  >
    <Text style={{fontFamily:'Kristen-Normal-ITC-Std-Regular', color: "black", fontSize: 20, textAlign: "center",flex:1 ,marginLeft:"15%"}}>
      Popular Words
    </Text>
    <Image
      source={require('../assets/buttonlogo.png')}
      style={{ width: "22%", height: "100%" }} // Resmin genişlik ve yüksekliğini ayarlayın
    />
    
  </TouchableOpacity>
  <TouchableOpacity
    style={{
      width: "75%",
      height: "30%",
      backgroundColor: "white",
      borderRadius: 50,
      marginTop: "5%",
      flexDirection: "row", // Satır düzeni ekleniyor
      justifyContent: "center", // Elemanları yatayda sağa hizala
      alignItems: "center", // Elemanları dikeyde ortala
      borderWidth: 1, // Kenarlık kalınlığı
    }}
    onPress={() => {navigation.navigate('MyDictionary')}}
  >
    <Text style={{fontFamily:'Kristen-Normal-ITC-Std-Regular', color: "black", fontSize: 20, textAlign: "center",flex:1 ,marginLeft:"15%"}}>
      My Dictionary
    </Text>
    <Image
      source={require('../assets/buttonlogo.png')}
      style={{ width: "22%", height: "100%" }} // Resmin genişlik ve yüksekliğini ayarlayın
    />
  </TouchableOpacity>
</View>

    </ImageBackground>
  )
}
