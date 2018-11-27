import React, { Component } from 'react'
import { View } from 'react-native'

import CardRegister from './src/components/CardRegister'

import style from'./src/style'

class Register extends Component {

  constructor(props) {
    super(props)
  }

  render() {

    const {
      container
    } = style

    return (
      <View style={container}>
        <CardRegister/>
      </View>
    )  
  }
}

export default Register
