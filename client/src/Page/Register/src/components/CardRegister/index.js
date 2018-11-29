import React from 'react'
import { View, Text } from 'react-native'

import Button from '../../../../../Components/ButtonFull'
import InputTextFull from '../../../../../Components/InputTextFull'

import style from './style'

const {
  container,
  header,
  topContent,
  midContent,
  botContent
} = style

export default ({ navigation }) => {
  return (
    <View style={container}>
      <View style={topContent}>
        <Text style={header}>
          Register
        </Text>
      </View>
      <View style={midContent}>
        <InputTextFull
          placeholder="First name"
          secureTextEntry={false}
        />
        <InputTextFull
          placeholder="Last name"
          secureTextEntry={false}
        />
        <InputTextFull
          placeholder="Email"
          secureTextEntry={false}
        />
        <InputTextFull
          placeholder="Password"
          secureTextEntry={true}
        />
        <InputTextFull
          placeholder="Password"
          secureTextEntry={true}
        />
      </View>
      <View style={botContent}>
        <Button
          text='Submit'
          backgroundColor= '#60B29B'
          fn={() => {}}
        />
        <Text style={{
          fontSize: 10,
          marginTop: 5
        }}
        onPress={() => {navigation.navigate('LoginScreen')}}
        >
          Already have an account
        </Text>
      </View>
    </View>
  )
}
