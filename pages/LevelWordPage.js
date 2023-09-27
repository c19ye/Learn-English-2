import {
  FlatList,
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import BackgroundStyle from "../styles/BackgroundStyle";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { LinearGradient } from "expo-linear-gradient";
import MyDictionaryStyle from "../styles/MyDictionaryStyle";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";
import Checkbox from "expo-checkbox";
import levelWordStyle from "../styles/LevelWordStyle";
import AsyncStorage from "@react-native-async-storage/async-storage";
import A1Data from "../assets/data/A1.json";
import { useMemo } from "react";

export default function LevelWordPage() {
  const [kelimeListesi, setKelimeListesi] = useState([]);
  const [checkedItems, setCheckedItems] = useState([]);

  useEffect(() => {
    const englishWords = A1Data.map((item) => ({ English: item.English }));
    //console.log(englishWords);
    setCheckedItems(Array(englishWords.length).fill(false));
    setKelimeListesi(englishWords);
  }, []);

  const toggleCheckbox = (index) => {
    setCheckedItems((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };

  class WordItem extends React.PureComponent {
    render() {
      const { item, index, toggleCheckbox } = this.props;
      return (
        <TouchableOpacity
          onPress={() => toggleCheckbox(index)}
          style={levelWordStyle.listView}
        >
          <Text style={levelWordStyle.listText}>{item.English}</Text>
          <View style={levelWordStyle.editnDeleteButton}>
            <Checkbox
              value={checkedItems[index]}
              onValueChange={() => toggleCheckbox(index)}
              color={checkedItems[index] ? "black" : undefined}
            />
          </View>
        </TouchableOpacity>
      );
    }
  }

  const memoizedFlatList = useMemo(
    () => (
      <FlatList
        data={kelimeListesi}
        keyExtractor={(item) => item.English}
        renderItem={({ item, index }) => (
          <WordItem item={item} index={index} toggleCheckbox={toggleCheckbox} />
        )}
      />
    ),
    [kelimeListesi,checkedItems]
  );

  const navigation = useNavigation();

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
      <View style={levelWordStyle.words}>{memoizedFlatList}</View>
      <View style={levelWordStyle.buttons}>
        <TouchableOpacity>
          <Image
            source={require("../assets/levelWordAdd.png")}
            resizeMode="contain"
          ></Image>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Learn");
          }}
        >
          <Image
            source={require("../assets/levelWordLearn.png")}
            resizeMode="contain"
          ></Image>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
