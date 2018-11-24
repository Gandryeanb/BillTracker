import React, { component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import style from './style'

const {
  containerOutter,
  container,
  textStyle
} = style

export default ({ text, fn }) => {
  return (
    <TouchableOpacity
      style={containerOutter}
      onPress={() => fn()}
    >
      <View style={container}>
        <Text style={textStyle}>
          { text }
        </Text>
      </View>
    </TouchableOpacity>
  )
}
