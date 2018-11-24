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
          Login
        </Text>
      </View>
      <View style={midContent}>
        <InputTextFull
          placeholder="Email"
        />
        <InputTextFull
          placeholder="Password"
        />
      </View>
      <View style={botContent}>
        <Button
          text='Login'
          fn={() => {}}
        />
        <Button
          text='Login via Gmail'
          fn={() => {}}
        />
        <Button
          text='Login via Facebook'
          fn={() => {}}
        />
        <Button
          text='Register'
          fn={() => {}}
        />
      </View>
    </View>
  )
}
