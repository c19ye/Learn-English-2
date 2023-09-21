import { FlatList, View, Text, ImageBackground, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import BackgroundStyle from '../styles/BackgroundStyle';
import style from '../styles/AndroidSafeViewer';
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { LinearGradient } from 'expo-linear-gradient';


const dummyData = [
  { id: '1', title: 'Apple' },
  { id: '2', title: 'Banana' },
  { id: '3', title: 'Orange' },
  { id: '4', title: 'Grapes' },
  { id: '5', title: 'Strawberry' },
  { id: '6', title: 'Pineapple' },
  { id: '7', title: 'Watermelon' },
  { id: '8', title: 'Blueberry' },
  { id: '9', title: 'Cherry' },
  { id: '10', title: 'Mango' },
  { id: '11', title: 'Peach' },
  { id: '12', title: 'Pear' },
  { id: '13', title: 'Lemon' },
  { id: '14', title: 'Grapefruit' },
  { id: '15', title: 'Kiwi' },
  { id: '16', title: 'Raspberry' },
  { id: '17', title: 'Cranberry' },
  { id: '18', title: 'Blackberry' },
  { id: '19', title: 'Avocado' },
  { id: '20', title: 'Coconut' },
];


export default function MyDictionaryPage() {
  const [fontsLoaded] = useFonts({
    'Kristen-Normal-ITC-Std-Regular': require('../assets/fonts/Kristen-Normal-ITC-Std-Regular.ttf'),
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {

    return null;
  }
  return (
    <ImageBackground source={require('../assets/backgroundImage.png')}
      resizeMode='cover'
      style={BackgroundStyle.container}
      onLayout={onLayoutRootView}
    >
      <View style={styles.addButton}>
        <Text style={{ fontSize: 22, fontFamily: 'Kristen-Normal-ITC-Std-Regular' }}>
          Word Count: {dummyData.length}
        </Text>
        <TouchableOpacity style={{ width: "20%", height: "50%" }}>
          <Image source={require('../assets/addIcon.png')}
            resizeMode='contain'
            style={{ width: "100%", height: "100%", }}
          >
          </Image>
        </TouchableOpacity>

      </View>
      <View style={styles.words} >
        <FlatList
          data={dummyData}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View style={{
              borderBottomWidth: 1,
              borderBottomColor: 'black',
              flexDirection: 'row', // Arrange text and edit icon side by side
              alignItems: 'center', // Vertically align items in the row
              padding: 12,
            }}>
              <Text style={{
                fontFamily: 'Kristen-Normal-ITC-Std-Regular', fontSize: 18, color: 'black', flex: 1, // Allow the text to take up available space

              }}>{item.title}</Text>
              <TouchableOpacity style={{ width: "10%", height: "100%", alignSelf: "flex-end" }}>
                <Image source={require('../assets/editIcon.png')}
                  resizeMode='cover'
                  style={{ width: "60%", height: "100%", flex: 1 }}

                >
                </Image>

              </TouchableOpacity>
              <TouchableOpacity style={{ width: "10%", height: "100%", alignSelf: "flex-end" }}>
                <Image source={require('../assets/deleteIcon.png')}
                  resizeMode='cover'
                  style={{ width: "60%", height: "100%", flex: 1 }}

                >
                </Image>

              </TouchableOpacity>

            </View>
          )}
        />
      </View>
      <View style={styles.buttons}>

        <TouchableOpacity onPress={() => console.log('btn pressed')}>
          <View style={styles.buttonParent}>
            <LinearGradient
              colors={['#FDAF8B', '#E5A9B5']}
              style={styles.buttonGrad}>
              <Text style={styles.buttonText}>Repeat All</Text>
            </LinearGradient>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => console.log('btn pressed')}>
          <View style={styles.buttonParent}>
            <LinearGradient
              colors={['#FDAF8B', '#E5A9B5']}
              style={styles.buttonGrad}>
              <Text style={styles.buttonText}>Learn</Text>
            </LinearGradient>
          </View>
        </TouchableOpacity>


      </View>
    </ImageBackground>
  )
}

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
    fontFamily: 'Kristen-Normal-ITC-Std-Regular',
    alignSelf: 'center',
    justifyContent: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.3)', // Gölge rengi (siyah)
    textShadowOffset: { width: 0, height: 4 }, // Gölge konumu (x ve y koordinatları)
    textShadowRadius: 7, // Gölge yarıçapı
    fontSize: 19,
    color: '#73007D',
    textShadowColor: '#F780F2', // Stroke rengi
    textShadowOffset: { width: -1, height: -1 }, // Stroke kalınlığı
  },
  buttonGrad: {
    height: 80,
    width: 150,
    borderRadius: 15,
    position: 'absolute',
    bottom: 5,
    justifyContent: "center", alignItems: "center"
  },
  buttonParent: {
    height: 80,
    width: 150,
    borderRadius: 15,
    backgroundColor: '#AB8EC6',

  },
})