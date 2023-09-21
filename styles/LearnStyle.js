import { StyleSheet } from "react-native";

const LearnStyle = StyleSheet.create({
  round1View: {
    flex: 2,
    justifyContent: "center",
    alignItems: "flex-start",
    // backgroundColor: "red",
  },
  flashCardView: {
    flex: 3,
    // backgroundColor: "blue",
  },
  arrowView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "green",
  },
  buttonsView: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "yellow",
  },
  round2View: {
    flex: 2,
    justifyContent: "center",
    alignItems: "flex-end",
    // backgroundColor: "purple",
  },
  flashCardImage: {
    flex: 1,
    width: "100%", // Adjust the width as needed
    height: "100%", // Adjust the height as needed
    justifyContent: "center",
    flexDirection: "row",
   
  },
  flashCarText: {
    fontSize: 22, // Adjust the font size as needed
    color: "white", // Adjust the text color as needed
    fontFamily: "Kristen-Normal-ITC-Std-Regular",
    justifyContent: "center",
    alignSelf: "center",
  },
  showAnswerButton: {
    width: "80%", // Adjust the width as needed
    height: "80%", // Adjust the height as needed
    justifyContent: "center",
    alignItems: "center",
  },
  showAnswerImage: {
    flex: 1,
    width: "100%", // Adjust the width as needed
    height: "100%", // Adjust the height as needed
    justifyContent: "center",
    alignItems: "center",
  },
  showAnswerText: {
    fontSize: 17, // Adjust the font size as needed
    color: "white", // Adjust the text color as needed
    fontFamily: "Kristen-Normal-ITC-Std-Regular",
  },
  remaininWordCount: {
    fontSize: 22,
    color: "white",
    fontFamily: "Kristen-Normal-ITC-Std-Regular",
    alignSelf: "center",
    position: "absolute",
    bottom: "10%",
    right: "20%",
  },
});

export default LearnStyle;
