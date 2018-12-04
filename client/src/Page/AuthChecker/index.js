import React, { Component } from 'react'
import { View, Text, AsyncStorage } from 'react-native'

import style from './src/style'

export default class AuthChecker extends Component {

  constructor(props) {
    super(props)

    this.navigator()
  }

  navigator = async () => {

    let token = await AsyncStorage.getItem('token')

    setTimeout(() => {
      this.props.navigation.navigate(token ? 'AppPhase' : 'AuthPhase')
    }, 3000)
  }

  render() {

    const {
      container,
      logo
    } = style

    return (
      <View style={container}>
        <Text style={logo}>
          Chit Chat App
        </Text>
      </View>
    )
  }
}
