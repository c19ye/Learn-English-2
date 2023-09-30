import { StyleSheet } from "react-native";

const AddWordStyle = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textView: {
    flex: 6,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
   
  },
  buttonView: {
    flex: 4,
    width: "100%",
    alignItems: "center",
  },
  input: {
    height: "30%",
    width: "80%",
    padding: 10,
  },
  addButton: {
    width: "50%", // Adjust the width as needed
    height: "50%", // Adjust the height as needed
    justifyContent: "center",
    alignItems: "center",
  },
  buttonImage: {
    flex: 1,
    width: "100%", // Adjust the width as needed
    height: "100%", // Adjust the height as needed
    justifyContent: "center",
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
    color: "#ffffff",
    textShadowColor: "black", // Stroke rengi
    textShadowOffset: { width: -1, height: -1 }, // Stroke kalınlığı
  },
});

export default AddWordStyle;
