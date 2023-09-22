import { StyleSheet } from "react-native";

const LearnStyle = StyleSheet.create({
  round1View: {
    flex: 2,
    justifyContent: "center",
    alignItems: "flex-start",
    // backgroundColor: "red",
  },
  puzzleUpView: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
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
  arrowView2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "green",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  buttonsView: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "yellow",
  },
  buttonsView2: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "yellow",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  round2View: {
    flex: 2,
    justifyContent: "center",
    alignItems: "flex-end",
    // backgroundColor: "purple",
  },
  puzzleDownView: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
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
