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

export default function MyDictionaryPage() {
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
      <View style={MyDictionaryStyle.addButtonView}>
        <Text style={MyDictionaryStyle.wordCount}>
          Word Count: {dummyData.length}
        </Text>
        <TouchableOpacity style={MyDictionaryStyle.addButton}>
          <Image
            source={require("../assets/addIcon.png")}
            resizeMode="contain"
            style={MyDictionaryStyle.addButtonIcon}
          ></Image>
        </TouchableOpacity>
      </View>
      <View style={MyDictionaryStyle.words}>
        <FlatList
          data={dummyData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={MyDictionaryStyle.listView}>
              <Text style={MyDictionaryStyle.listText}>{item.title}</Text>
              <TouchableOpacity style={MyDictionaryStyle.editnDeleteButton}>
                <Image
                  source={require("../assets/editIcon.png")}
                  resizeMode="cover"
                  style={MyDictionaryStyle.editnDeleteButtonIcon}
                ></Image>
              </TouchableOpacity>
              <TouchableOpacity style={MyDictionaryStyle.editnDeleteButton}>
                <Image
                  source={require("../assets/deleteIcon.png")}
                  resizeMode="cover"
                  style={MyDictionaryStyle.editnDeleteButtonIcon}
                ></Image>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
      <View style={MyDictionaryStyle.buttons}>
        <TouchableOpacity onPress={() => console.log("btn pressed")}>
          <View style={MyDictionaryStyle.buttonParent}>
            <LinearGradient
              colors={["#FDAF8B", "#E5A9B5"]}
              style={MyDictionaryStyle.buttonGrad}
            >
              <Text style={MyDictionaryStyle.buttonText}>Repeat All</Text>
            </LinearGradient>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => console.log("btn pressed")}>
          <View style={MyDictionaryStyle.buttonParent}>
            <LinearGradient
              colors={["#FDAF8B", "#E5A9B5"]}
              style={MyDictionaryStyle.buttonGrad}
            >
              <Text style={MyDictionaryStyle.buttonText}>Learn</Text>
            </LinearGradient>
          </View>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
