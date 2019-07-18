import { LOGIN_SUCCESS, LOGIN_START, LOGIN_FAILURE, SIGNUP_SUCCESS, SIGNUP_RESOLVED, SIGNUP_START, SIGNUP_FAILURE } from "../actions";

const initialState = {
  isSigningUp: false,
  signupError: "",
  status: "",
  isLoggedIn: false,
  loginError: ""
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case SIGNUP_SUCCESS: {
      return {
        ...state,
        isSigningUp: false,
        signupError: action.payload,
        status: action.status
      };
    }
    case SIGNUP_RESOLVED: {
      return {
        ...state,
        isSigningUp: false,
        signupError: null,
        status: null
      };
    }
    case SIGNUP_START: {
      return {
        ...state,
        isSigningUp: true,
        signupError: ""
      };
    }
    case SIGNUP_FAILURE: {
      return {
        ...state,
        isSigningUp: false,
        signupError: action.payload
      };
    }
    case LOGIN_START:
      return {
        ...state,
        isLoggedIn: false,
        loginError: ""
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        loginError: ""
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoggedIn: false,
        loginError: "Login Failed"
      };
    default:
      return state;
  }
}

export default reducer;
