import { View, Text, StyleSheet, Image, TextInput, Pressable, ScrollView } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import React, { useState } from 'react'
import { useFonts } from '@expo-google-fonts/lobster'
import Icon from 'react-native-vector-icons/FontAwesome'
import Icon2 from 'react-native-vector-icons/Fontisto'
import Icon3 from 'react-native-vector-icons/FontAwesome5'
import { COLORS } from '../constants'

const Loginscreen = ({navigation}) => {

  const [show,setshow] = useState(false)
  const [visible,setvisible]= useState(true)

  const [loaded] = useFonts({
    'Lobster': require('../fonts/LobsterTwo-BoldItalic.ttf'),
    'Lobregular': require('../fonts/LobsterTwo-Regular.ttf')

  });

  if (!loaded) {
    return null
  }
 
    //setshow(!show)
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} horizontal={false}>
      {/* heading text */}
      <View style={styles.headingtxtcontainer}>
        <Text style={styles.headingtxt}>Welcome Back!</Text>
        <Text style={styles.subheadingtxt}>Login to Continue....</Text>
      </View>
      {/* image */}
      <View style={styles.imgcontainer}>
        <Image source={require('../assets/loginimg2.jpg')} style={styles.img} />
      </View>
      {/* input field */}
      <View style={{marginHorizontal:5}}>      
      <View style={styles.inputcontainer1}>
        <Icon name="user" size={20} color={'gray'} />
        <TextInput placeholder='Email' style={styles.inputfield} />
      </View>
      <View style={styles.inputcontainer2}>
        <Icon2 name="locked" size={20} color={'gray'} />
        <TextInput placeholder='Password' style={styles.inputfield} secureTextEntry={visible} />        
        <Icon3 name={show === false ? 'eye-slash': 'eye'} size={15} color={'gray'} 
        onPress={()=>{
          setshow(!show)
          setvisible(!visible)
          }}/>        
      </View>
      </View>
      {/* forget password button */}
      <Pressable style={styles.forgetbtn} onPress={()=>navigation.navigate('forget')}>
        <Text style={styles.forgetbtntxt}>Forgot Password?</Text>
      </Pressable>
      {/* button fields */}
      <View>
        <Pressable style={styles.btncontainer} onPress={()=>navigation.navigate('main')}>
          <Text style={styles.btntext}>Log In</Text>
        </Pressable>
        <Pressable style={styles.btncontainer2} onPress={() => navigation.navigate('sign-up')}>
            <Text style={styles.btntext2}>Create Account</Text>
          </Pressable>

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
    marginTop: 50,
  },
  headingtxt: {
    fontSize: 35,
    fontFamily: 'Lobster',
    color: COLORS.primary
  },
  subheadingtxt: {
    fontSize: 15,
    marginHorizontal: 10,
  },
  imgcontainer: {
    alignItems: 'center'
  },
  img: {
    width: wp(75),
    height: hp(35),
    objectFit: 'cover',
    marginTop: 20,
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
    marginVertical: 20
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
  // passinputfield: {
  //   alignItems: 'flex-start',
  //   width:200
  // },
  forgetbtn: {
    marginTop: 10,
    marginHorizontal: 5
  },
  forgetbtntxt: {
    color: COLORS.primary,
    fontWeight: '600'
  },
  btncontainer: {
    backgroundColor: COLORS.primary,    
    paddingVertical: 10,
    borderRadius: 10,
    marginVertical: 20,
    marginHorizontal: 5
  },
  btncontainer2: {
    backgroundColor: COLORS.secondary,    
    paddingVertical: 10,
    borderRadius: 10,
    marginHorizontal:5
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
    color: COLORS.black,
    textAlign: 'center'
  },
})

export default Loginscreen