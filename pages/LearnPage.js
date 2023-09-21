import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import React from "react";
import BackgroundStyle from "../styles/BackgroundStyle";
import LearnStyle from "../styles/LearnStyle";

export default function LearnPage() {
  return (
    <ImageBackground
      source={require("../assets/backgroundImage.png")}
      resizeMode="cover"
      style={BackgroundStyle.container}
    >
      <View style={LearnStyle.round1View}>
        <Image
          source={require("../assets/learnPageRound.png")}
          resizeMode="contain"
          style={{ marginLeft: "5%" }}
        ></Image>
      </View>
      <View style={LearnStyle.flashCardView}>
        <ImageBackground
          source={require("../assets/flashCard.png")}
          resizeMode="contain"
          style={LearnStyle.flashCardImage}
        >
          <Text style={LearnStyle.flashCarText}>Apple</Text>

          <Text style={LearnStyle.remaininWordCount}>12/72</Text>
        </ImageBackground>
      </View>
      <View style={LearnStyle.arrowView}>
        <Image
          source={require("../assets/arrow.png")}
          resizeMode="contain"
        ></Image>
      </View>
      <View style={LearnStyle.buttonsView}>
        <TouchableOpacity style={LearnStyle.showAnswerButton}>
          <ImageBackground
            source={require("../assets/showAnswer.png")}
            resizeMode="contain"
            style={LearnStyle.showAnswerImage}
          >
            <Text style={LearnStyle.showAnswerText}>Show Answer</Text>
          </ImageBackground>
        </TouchableOpacity>
      </View>
      <View style={LearnStyle.round2View}>
        <Image
          source={require("../assets/learnPageRound.png")}
          resizeMode="contain"
          style={{ marginRight: "5%" }}
        ></Image>
      </View>
    </ImageBackground>
  );
}
