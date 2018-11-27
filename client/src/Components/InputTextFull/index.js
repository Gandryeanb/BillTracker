import React, { Component } from 'react'
import { View, TextInput } from 'react-native'

import style from './style'

const { 
  container,
  inputTextStyle
} = style

export default ({ placeholder, secureTextEntry }) => {
  return (
    <View style={container}>
      <TextInput
        style={inputTextStyle}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        onChangeText={() => {}}
      />
    </View>
  )
}
