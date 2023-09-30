import {
  FlatList,
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React, { useState, useEffect } from "react";
import BackgroundStyle from "../styles/BackgroundStyle";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { LinearGradient } from "expo-linear-gradient";
import MyDictionaryStyle from "../styles/MyDictionaryStyle";
import { useNavigation } from "@react-navigation/native";
import AndroidSafeViewer from "../styles/AndroidSafeViewer";
import * as FileSystem from "expo-file-system";
import { useIsFocused } from "@react-navigation/native";

export default function MyDictionaryPage() {
  const [jsonData, setJsonData] = useState([]);
  const JSON_FILE_PATH = `${FileSystem.documentDirectory}/data.json`;
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  const dummyData = [
    {
      id: "1",
      front: "Hello",
      back: "Merhaba",
    },
    {
      id: "2",
      front: "Goodbye",
      back: "Güle güle",
    },
  ];

  const createOrOpenJsonFile = async () => {
    try {
      const fileInfo = await FileSystem.getInfoAsync(JSON_FILE_PATH);

      if (!fileInfo.exists) {
        // JSON dosyası yoksa oluşturun ve boş bir diziyle başlatın
        await FileSystem.writeAsStringAsync(JSON_FILE_PATH, "[]", {
          encoding: FileSystem.EncodingType.UTF8,
        });
      }
    } catch (error) {
      console.error("JSON dosyası oluşturulurken hata oluştu:", error);
    }
  };

  const readDataFromJsonFile = async () => {
    try {
      await createOrOpenJsonFile();

      // JSON dosyasını okuyun
      const currentData = await FileSystem.readAsStringAsync(JSON_FILE_PATH, {
        encoding: FileSystem.EncodingType.UTF8,
      });
      const parsedData = JSON.parse(currentData);

      // Okunan verileri setJsonData ile saklayın
      setJsonData(parsedData);

      // Konsola yazdırın
      console.log("JSON Dosya İçeriği:", parsedData);
    } catch (error) {
      console.error("Veri okunurken hata oluştu:", error);
    }
  };
  useEffect(() => {
    if (isFocused) {
      readDataFromJsonFile();
    }
  }, [isFocused]);

  return (
    <ImageBackground
      source={require("../assets/backgroundImage.png")}
      resizeMode="cover"
      style={BackgroundStyle.container}
    >
      <View style={MyDictionaryStyle.addButtonView}>
        <Text style={MyDictionaryStyle.wordCount}>
          Total Words: {jsonData.length}
        </Text>
        <TouchableOpacity
          style={MyDictionaryStyle.addButton}
          onPress={() => {
            navigation.navigate("AddWord");
          }}
        >
          <Image
            source={require("../assets/addIcon.png")}
            resizeMode="contain"
            style={MyDictionaryStyle.addButtonIcon}
          ></Image>
        </TouchableOpacity>
      </View>
      <View style={MyDictionaryStyle.words}>
        <FlatList
          data={jsonData}
          keyExtractor={(item) => item.id}
          key={(item) => item.id}
          renderItem={({ item }) => (
            <View style={MyDictionaryStyle.listView}>
              <Text style={MyDictionaryStyle.listText}>{item.front}</Text>
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
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Learn");
          }}
        >
          <Image
            source={require("../assets/myDictionaryRepeatButton.png")}
            resizeMode="cover"
          ></Image>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Learn");
          }}
        >
          <Image
            source={require("../assets/myDictionaryLearnButton.png")}
            resizeMode="cover"
          ></Image>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
