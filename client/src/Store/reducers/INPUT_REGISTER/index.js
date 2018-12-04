let defaultState = {
  firstName: '',
  lastName: '',
  email: '',
  password1: '',
  password2: '',
}

function INPUT_REGISTER (state = defaultState, action) {

  switch(action.type) {
    case 'SET_INPUT_REGISTER_FIRSTNAME':
      return {
        ...state,
        firstName: action.payload
      }
    
    case 'SET_INPUT_REGISTER_LASTNAME':
      return {
        ...state,
        lastName: action.payload
      }

    case 'SET_INPUT_REGISTER_EMAIL':
      return {
        ...state,
        email: action.payload
      }

    case 'SET_INPUT_REGISTER_PASSWORD1':
      return {
        ...state,
        password1: action.payload
      }

    case 'SET_INPUT_REGISTER_PASSWORD2':
      return {
        ...state,
        password2: action.payload
      }

    case 'RESET_INPUT_REGISTER':
      return {
        firstName: '',
        lastName: '',
        email: '',
        password1: '',
        password2: '',
      }

    default:
      return state
  }
}

export default INPUT_REGISTER
