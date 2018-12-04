let defaultState = {
  email: '',
  password: ''
}

function INPUT_LOGIN (state = defaultState, action) {

  switch(action.type) {
    case 'SET_INPUT_LOGIN_EMAIL':
      return {
        ...state,
        email: action.payload
      }

    case 'SET_INPUT_LOGIN_PASSWORD':
      return {
        ...state,
        password: action.payload
      }

    case 'RESET_INPUT_LOGIN':
      return {
        email: '',
        password: ''
      }

    default:
      return state
  }
}

export default INPUT_LOGIN
