import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'

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

export default Register
