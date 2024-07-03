import { StyleSheet, Text, View , Dimensions, Image} from 'react-native'
import React from 'react'
import Carousel from 'react-native-reanimated-carousel'

const images =[
    {
        image:require('../assets/home_banner2.jpg')
    },
    {
        image:require('../assets/home_banner3.jpg'),
    },
    {
        image:require('../assets/home_banner.jpg')
    }
]

const OfferLabelSlider = () => {
    const width = Dimensions.get('window').width
  return (
    <View style={{marginVertical:5}}>
     <Carousel 
     width={width}
     height={width/6}
     data={images}
     autoPlay
     scrollAnimationDuration={1500}
     renderItem={({item})=>(
        <View style={styles.carousel_container}>
            <Image source={item.image} style={styles.offer_img}/>
        </View>
     )}
     />
     
    </View>
  )
}

export default OfferLabelSlider

const styles = StyleSheet.create({
    offer_img:{
        width:'100%',
        height: '100%',
        objectFit: 'cover',
        borderRadius:15
    },
    carousel_container:{
        flex: 1,
        justifyContent: 'center',
        overflow: 'hidden',
        paddingHorizontal:15   
      }
})