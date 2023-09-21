import {
  View,
  ImageBackground,
  Image,
  Dimensions,
  TouchableOpacity,
  Text,
} from "react-native";
import React from "react";
import BackgroundStyle from "../styles/BackgroundStyle";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
import { useNavigation } from "@react-navigation/native";
import HomeStyle from "../styles/HomeStyle";

export default function HomePage() {
  const navigation = useNavigation();

  SplashScreen.preventAutoHideAsync();

  const [fontsLoaded] = useFonts({
    "Kristen-Normal-ITC-Std-Regular": require("../assets/fonts/Kristen-Normal-ITC-Std-Regular.ttf"),
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
    <ImageBackground
      source={require("../assets/backgroundImage.png")}
      resizeMode="cover"
      style={BackgroundStyle.container}
    >
      <Image
        source={require("../assets/headerImage.png")}
        style={HomeStyle.headerImage}
      />
      <View style={HomeStyle.roundView}>
        <Image
          source={require("../assets/home2.png")}
          style={HomeStyle.roundImages1}
        />
        <Image
          source={require("../assets/home3.png")}
          style={HomeStyle.roundImages2}
        />
        <Image
          source={require("../assets/home4.png")}
          style={HomeStyle.roundImages3}
        />
        <Image
          source={require("../assets/home1.png")}
          style={HomeStyle.roundImages4}
        />
      </View>
      <View style={HomeStyle.buttonsView} onLayout={onLayoutRootView}>
        <TouchableOpacity style={HomeStyle.buttons}>
          <Text style={HomeStyle.buttonText}>Popular Words</Text>
          <Image
            source={require("../assets/buttonlogo.png")}
            style={HomeStyle.buttonImage} 
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={HomeStyle.buttons}
          onPress={() => {
            navigation.navigate("MyDictionary");
          }}
        >
          <Text style={HomeStyle.buttonText}>My Dictionary</Text>
          <Image
            source={require("../assets/buttonlogo.png")}
            style={HomeStyle.buttonImage} 
          />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
