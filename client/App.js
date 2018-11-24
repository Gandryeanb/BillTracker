import { createSwitchNavigator, createAppContainer, createStackNavigator } from 'react-navigation'

import AuthChecker from './src/Page/AuthChecker'
import Login from './src/Page/Login'
import Home from './src/Page/Home'


const AppPhase = createStackNavigator({
  Home
})

const AuthPhase = createStackNavigator({
  Login
}, {
  headerMode: 'Screen'
})

export default createAppContainer(createSwitchNavigator({
  AuthChecker,
  AuthPhase,
  AppPhase
}))

