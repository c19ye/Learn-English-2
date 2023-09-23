import {
  FlatList,
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import BackgroundStyle from "../styles/BackgroundStyle";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { LinearGradient } from "expo-linear-gradient";
import MyDictionaryStyle from "../styles/MyDictionaryStyle";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import Checkbox from "expo-checkbox";
import levelWordStyle from "../styles/LevelWordStyle";
const dummyData = [
  { id: "1", title: "Apple" },
  { id: "2", title: "Banana" },
  { id: "3", title: "Orange" },
  { id: "4", title: "Grapes" },
  { id: "5", title: "Strawberry" },
  { id: "6", title: "Pineapple" },
  { id: "7", title: "Watermelon" },
  { id: "8", title: "Blueberry" },
  { id: "9", title: "Cherry" },
  { id: "10", title: "Mango" },
  { id: "11", title: "Peach" },
  { id: "12", title: "Pear" },
  { id: "13", title: "Lemon" },
  { id: "14", title: "Grapefruit" },
  { id: "15", title: "Kiwi" },
  { id: "16", title: "Raspberry" },
  { id: "17", title: "Cranberry" },
  { id: "18", title: "Blackberry" },
  { id: "19", title: "Avocado" },
  { id: "20", title: "Coconut" },
];

export default function LevelWordPage() {
  const navigation = useNavigation();

  const [isChecked, setChecked] = useState(false);

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
      onLayout={onLayoutRootView}
    >
      <View style={levelWordStyle.addButtonView}>
        <ImageBackground
          source={require("../assets/levelWordUp.png")}
          resizeMode="contain"
          style={levelWordStyle.addButtonIcon}
        >
          <Text style={levelWordStyle.levelWordUpText}>A1 Level Word</Text>
        </ImageBackground>
      </View>
      <View style={levelWordStyle.words}>
        <FlatList
          data={dummyData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={levelWordStyle.listView}>
              <Text style={levelWordStyle.listText}>{item.title}</Text>
              <View style={levelWordStyle.editnDeleteButton}>
                <Checkbox
                  value={isChecked}
                  onValueChange={setChecked}
                  color={isChecked ? "black" : undefined}
                />
              </View>
            </View>
          )}
        />
      </View>
      <View style={levelWordStyle.buttons}>
        <TouchableOpacity onPress={() => console.log("btn pressed")}>
          <Image
            source={require("../assets/levelWordAdd.png")}
            resizeMode="contain"
          ></Image>
        </TouchableOpacity>

        <TouchableOpacity  onPress={() => {
            navigation.navigate("Learn");
          }}>
          <Image
            source={require("../assets/levelWordLearn.png")}
            resizeMode="contain"
          ></Image>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
