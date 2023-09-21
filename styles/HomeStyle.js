import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  headerImage: {
    width: "100%",
    height: "30%",
    alignSelf: "center",
    borderRadius: 10,
  },
  roundView: {
    width: "100%",
    height: "45%",
  },
  roundImages1: {
    width: "34%",
    height: "35%",
    alignSelf: "flex-start",
    borderRadius: 100,
    marginTop: "5%",
    marginLeft: "10%",
  },
  roundImages2: {
    width: "34%",
    height: "35%",
    alignSelf: "flex-end",
    borderRadius: 100,
    marginRight: "10%",
    marginTop: "-20%",
  },
  roundImages3: {
    width: "34%",
    height: "35%",
    alignSelf: "flex-start",
    borderRadius: 100,
    marginLeft: "10%",
  },
  roundImages4: {
    width: "34%",
    height: "35%",
    alignSelf: "flex-end",
    borderRadius: 100,
    marginRight: "10%",
    marginTop: "-20%",
  },
  buttonsView: {
    alignItems: "center",
    height: "25%",
    marginTop: "4%",
  },
  buttons: {
    width: "75%",
    height: "30%",
    backgroundColor: "white",
    borderRadius: 50,
    marginTop: "5%",
    flexDirection: "row", // Satır düzeni ekleniyor
    justifyContent: "center", // Elemanları yatayda sağa hizala
    alignItems: "center", // Elemanları dikeyde ortala
    borderWidth: 1, // Kenarlık kalınlığı
  },
  buttonText:{
    fontFamily: "Kristen-Normal-ITC-Std-Regular",
    color: "black",
    fontSize: 20,
    textAlign: "center",
    flex: 1,
    marginLeft: "15%",
    textShadowColor: "rgba(0, 0, 0, 0.3)", // Gölge rengi (siyah)
    textShadowOffset: { width: 0, height: 5 }, // Gölge konumu (x ve y koordinatları)
    textShadowRadius: 7, // Gölge yarıçapı
  },
  buttonImage:{
    width: "22%",
    height: "100%"
  }
});

export default styles;
