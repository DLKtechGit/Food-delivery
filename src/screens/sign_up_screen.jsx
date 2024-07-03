import { View, Text, StyleSheet, Image, TextInput, Pressable, ScrollView,  } from 'react-native'
import React  from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { CheckBox } from '@rneui/base'
import { useFonts } from '@expo-google-fonts/lobster'
import Icon from 'react-native-vector-icons/FontAwesome'
import Icon4 from 'react-native-vector-icons/FontAwesome6'
import Icon2 from 'react-native-vector-icons/Fontisto'
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon5 from 'react-native-vector-icons/FontAwesome5'
import { COLORS } from '../constants'
import { useState } from 'react'

const Sign_up_screen = ({ navigation }) => {
    const [show,setshow] = useState(false)
    const [visible,setvisible]= useState(true)

    const [loaded] = useFonts({
        'Lobster': require('../fonts/LobsterTwo-BoldItalic.ttf'),
        'Lobregular': require('../fonts/LobsterTwo-Regular.ttf')

    });

    if (!loaded) {
        return null
    }
    

    return (
      
        <View style={styles.container}>
        <ScrollView 
             horizontal={false}
        showsVerticalScrollIndicator={false}
         >
            {/* heading text */}
            <View style={styles.headingtxtcontainer}>
                <Text style={styles.headingtxt}>Sign Up A New Account</Text>
                {/* <Text style={styles.subheadingtxt}>Login to Continue....</Text> */}
            </View>
            {/* image */}
            <View style={styles.imgcontainer}>
                <Image source={require('../assets/loginimg2.jpg')} style={styles.img} />
            </View>
            {/* input fields */}
            <View style={{marginHorizontal: 5}}>
            <View style={styles.inputcontainer1}>
                <Icon name="user" size={20} color={'gray'} />
                <TextInput placeholder='Name' style={styles.inputfield} />
            </View>
            <View style={styles.inputcontainer1}>
                <Icon3 name="email" size={20} color={'gray'} />
                <TextInput placeholder='Email' style={styles.inputfield} inputMode='email'/>
            </View>
            <View style={styles.inputcontainer1}>
                <Icon4 name="phone" size={20} color={'gray'} />
                <TextInput placeholder='Phone Number' style={styles.inputfield}  />
            </View>

            <View style={styles.inputcontainer2}>
                <Icon2 name="locked" size={20} color={'gray'} />
                <TextInput placeholder='Password' style={styles.inputfield} secureTextEntry={visible} />
                <Icon5 name={show === false ? 'eye-slash': 'eye'} size={15} color={'gray'} 
        onPress={()=>{
          setshow(!show)
          setvisible(!visible)
          }}/>        
            </View>
            <View style={styles.inputcontainer1}>
                <Icon2 name="locked" size={20} color={'gray'} />
                <TextInput placeholder='Confirm Password' style={styles.inputfield} />
                {/* <Icon5 name={show === false ? 'eye-slash': 'eye'} size={15} color={'gray'} 
        onPress={()=>{
          setshow(!show)
          setvisible(!visible)
          }}/>     */}
            </View>

            {/* buttons */}
            <View>            
                <Pressable style={styles.agreebtn}>
                    <CheckBox checked={true} checkedColor={COLORS.primary}/>
                    <Text style={styles.agreebtntxt} >Agree to terms and conditions</Text>
                </Pressable>
                <Pressable style={styles.btncontainer2} onPress={() => navigation.navigate('sign-up')}>
                    <Text style={styles.btntext2}>Create Account</Text>
                </Pressable>
                <Pressable style={styles.alreadybtn}>
                    <Text style={styles.alreadybtntxt} >Already have an account? &nbsp;
                    <Text style={{color:COLORS.primary}} onPress={()=> navigation.navigate('login')}>Sign in</Text> </Text>
                </Pressable>
            </View>
            </View>
        </ScrollView>
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {       
        padding: 20,
        backgroundColor: COLORS.white,
        flex: 1
    },
    headingtxtcontainer: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: 30,
        marginHorizontal: 5
    },
    headingtxt: {
        fontSize: 25,
        fontFamily: 'Lobster',
        color: COLORS.primary
    },
    //   subheadingtxt: {
    //     fontSize: 15,
    //     marginHorizontal: 10,
    //   },
    imgcontainer: {
        alignItems: 'center'
    },
    img: {
        width: wp(70),
        height: hp(30),
        objectFit: 'cover',
        marginTop: 20
    },
    inputcontainer1: {
        display: 'flex',
        flexDirection: 'row',
        paddingHorizontal: 30,
        alignItems: 'center',
        paddingVertical: 10,
        backgroundColor: COLORS.white,
        borderRadius: 10,
        elevation: 5,
        // borderBottomColor: ' black',
        // borderBottomWidth: 2,
        marginVertical: 10
    },
    inputcontainer2: {
        display: 'flex',
        flexDirection: 'row',
        paddingHorizontal: 30,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 10,
        backgroundColor: COLORS.white,
        borderRadius: 10,
        elevation: 5,
        marginVertical: 10
    },
    inputfield: {
        paddingHorizontal: 10,
        width: 250
    },
    agreebtn: {
        // marginTop: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    agreebtntxt: {
        color: COLORS.black,
        fontWeight: '600',
        marginLeft: -10
    },
    alreadybtn: {
        marginTop: 10,
        marginLeft: 10
    },
    alreadybtntxt: {
        color: COLORS.black,
        fontWeight: '600',
        // textAlign: 'center'
    },
    btncontainer: {
        backgroundColor: COLORS.primary,
        paddingVertical: 10,
        borderRadius: 10,
        marginVertical: 20
    },
    btncontainer2: {
        backgroundColor: COLORS.primary,
        paddingVertical: 10,
        borderRadius: 10
    },
    btntext: {
        fontSize: 20,
        fontWeight: '600',
        color: COLORS.white,
        textAlign: 'center',

    },
    btntext2: {
        fontSize: 20,
        fontWeight: '600',
        color: COLORS.white,
        textAlign: 'center'
    },
})

export default Sign_up_screen