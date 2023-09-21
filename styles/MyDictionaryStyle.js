import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  addButton: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between", // Align elements at opposite ends
    paddingHorizontal: 10,
    flex: 1,
  },
  words: {
    width: "100%",
    flex: 7,
    // backgroundColor: "blue",
  },
  buttons: {
    width: "100%",
    flex: 2,
    // backgroundColor: "green",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  buttonText: {
    fontFamily: "Kristen-Normal-ITC-Std-Regular",
    alignSelf: "center",
    justifyContent: "center",
    textShadowColor: "rgba(0, 0, 0, 0.3)", // Gölge rengi (siyah)
    textShadowOffset: { width: 0, height: 4 }, // Gölge konumu (x ve y koordinatları)
    textShadowRadius: 7, // Gölge yarıçapı
    fontSize: 19,
    color: "#73007D",
    textShadowColor: "#F780F2", // Stroke rengi
    textShadowOffset: { width: -1, height: -1 }, // Stroke kalınlığı
  },
  buttonGrad: {
    height: 80,
    width: 150,
    borderRadius: 15,
    position: "absolute",
    bottom: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonParent: {
    height: 80,
    width: 150,
    borderRadius: 15,
    backgroundColor: "#AB8EC6",
  },
  wordCount: {
    fontSize: 22,
    fontFamily: "Kristen-Normal-ITC-Std-Regular",
  },
  addButton: {
    width: "20%",
    height: "50%",
  },
  addButtonIcon: {
    width: "100%",
    height: "100%",
  },
  listView: {
    borderBottomWidth: 1,
    borderBottomColor: "black",
    flexDirection: "row", // Arrange text and edit icon side by side
    alignItems: "center", // Vertically align items in the row
    padding: 12,
  },
  listText: {
    fontFamily: "Kristen-Normal-ITC-Std-Regular",
    fontSize: 18,
    color: "black",
    flex: 1, // Allow the text to take up available space
  },
  editnDeleteButton: {
    width: "10%",
    height: "100%",
    alignSelf: "flex-end",
  },
  editnDeleteButtonIcon: {
    width: "60%",
    height: "100%",
    flex: 1,
  },
});

export default styles;
