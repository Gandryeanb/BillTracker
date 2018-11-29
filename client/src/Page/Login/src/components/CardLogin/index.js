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
          Login
        </Text>
      </View>
      <View style={midContent}>
        <InputTextFull
          placeholder="Email"
          secureTextEntry={false}
        />
        <InputTextFull
          placeholder="Password"
          secureTextEntry={true}
        />
      </View>
      <View style={botContent}>
        <Button
          text='Login'
          backgroundColor= '#60B29B'
          fn={() => {}}
        />
        <Button
          text='Register'
          backgroundColor= '#60B29B'
          fn={() => {navigation.navigate('RegisterScreen')}}
        />
        <Button
          text='Login via Gmail'
          backgroundColor= '#ea4335'
          fn={() => {}}
        />
        <Button
          text='Login via Facebook'
          backgroundColor= '#3b5998'
          fn={() => {}}
        />
        <Text style={{
          fontSize: 10,
          marginTop: 5,
        }}
        // onPress={() => {navigation.navigate('ForgotPasswordScreen')}}
        >
          I forgot my password
        </Text>
      </View>
    </View>
  )
}
