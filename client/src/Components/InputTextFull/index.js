import React, { Component } from 'react'
import { View, TextInput } from 'react-native'

import style from './style'

const { 
  container,
  inputTextStyle
} = style

export default ({ placeholder }) => {
  return (
    <View style={container}>
      <TextInput
        style={inputTextStyle}
        placeholder={placeholder}
        onChangeText={() => {}}
      />
    </View>
  )
}
