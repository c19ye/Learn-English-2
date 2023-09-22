import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import BackgroundStyle from "../styles/BackgroundStyle";
import LearnStyle from "../styles/LearnStyle";

export default function LearnPage() {
  const [showAnswerButtonVisible, setShowAnswerButtonVisible] = useState(true);
  const [iKnowButtonVisible, setIKnowButtonVisible] = useState(false);

  const toggleButtons = () => {
    setShowAnswerButtonVisible(false);
    setIKnowButtonVisible(true);
  };

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
          {showAnswerButtonVisible && (
            <Text style={LearnStyle.flashCarText}>Apple</Text>
          )}
          {iKnowButtonVisible && (
            <Text style={LearnStyle.flashCarText}>Elma</Text>
          )}
          <Text style={LearnStyle.remaininWordCount}>12/72</Text>
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
      {iKnowButtonVisible && (
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
              <Text style={LearnStyle.showAnswerText}>Show Answer</Text>
            </ImageBackground>
          </TouchableOpacity>
        </View>
      )}
      {iKnowButtonVisible && (
        <View style={LearnStyle.buttonsView2}>
          <TouchableOpacity
            style={LearnStyle.showAnswerButton}
            onPress={toggleButtons}
          >
            <ImageBackground
              source={require("../assets/iKnowButton.png")}
              resizeMode="contain"
              style={LearnStyle.showAnswerImage}
            ></ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity
            style={LearnStyle.showAnswerButton}
            onPress={toggleButtons}
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
