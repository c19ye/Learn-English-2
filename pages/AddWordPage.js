import {
  View,
  Text,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import React, { useState, useEffect } from "react";
import BackgroundStyle from "../styles/BackgroundStyle";
import AddWordStyle from "../styles/AddWordStyle";
import { Input } from "@rneui/themed";
import * as FileSystem from "expo-file-system";

export default function AddWordPage() {
  const [front, setFront] = useState("");
  const [back, setBack] = useState("");
  const [jsonData, setJsonData] = useState([]);
  const [counter, setCounter] = useState(0);
  const [lastItem, setLastItem] = useState({}); //[jsonData.length - 1]);

  const JSON_FILE_PATH = `${FileSystem.documentDirectory}/data.json`;
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

  const writeDataToJsonFile = async (data) => {
    try {
      await createOrOpenJsonFile();

      // JSON dosyasını okuyun
      const currentData = await FileSystem.readAsStringAsync(JSON_FILE_PATH, {
        encoding: FileSystem.EncodingType.UTF8,
      });
      const parsedData = JSON.parse(currentData);

      // Yeni verileri mevcut verilere ekleyin
      const updatedData = [...parsedData, data];

      // Güncellenmiş verileri JSON dosyasına yazın
      await FileSystem.writeAsStringAsync(
        JSON_FILE_PATH,
        JSON.stringify(updatedData),
        { encoding: FileSystem.EncodingType.UTF8 }
      );
    } catch (error) {
      console.error("Veri yazılırken hata oluştu:", error);
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
      setLastItem(parsedData[parsedData.length - 1]);

      

      // Konsola yazdırın
      console.log("JSON Dosya İçeriği:", parsedData);
    } catch (error) {
      console.error("Veri okunurken hata oluştu:", error);
    }
  };

  const saveInputWord = () => {
    if (front == "" || back == "") {
      console.log("Empty input");
      Alert.alert("Error", "Please Enter A Word");
      return;
    } else {
      var getId;
      if (jsonData.length == 0) {
        getId = 1;
      } else {
        getId = lastItem.id + 1;
      }
      const newData = {
        id: getId,
        front: front,
        back: back,
      };
      writeDataToJsonFile(newData);
      Alert.alert("Succesfull", "Word Added Successfully");
      console.log("JSON Dosya İçeriği:", jsonData);
      setFront("");
      setBack("");
      console.log("Save input");
    }
    console.log("Front: " + front + " Back: " + back);
  };
  useEffect(() => {
    readDataFromJsonFile();
  }, []);
  return (
    <ImageBackground
      source={require("../assets/backgroundImage.png")}
      resizeMode="cover"
      style={BackgroundStyle.container}
    >
      <View style={AddWordStyle.container}>
        <View style={AddWordStyle.textView}>
          <Input
            style={AddWordStyle.input}
            placeholder="Front"
            value={front}
            onChangeText={(front) => setFront(front)}
            errorStyle={{ color: "red" }}
            errorMessage={front === "" ? "Please enter a word" : undefined}
          />
          <Input
            style={AddWordStyle.input}
            placeholder="Back"
            value={back}
            onChangeText={(back) => setBack(back)}
            errorStyle={{ color: "red" }}
            errorMessage={back === "" ? "Please enter a word" : undefined}
          />
        </View>
        <View style={AddWordStyle.buttonView}>
          <TouchableOpacity
            style={AddWordStyle.addButton}
            onPress={saveInputWord}
          >
            <ImageBackground
              source={require("../assets/showAnswer.png")}
              resizeMode="contain"
              style={AddWordStyle.buttonImage}
            >
              <Text style={AddWordStyle.buttonText}>Add Word</Text>
            </ImageBackground>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}
