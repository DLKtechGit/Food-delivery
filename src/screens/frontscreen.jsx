import { View, Text, Image, StyleSheet, Pressable, ImageBackground, ScrollView} from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useFonts } from '@expo-google-fonts/lobster';
import { COLORS } from '../constants';


const Frontscreen = ({ navigation }) => {
  const [loaded] = useFonts({
    'Lobster': require('../fonts/LobsterTwo-BoldItalic.ttf'),
    'Lobregular': require('../fonts/LobsterTwo-Regular.ttf')

  });

  if (!loaded) {
    return null
  }

  return (
    //main container
      <ScrollView horizontal={false} showsVerticalScrollIndicator={false}>
    <View style={styles.container}>
      <Image style={styles.bgimage} source={require('../assets/bg9.jpg')} />
      <View >
        <Text style={styles.headingtext}>Get Your Favourite Foods</Text>
        <Text style={styles.headingsubtext}>From Kitchen to Anywhere, Fresh, Hot meals just a few clicks away Hungry? Lets Eat</Text>
      </View>


      <ImageBackground source={require('../assets/btmimg5.jpg')} style={styles.bottomimg}>

        <View style={styles.buttonmaincontainer}>
          <Pressable style={styles.btncontainer} onPress={() => navigation.navigate('login')}>
            <Text style={styles.btntext}>Log In</Text>
          </Pressable>
          <Pressable style={styles.btncontainer2} onPress={() => navigation.navigate('sign-up')}>
            <Text style={styles.btntext2}>Sign Up</Text>
          </Pressable>

        </View>

      </ImageBackground>
    </View>
      </ScrollView>

  )
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    flex: 1
  },
  bgimage: {
    height: hp(60),
    width: wp(100),
    marginTop: 30,
    resizeMode: 'cover'
  },

  headingtext: {
    fontFamily: 'Lobster',
    fontSize: 35,
    marginTop: 15,
    textAlign: 'center',
    color: '#2e282a',

  },
  headingsubtext: {
    fontSize: 13,
    marginTop: 20,
    fontWeight: '400',
    textAlign: 'center',
    paddingHorizontal: 23
  },
  buttonmaincontainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
    marginTop: 50
  },
  btncontainer: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: 50,
    paddingVertical: 10,
    borderRadius: 10,

  },
  btncontainer2: {
    backgroundColor: COLORS.secondary,
    paddingHorizontal: 47,
    paddingVertical: 10,
    borderRadius: 10
  },
  btntext: {
    fontSize: 20,
    fontWeight: '600',
    color: 'white',
    textAlign: 'center',

  },
  btntext2: {
    fontSize: 20,
    fontWeight: '600',
    color: 'black',
    textAlign: 'center'
  },
  bottomimg: {
    width: wp(100),
    height: hp(26),
   alignItems: 'center',
   objectFit: 'cover'
    // marginTop: 30
  },


})



export default Frontscreen