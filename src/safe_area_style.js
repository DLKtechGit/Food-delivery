import { StyleSheet,Platform } from "react-native";

export default StyleSheet.create({
    androidsafearea:{
        flex:1,
        backgroundColor: 'white',
        paddingTop: Platform.OS==="android"?35:0
    }
})