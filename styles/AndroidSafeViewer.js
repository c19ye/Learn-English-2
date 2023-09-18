import { Platform, StatusBar,StyleSheet } from 'react-native';

const style = StyleSheet.create({
    AndroidSafeArea: {
        flex: 1,
        //android style
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    }
});

// Path: styles/AndroidSafeViewer
// Compare this snippet from App.js:
export default style;