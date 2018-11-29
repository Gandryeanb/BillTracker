import React, { Component } from 'react'
import { View } from 'react-native'

import CardRegister from './src/components/CardRegister'

import style from'./src/style'

class Login extends Component {

  constructor(props) {
    super(props)
  }

  render() {

    const {
      container
    } = style

    const {
      navigation
    } = this.props

    return (
      <View style={container}>
        <CardRegister
          navigation={navigation}
        />
      </View>
    )  
  }
}

export default Login
