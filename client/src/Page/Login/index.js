import React, { Component } from 'react'
import { View, Text } from 'react-native'

import CardLogin from './src/components/CardLogin'

import style from'./src/style'

class Login extends Component {

  constructor(props) {
    super(props)
  }

  render() {

    const {
      container
    } = style

    return (
      <View style={container}>
        <CardLogin/>
      </View>
    )  
  }
}

export default Login
