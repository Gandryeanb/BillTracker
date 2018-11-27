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

export default (props) => {
  return (
    <View style={container}>
      <View style={topContent}>
        <Text style={header}>
          Register
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
          fn={() => {}}
        />
        <View
          style={{
            height: 10
          }}
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
      </View>
    </View>
  )
}
