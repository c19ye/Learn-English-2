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
import A1Data from "../assets/data/A1.json";
import A2Data from "../assets/data/A2.json";
import { useMemo } from "react";

export default function LevelWordPage({ route }) {
  const { param } = route.params;
  const [kelimeListesi, setKelimeListesi] = useState([]);
  const [checkedItems, setCheckedItems] = useState([]);

  useEffect(() => {
    var englishWords;
    console.log(param);
    if (param == "A1") {
      englishWords = A1Data.map((item) => ({ English: item.English }));
    } else if (param == "A2") {
      englishWords = A2Data.map((item) => ({ English: item.English }));
    }

    //console.log(englishWords);
    if (englishWords) {
      setCheckedItems(Array(englishWords.length).fill(false));
      setKelimeListesi(englishWords);
    }
  }, [param]);

  const toggleCheckbox = useCallback(
    (index) => {
      setCheckedItems((prev) => {
        const newState = [...prev];
        newState[index] = !newState[index];
        // console.log(checkedItems);
        return newState;
      });
    },
    [checkedItems]
  );

  const textItem = useCallback(
    ({ item }) => <Text style={levelWordStyle.listText}>{item.English}</Text>,
    []
  );
  const checkboxItem = useCallback(
    ({ index }) => (
      <Checkbox
        value={checkedItems[index]}
        onValueChange={() => toggleCheckbox(index)}
        color={checkedItems[index] ? "black" : undefined}
      />
    ),
    [checkedItems]
  );

  const renderItem = useCallback(
    ({ item, index }) => (
      <TouchableOpacity
        onPress={() => toggleCheckbox(index)}
        style={levelWordStyle.listView}
      >
        {textItem({ item })}
        <View style={levelWordStyle.editnDeleteButton}>
          {checkboxItem({ index })}
        </View>
      </TouchableOpacity>
    ),
    [checkedItems]
  );

  const addMyDictionary = useCallback(
    () => (
      <TouchableOpacity>
        <Image
          source={require("../assets/levelWordAdd.png")}
          resizeMode="contain"
        ></Image>
      </TouchableOpacity>
    ),
    []
  );

  const learnButton = useCallback(
    () => (
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
    ),
    []
  );

  const memoizedFlatList = useMemo(
    () => (
      <FlatList
        data={kelimeListesi}
        keyExtractor={(item) => item.English}
        windowSize={5} // Adjust this value as needed
        removeClippedSubviews={true}
        initialNumToRender={10} // Adjust this value based on your needs
        maxToRenderPerBatch={10} // Adjust this value based on your needs
        renderItem={renderItem}
      />
    ),
    [kelimeListesi, checkedItems]
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
          <Text style={levelWordStyle.levelWordUpText}>{param} Level Word</Text>
        </ImageBackground>
      </View>
      <View style={levelWordStyle.words}>{memoizedFlatList}</View>
      <View style={levelWordStyle.buttons}>
        {addMyDictionary()}
        {learnButton()}
      </View>
    </ImageBackground>
  );
}
