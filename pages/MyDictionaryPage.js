import { FlatList,View, Text,ImageBackground,StyleSheet,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import BackgroundStyle from '../styles/BackgroundStyle';
import style from '../styles/AndroidSafeViewer';


const dummyData = [
    { id: '1', title: 'Öğe 1'},
    { id: '2', title: 'Öğe 2'},
    { id: '3', title: 'Öğe 3'},
    { id: '4', title: 'Öğe 3'},
    { id: '5', title: 'Öğe 3'},
    { id: '6', title: 'Öğe 3'},
    { id: '7', title: 'Öğe 3'},
    { id: '8', title: 'Öğe 3'},
    { id: '9', title: 'Öğe 3'},
    { id: '10', title: 'Öğe 3'},
    { id: '11', title: 'Öğe 3'},
    { id: '12', title: 'Öğe 3'},
    { id: '13', title: 'Öğe 3'},
    { id: '14', title: 'Öğe 3'},
    { id: '15', title: 'Öğe 3'},
    { id: '16', title: 'Öğe 3'},
    { id: '17', title: 'Öğe 3'},
    { id: '18', title: 'Öğe 3'},
    { id: '19', title: 'Öğe 3'},
    // ... Daha fazla dummy veri
    // ... Daha fazla dummy veri ekleyebilirsiniz.
  ];

export default function MyDictionaryPage() {
  return (
    <ImageBackground source={require('../assets/backgroundImage.png')}
    resizeMode='cover' 
    style = {BackgroundStyle.container}
    >
        <View style={styles.addButton}>
            
            <TouchableOpacity style={{ width: "20%", height: "90%",justifyContent:"center",alignItems:"center",alignSelf:"flex-end",marginRight:"5%"}}>
            <Image source={require('../assets/addIcon.png')}
             resizeMode='contain'
             style={{ width: "70%", height: "70%",}}
            >

            </Image>
            </TouchableOpacity>
           
        </View>
        <View style={styles.words}>
        <FlatList
      data={dummyData}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <View style={{
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        padding: 3,
        flexDirection: 'row', // Arrange text and edit icon side by side
      alignItems: 'center', // Vertically align items in the row
        }}>
          <Text style={{    fontSize: 18, color: 'black',        flex: 1, // Allow the text to take up available space

}}>{item.title}</Text>
    <TouchableOpacity style={{ width: "10%", height: "100%",alignSelf:"flex-end"}}>
    <Image source={require('../assets/editIcon.png')}
                resizeMode='contain'
                style = {{flex:1}}
                
                >
                </Image>
               
    </TouchableOpacity>
    <TouchableOpacity style={{ width: "10%", height: "100%",alignSelf:"flex-end"}}>
    <Image source={require('../assets/deleteIcon.png')}
                resizeMode='contain'
                style = {{flex:1}}
                
                >
                </Image>
               
    </TouchableOpacity>
       
        </View>
      )}
    />
        </View>
        <View style={styles.buttons}>
            
            <TouchableOpacity style={{flexDirection:"row",width:"40%",height:"50%",borderRadius:70,overflow: "hidden",}}>
            <ImageBackground
        source={require('../assets/myDictionaryButton.png')} // Arkaplan resmi dosyasının yolu
        style={{width: "100%", height: "100%",justifyContent:"center",alignItems:"center"}}
        resizeMode="cover" // Resmin boyutunu ve ölçeklemesini ayarlar
      >
        <Text style={styles.buttonText}>Learn</Text>
      </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity style={{flexDirection:"row",width:"40%",height:"50%",borderRadius:70,overflow: "hidden",}}>
            <ImageBackground
        source={require('../assets/myDictionaryButton.png')} // Arkaplan resmi dosyasının yolu
        style={{width: "100%", height: "100%",justifyContent:"center",alignItems:"center"}}
        resizeMode="cover" // Resmin boyutunu ve ölçeklemesini ayarlar
      >
        <Text style={styles.buttonText}>Repeat</Text>
      </ImageBackground>
            </TouchableOpacity>
        </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
    addButton: {
        width: "100%",
        flex:1,
        // backgroundColor: "red",
        flexDirection:"column",
    },
    words:{
        width: "100%",
        flex:6,
        // backgroundColor: "blue",
    },
    buttons:{
        width: "100%",
        flex:3,
        // backgroundColor: "green",
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center",
    },
})