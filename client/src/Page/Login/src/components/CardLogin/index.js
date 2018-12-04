import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'

import Button from '../../../../../Components/ButtonFull'
import InputTextFull from '../../../../../Components/InputTextFull'

import style from './style'
import endPointsStore from '../../../../../Store/endPointsStore'

import SET_STATE from '../../../../../Store/actions/SET_STATE'

const {
  SET_INPUT_LOGIN_EMAIL,
  SET_INPUT_LOGIN_PASSWORD,
  RESET_INPUT_LOGIN
} = endPointsStore


const {
  container,
  header,
  topContent,
  midContent,
  botContent
} = style

const setStateToProps = (state) => {
  return ({
    INPUT_LOGIN: state.INPUT_LOGIN
  })
}

const setDispatchToProps = (dispatch) => {
  return({
    SET_STATE: (endPoint, val) => dispatch(SET_STATE(endPoint, val))
  })
}

export default connect(setStateToProps,setDispatchToProps)( class CardLogin extends Component {

  componentDidMount() {
    const { SET_STATE } = this.props

    SET_STATE(RESET_INPUT_LOGIN, '')
  }

  render() {
    
    const { 
      navigation,
      INPUT_LOGIN: {
        email,
        password
      },
      SET_STATE
    } = this.props

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
            endPointState={ SET_INPUT_LOGIN_EMAIL }
            fn={ SET_STATE }
            value={ email }
          />
          <InputTextFull
            placeholder="Password"
            secureTextEntry={true}
            endPointState={ SET_INPUT_LOGIN_PASSWORD }
            fn={ SET_STATE }
            value={ password }
          />
        </View>
        <View style={botContent}>
          <Button
            text='Login'
            backgroundColor= '#60B29B'
            fn={() => {navigation.navigate('AppPhase')}}
          />
          <Button
            text='Register'
            backgroundColor= '#60B29B'
            fn={() => {
              SET_STATE(RESET_INPUT_LOGIN, '')
              navigation.navigate('RegisterScreen')
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
          <Text style={{
            fontSize: 10,
            marginTop: 5,
          }}
          // onPress={() => {
            // SET_STATE(RESET_INPUT_LOGIN, '')
            // navigation.navigate('ForgotPasswordScreen')
          // }}
          >
            I forgot my password
          </Text>
        </View>
      </View>
    )
  }
})
