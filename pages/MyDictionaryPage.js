import {
  FlatList,
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Alert,
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
  const [counter, setCounter] = useState(0);

  // const deleteJSONFile = async (JSON_FILE_PATH) => {
  //   try {
  //     // Dosyayı sil
  //     await FileSystem.deleteAsync(JSON_FILE_PATH, { idempotent: true });

  //     Alert.alert("Dosya Silindi", "Dosya başarıyla silindi.");
  //   } catch (error) {
  //     console.error("Dosya silinirken hata oluştu:", error);
  //     Alert.alert("Hata", "Dosya silinirken bir hata oluştu.");
  //   }
  // };

  const deleteDataFromJSON = async (getId) => {
    const dataToDelete = { id: getId }; // Change this to the data you want to delete

    try {
      // Read the existing JSON data from the file
      const jsonContent = await FileSystem.readAsStringAsync(JSON_FILE_PATH);

      // Parse the JSON data into an object
      const jsonData = JSON.parse(jsonContent);

      // Filter out the data you want to delete
      const filteredData = jsonData.filter(
        (item) => item.id !== dataToDelete.id
      );

      // Convert the filtered data back to JSON string
      const updatedJSONContent = JSON.stringify(filteredData);

      // Write the updated JSON data back to the file
      await FileSystem.writeAsStringAsync(JSON_FILE_PATH, updatedJSONContent);

      Alert.alert("Data Deleted", "Data has been deleted successfully.", [
        {
          text: "OK",
          onPress: () => {
            setCounter(counter + 1);
          },
        },
      ]);
    } catch (error) {
      console.error("Error deleting data:", error);
      Alert.alert("Error", "An error occurred while deleting data.");
    }
  };

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
      setJsonData([]);
      console.log("gelenjson:",jsonData);
      // Okunan verileri setJsonData ile saklayın
      
        await parsedData.forEach(element => {
          const currentDateTime = new Date();
          const currentDate=currentDateTime.toISOString().split('T')[0];
          const currentTime=currentDateTime.toTimeString().split(' ')[0];
          var flag = false;
          if(element.learn >= 2){
            if(element.date <= currentDate ){
              console.log("gelen",element," ",element.date," ",element.time)
              setJsonData(prevData => [...prevData, element]);
              flag = true;

  
            }
          }
          else{
            if(element.time <= currentTime && flag == false){
              console.log("gelen2",element," ",element.date," ",element.time)
              setJsonData(prevData => [...prevData, element]);

            }
          }
        });
      
      // Konsola yazdırın
      console.log("JSON Dosya İçeriği:", jsonData);

    } catch (error) {
      console.error("Veri okunurken hata oluştu:", error);
    }
  };
  useEffect(() => {
    if (isFocused) {
      setJsonData([]);
      readDataFromJsonFile();
      //deleteJSONFile(JSON_FILE_PATH);
    }
    
  }, [isFocused, counter]);

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
            navigation.navigate("AddWord", { param: "Add" });
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
              <TouchableOpacity
                style={MyDictionaryStyle.editnDeleteButton}
                onPress={() => {
                  navigation.navigate("AddWord", {
                    param: "Edit",
                    id: item.id,
                  });
                }}
              >
                <Image
                  source={require("../assets/editIcon.png")}
                  resizeMode="cover"
                  style={MyDictionaryStyle.editnDeleteButtonIcon}
                ></Image>
              </TouchableOpacity>
              <TouchableOpacity
                style={MyDictionaryStyle.editnDeleteButton}
                onPress={() => deleteDataFromJSON(item.id)}
              >
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
            {
              jsonData.length == 0
                ? Alert.alert("Error","You have no words to repeat.")
                : navigation.navigate("Learn", {
                    param: jsonData,
                    button: "repeatAll",
                  });
            }
          }}
        >
          <Image
            source={require("../assets/myDictionaryRepeatButton.png")}
            resizeMode="cover"
          ></Image>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            {
              jsonData.length == 0
                ? Alert.alert("Error","You have no words to learn.")
                : navigation.navigate("Learn", {
                    param: jsonData,
                    button: "learn",
                  });
            }
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
