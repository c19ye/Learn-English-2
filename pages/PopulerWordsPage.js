import {
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import BackgroundStyle from "../styles/BackgroundStyle";
import PopulerWordsStyle from "../styles/PopulerWordsStyle";
import { TouchableHighlight } from "react-native-web";

export default function PopulerWordsPage() {
  return (
    <ImageBackground
      source={require("../assets/backgroundImage.png")}
      resizeMode="cover"
      style={BackgroundStyle.container}
    >
      <View style={PopulerWordsStyle.allLevelView}>
        <Image
          source={require("../assets/allLevelUp.png")}
          resizeMode="contain"
        ></Image>
      </View>
      <View style={PopulerWordsStyle.starOneView}>
        <TouchableOpacity>
          <Image
            source={require("../assets/A1.png")}
            resizeMode="contain"
          ></Image>
        </TouchableOpacity>
      </View>
      <View style={PopulerWordsStyle.starTwoView}>
        <TouchableOpacity>
          <Image
            source={require("../assets/A2.png")}
            resizeMode="contain"
          ></Image>
        </TouchableOpacity>
      </View>
      <View style={PopulerWordsStyle.starThreeView}>
        <TouchableOpacity>
          <Image
            source={require("../assets/B1.png")}
            resizeMode="contain"
          ></Image>
        </TouchableOpacity>
      </View>
      <View style={PopulerWordsStyle.starFourView}>
        <TouchableOpacity>
          <Image
            source={require("../assets/B2.png")}
            resizeMode="contain"
          ></Image>
        </TouchableOpacity>
      </View>
      <View style={PopulerWordsStyle.starFiveView}>
        <TouchableOpacity>
          <Image
            source={require("../assets/C1.png")}
            resizeMode="contain"
          ></Image>
        </TouchableOpacity>
      </View>
      <View style={PopulerWordsStyle.starSixView}>
        <TouchableOpacity>
          <Image
            source={require("../assets/C2.png")}
            resizeMode="contain"
          ></Image>
        </TouchableOpacity>
      </View>
      <View style={PopulerWordsStyle.bottomView}>
        <Text></Text>
      </View>
    </ImageBackground>
  );
}
