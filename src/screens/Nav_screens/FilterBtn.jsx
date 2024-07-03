import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../constants'

const FilterBtn = (props) => {
  return (
    <Pressable style={{
        borderWidth:1,
        paddingVertical:8,
        paddingHorizontal:15,       
        borderRadius:10,
        borderColor:'#adb5bd',
        }}>
        <Text style={{textAlign: 'center'}}>{props.filter_name}</Text>
    </Pressable>
  )
}

export default FilterBtn

const styles = StyleSheet.create({})