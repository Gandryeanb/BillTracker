import { createSwitchNavigator, createAppContainer, createStackNavigator } from 'react-navigation'

import AuthChecker from './src/Page/AuthChecker'
import Login from './src/Page/Login'
import Register from './src/Page/Register'
import Home from './src/Page/Home'


const AppPhase = createStackNavigator({
  Home
})

const AuthPhase = createStackNavigator({
  LoginScreen: Login,
  RegisterScreen: Register
},
{
  initialRouteKey: 'RegisterScreen',
  headerMode: 'Screen'
})

export default createAppContainer(createSwitchNavigator({
  AuthChecker,
  AuthPhase,
  AppPhase
}))

