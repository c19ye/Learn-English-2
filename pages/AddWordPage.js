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
import { useIsFocused } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";

export default function AddWordPage({ route }) {
  const navigation = useNavigation();
  const { param } = route.params;
  const { id } = route.params;
  const [front, setFront] = useState("");
  const [back, setBack] = useState("");
  const [jsonData, setJsonData] = useState([]);
  const [counter, setCounter] = useState(0);
  const [lastItem, setLastItem] = useState({}); //[jsonData.length - 1]);
  const [editData, setEditData] = useState({});
  const isFocused = useIsFocused();

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
      await FileSystem.writeAsStringAsync(
        JSON_FILE_PATH,
        JSON.stringify(updatedData),
        { encoding: FileSystem.EncodingType.UTF8 }
      );

      // Güncellenmiş verileri JSON dosyasına yazın
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
      if (param == "Edit") {
        setEditData(parsedData.find((item) => item.id === id));
        setFront(parsedData.find((item) => item.id === id).front);
        setBack(parsedData.find((item) => item.id === id).back);
      }

      // Konsola yazdırın
      console.log("JSON Dosya İçeriği:", parsedData);
    } catch (error) {
      console.error("Veri okunurken hata oluştu:", error);
    }
  };

  const editDataFromJsonFile = async (data) => {
    try {
      await createOrOpenJsonFile();

      // JSON dosyasını okuyun
      const currentData = await FileSystem.readAsStringAsync(JSON_FILE_PATH, {
        encoding: FileSystem.EncodingType.UTF8,
      });
      const parsedData = JSON.parse(currentData);

      // Hedef öğeyi bulun
      const targetItemIndex = parsedData.findIndex(
        (item) => item.id === data.id
      );

      if (targetItemIndex === -1) {
        console.error(`ID ${data.id} ile eşleşen bir öğe bulunamadı.`);
        return; // Hedef öğe bulunamazsa işlemi durdurabilir veya hata işleyebilirsiniz.
      }
      parsedData[targetItemIndex] = data;

      parsedData.find((item) => item.id === id);
      // Güncelleme
      await FileSystem.writeAsStringAsync(
        JSON_FILE_PATH,
        JSON.stringify(parsedData),
        { encoding: FileSystem.EncodingType.UTF8 }
      );

      // Güncellenmiş verileri JSON dosyasına yazın
    } catch (error) {
      console.error("Veri yazılırken hata oluştu:", error);
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
      Alert.alert("Word Added", "Word has been added successfully.", [
        {
          text: "OK",
          onPress: () => {
            setCounter(counter + 1);
            readDataFromJsonFile();
            setFront("");
            setBack("");
          },
        },
      ]);
      console.log("JSON Dosya İçeriği:", jsonData);
      console.log("Save input");
    }
    console.log("Front: " + front + " Back: " + back);
  };

  const editInputWord = () => {
    if (front == "" || back == "") {
      console.log("Empty input");
      Alert.alert("Error", "Please Enter A Word");
      return;
    } else {
      const newData = {
        id: editData.id,
        front: front,
        back: back,
      };
      editDataFromJsonFile(newData);
      Alert.alert("Word Edited", "Word has been edited successfully.", [
        {
          text: "OK",
          onPress: () => {
            navigation.navigate("MyDictionary");
          },
        },
      ]);
      console.log("JSON Dosya İçeriği:", jsonData);
      console.log("Edit input");
    }
    console.log("Front: " + front + " Back: " + back);
  };
  useEffect(() => {
    if (isFocused) {
      if (editData.front == undefined) {
        readDataFromJsonFile();
      }
      console.log(
        "foundItem: " + editData.id + " " + editData.front + " " + editData.back
      );
    }
  }, [isFocused, counter, editData]);
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
            onPress={param === "Add" ? saveInputWord : editInputWord}
          >
            <ImageBackground
              source={require("../assets/showAnswer.png")}
              resizeMode="contain"
              style={AddWordStyle.buttonImage}
            >
              {param == "Add" && (
                <Text style={AddWordStyle.buttonText}>Add Word</Text>
              )}
              {param == "Edit" && (
                <Text style={AddWordStyle.buttonText}>Save Changes</Text>
              )}
            </ImageBackground>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}
