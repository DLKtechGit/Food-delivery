import { StyleSheet, Text, View , Image } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import { COLORS } from '../constants'
import Icon2 from 'react-native-vector-icons/MaterialIcons'
const RestaurantLayout = (props) => {
  return (
    <View style={styles.main_container}>
      {/* veg or nonveg and rating section */}
      <View style={styles.first_section}>
        <View style={styles.Veg_or_nonveg_container}>
          <Image source={props.image} style={styles.veg_or_nonveg_img}/>
          <Text style={styles.veg_or_nonveg_txt}>{props.veg_or_nonveg}</Text>
        </View>
        <View style={styles.ratings_main_container}>
          <View style={styles.rating_first_section}>
          <Icon name='star' color={COLORS.white} size={12}/>
          <Text style={{color:COLORS.white, fontWeight: '600'}}>{props.rating_number}</Text>
          </View>
          <View style={styles.rating_second_section}>
            <Text style={{fontSize:10,paddingVertical:3,color:'#495057'}}>{props.reviews_text}</Text>
          </View>
        </View>
      </View>
      {/* restaurant name and details section */}
      <View style={styles.second_section}>
        <Text style={{fontWeight: '800', fontSize:21}}>{props.restaurant_name}</Text>
        <View style={styles.mins_and_location_container}>
        <Text style={{fontWeight:'500', fontSize:15}}>{props.minutes_and_location}</Text>
        <Icon name='caret-down' color={COLORS.non_veg_clr} size={15}/>
        </View>
        <Text style={{fontSize:15,color:'#495057',marginBottom:12}}>{props.cuisine_name}</Text>
      </View>
      
      {/* third section */}
      <View style={styles.third_section}>
        <Icon2 name='delivery-dining' size={25} />
        <Text>{props.distance_text}</Text>
      </View>
    </View>
  )
}

export default RestaurantLayout

const styles = StyleSheet.create({
  main_container:{
    padding:15,
    backgroundColor: COLORS.gray,
    borderRadius:20,
    margin:15,
    
  },
  
  veg_or_nonveg_img:{
    width:16,
    height:16
  },

  first_section:{
    display:'flex',
    flexDirection: 'row',
    alignItems : 'center',
    justifyContent: 'space-between'
  },

  Veg_or_nonveg_container:{
    display: 'flex',
    flexDirection: 'row',
    gap:4,
    alignItems: 'center'
  },

  veg_or_nonveg_txt:{
    fontWeight: '600',
    color: COLORS.non_veg_clr
  },

  ratings_main_container:{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },

  rating_first_section:{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap:3,
    backgroundColor: COLORS.non_veg_clr,
    paddingHorizontal:8,
    paddingVertical:3,
    borderRadius:7
  },

  mins_and_location_container:{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap:4,
    paddingVertical:8
  },

  second_section:{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    width:250
  },

  third_section:{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap:6,    
    borderTopColor:'#adb5bd',
    borderTopWidth:1,
    paddingTop:3
  }

})