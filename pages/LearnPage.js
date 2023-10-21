import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import BackgroundStyle from "../styles/BackgroundStyle";
import LearnStyle from "../styles/LearnStyle";
import * as FileSystem from "expo-file-system";
import { useNavigation } from "@react-navigation/native";

export default function LearnPage({ route }) {
  const { param } = route.params;
  const { button } = route.params;
  const [showAnswerButtonVisible, setShowAnswerButtonVisible] = useState(true);
  const [iKnowButtonVisible, setIKnowButtonVisible] = useState(false);
  const [counter, setCounter] = useState(0);
  const [showGo, setShowGo] = useState(true);
  const [last, setLast] = useState(false);
  const [last2, setLast2] = useState(false); //for repeatAll
  const navigation = useNavigation();
  

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
      const currentDateTime = new Date();
      const currentDate=currentDateTime.toISOString().split('T')[0];
      const currentTime=currentDateTime.toTimeString().split(' ')[0];
      if(data.learn >= 0){
        const currentDate=currentDateTime.toISOString().split('T')[0];
        currentDateTime.setMinutes(currentDateTime.getMinutes() + 1);
        const currentTime=currentDateTime.toTimeString().split(' ')[0];
        console.log("asd",currentDate,"sad",currentTime)
        data.date = currentDate;
        data.time = currentTime;
        data.learn = 1;
      }
      parsedData[targetItemIndex] = data;

      parsedData.find((item) => item.id === data.id);
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

  const toggleButtons = () => {
    if (button != "repeatAll") {
      setShowAnswerButtonVisible(false);
      setIKnowButtonVisible(true);
    }
    if (button == "repeatAll") {
      setShowGo(!showGo);
      if (showGo == false) {
        setCounter(counter + 1);
      }
      if (counter == param.length - 1) {
        setLast(true);
      }
      if (last) {
        navigation.navigate("MyDictionary");
      }
    }
  };
   function toogleButtonsReverse(taken){
        setShowAnswerButtonVisible(true);
    setIKnowButtonVisible(false);
    if(taken == "know"){      
      editDataFromJsonFile(param[counter]);
    }
    if(counter+1 == param.length){
      navigation.navigate("MyDictionary");
    }
    
    
    setCounter(counter + 1);
  };

  useEffect(() => {
    console.log("asdsa", param);
  });

  return (
    <ImageBackground
      source={require("../assets/backgroundImage.png")}
      resizeMode="cover"
      style={BackgroundStyle.container}
    >
      {showAnswerButtonVisible && (
        <View style={LearnStyle.round1View}>
          <Image
            source={require("../assets/learnPageRound.png")}
            resizeMode="contain"
            style={{ marginLeft: "5%" }}
          ></Image>
        </View>
      )}
      {iKnowButtonVisible && (
        <View style={LearnStyle.puzzleUpView}>
          <Image
            source={require("../assets/puzzleUp.png")}
            resizeMode="contain"
          ></Image>
        </View>
      )}

      <View style={LearnStyle.flashCardView}>
        <ImageBackground
          source={require("../assets/flashCard.png")}
          resizeMode="contain"
          style={LearnStyle.flashCardImage}
        >
          {showAnswerButtonVisible && showGo && (
            <Text style={LearnStyle.flashCarText}>{param[counter].front}</Text>
          )}
          {(iKnowButtonVisible || !showGo) && (
            <Text style={LearnStyle.flashCarText}>{param[counter].back}</Text>
          )}
          <Text style={LearnStyle.remaininWordCount}>
            {counter + 1}/{param.length}
          </Text>
        </ImageBackground>
      </View>

      {showAnswerButtonVisible && (
        <View style={LearnStyle.arrowView}>
          <Image
            source={require("../assets/arrow.png")}
            resizeMode="contain"
          ></Image>
        </View>
      )}
      {iKnowButtonVisible && button != "repeatAll" && (
        <View style={LearnStyle.arrowView2}>
          <Image
            source={require("../assets/leftArrow.png")}
            resizeMode="contain"
          ></Image>

          <Image
            source={require("../assets/rightArrow.png")}
            resizeMode="contain"
          ></Image>
        </View>
      )}

      {showAnswerButtonVisible && (
        <View style={LearnStyle.buttonsView}>
          <TouchableOpacity
            style={LearnStyle.showAnswerButton}
            onPress={toggleButtons}
          >
            <ImageBackground
              source={require("../assets/showAnswer.png")}
              resizeMode="contain"
              style={LearnStyle.showAnswerImage}
            >
              {!last && (
                <Text style={LearnStyle.showAnswerText}>
                  {showGo ? "Show Answer" : "Next"}
                </Text>
              )}
              {last && ( //if last word
                <Text style={LearnStyle.showAnswerText}>Finish</Text>
              )}
            </ImageBackground>
          </TouchableOpacity>
        </View>
      )}
      {iKnowButtonVisible && button != "repeatAll" && (
        <View style={LearnStyle.buttonsView2}>
          <TouchableOpacity
            style={LearnStyle.showAnswerButton}
            onPress={() => toogleButtonsReverse("know")}
          >
            <ImageBackground
              source={require("../assets/iKnowButton.png")}
              resizeMode="contain"
              style={LearnStyle.showAnswerImage}
            ></ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity
            style={LearnStyle.showAnswerButton}
            onPress={() => toogleButtonsReverse("dontknow")}
          >
            <ImageBackground
              source={require("../assets/iDontKnowButton.png")}
              resizeMode="contain"
              style={LearnStyle.showAnswerImage}
            ></ImageBackground>
          </TouchableOpacity>
        </View>
      )}

      {showAnswerButtonVisible && (
        <View style={LearnStyle.round2View}>
          <Image
            source={require("../assets/learnPageRound.png")}
            resizeMode="contain"
            style={{ marginRight: "5%" }}
          ></Image>
        </View>
      )}
      {iKnowButtonVisible && (
        <View style={LearnStyle.puzzleDownView}>
          <Image
            source={require("../assets/puzzleDown.png")}
            resizeMode="contain"
          ></Image>
        </View>
      )}
    </ImageBackground>
  );
}
