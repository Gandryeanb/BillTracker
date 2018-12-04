import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'

import Button from '../../../../../Components/ButtonFull'
import InputTextFull from '../../../../../Components/InputTextFull'

import style from './style'
import endPointsStore from '../../../../../Store/endPointsStore'

import SET_STATE from '../../../../../Store/actions/SET_STATE'

const {
  container,
  header,
  topContent,
  midContent,
  botContent
} = style

const {
  SET_INPUT_REGISTER_FIRSTNAME,
  SET_INPUT_REGISTER_LASTNAME,
  SET_INPUT_REGISTER_EMAIL,
  SET_INPUT_REGISTER_PASSWORD1,
  SET_INPUT_REGISTER_PASSWORD2,
  RESET_INPUT_REGISTER
} = endPointsStore

const setStateToProps = (state) => {
  return ({
    INPUT_REGISTER: state.INPUT_REGISTER
  })
}

const setDispatchToProps = (dispatch) => {
  return({
    SET_STATE: (endPoint, val) => dispatch(SET_STATE(endPoint, val))
  })
}

export default connect(setStateToProps,setDispatchToProps)(class CardRegister extends Component {

  componentDidMount() {
    const { SET_STATE } = this.props

    SET_STATE(RESET_INPUT_REGISTER, '')
  }

  render () {
    const { navigation, SET_STATE, INPUT_REGISTER } = this.props
    const { firstName, lastName, email, password1, password2 } = INPUT_REGISTER

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
            endPointState={ SET_INPUT_REGISTER_FIRSTNAME }
            fn={ SET_STATE }
            value={ firstName }
          />
          <InputTextFull
            placeholder="Last name"
            secureTextEntry={false}
            endPointState={ SET_INPUT_REGISTER_LASTNAME }
            fn={ SET_STATE }
            value={ lastName }
          />
          <InputTextFull
            placeholder="Email"
            secureTextEntry={false}
            endPointState={ SET_INPUT_REGISTER_EMAIL }
            fn={ SET_STATE }
            value={ email }
          />
          <InputTextFull
            placeholder="Password"
            secureTextEntry={true}
            endPointState={ SET_INPUT_REGISTER_PASSWORD1 }
            fn={ SET_STATE }
            value={ password1 }
          />
          <InputTextFull
            placeholder="Password"
            secureTextEntry={true}
            endPointState={ SET_INPUT_REGISTER_PASSWORD2 }
            fn={ SET_STATE }
            value={ password2 }
          />
        </View>
        <View style={botContent}>
          <Button
            text='Submit'
            backgroundColor= '#60B29B'
            fn={() => { console.log(firstName, lastName, email, password1, password2) }}
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
})

