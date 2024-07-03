import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, {useRef} from 'react'
import BottomSheet from 'react-native-simple-bottom-sheet'

const Morescreen = () => {
  const panelRef = useRef(null);

  return (
    <View style={{ alignItems:'center',justifyContent:'center'}}>
      {/* <View>Your content</View> */}
      <TouchableOpacity onPress={() => panelRef.current.togglePanel()} style={{padding:20}}>
        <Text>Toggle</Text>
      </TouchableOpacity>
      <BottomSheet ref={ref => panelRef.current = ref} >
        <View style={{height:'100%'}}>
        <Text style={{paddingVertical: 20}}>
          Some random content
        </Text>
        <Text style={{paddingVertical: 20}}>
          Some random content
        </Text>
        <Text style={{paddingVertical: 20}}>
          Some random content
        </Text>
        <Text style={{paddingVertical: 20}}>
          Some random content
        </Text>
        <Text style={{paddingVertical: 20}}>
          Some random content
        </Text>
        </View>
      </BottomSheet>
    </View>
  )
}

export default Morescreen

const styles = StyleSheet.create({})