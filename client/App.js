import React, { Component } from 'react'
import { createSwitchNavigator, createAppContainer, createStackNavigator } from 'react-navigation'
import { Provider } from 'react-redux'

import Store from './src/Store'
import AuthChecker from './src/Page/AuthChecker'
import Login from './src/Page/Login'
import Register from './src/Page/Register'
import Home from './src/Page/Home'

const AppPhase = createStackNavigator({
  HomeScreen: Home
},
{
  initialRouteKey: 'HomeScreen',
  headerMode: 'Screen'
})

const AuthPhase = createStackNavigator({
  LoginScreen: Login,
  RegisterScreen: Register
},
{
  initialRouteKey: 'LoginScreen',
  headerMode: 'Screen'
})

const MainRoute = createAppContainer(createSwitchNavigator({
  AuthChecker,
  AuthPhase,
  AppPhase
}))

export default class app extends Component {
  render () {
    return (
      <Provider store = { Store }>
        <MainRoute/>
      </Provider>
    )
  }
}
