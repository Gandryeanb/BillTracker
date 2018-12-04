import React, { Component } from 'react'
import { View, TextInput } from 'react-native'

import style from './style'

const { 
  container,
  inputTextStyle
} = style

export default ({ placeholder, secureTextEntry, endPointState, fn, value }) => {
  return (
    <View style={container}>
      <TextInput
        style={inputTextStyle}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        onChangeText={(val) => fn(endPointState, val)}
        value={value}
      />
    </View>
  )
}
