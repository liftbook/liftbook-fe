import {
  LOGIN_SUCCESS,
  LOGIN_START,
  LOGIN_FAILURE,
  SIGNUP_SUCCESS,
  SIGNUP_RESOLVED,
  SIGNUP_START,
  SIGNUP_FAILURE,
  FETCHING,
  CREATING,
  UPDATING,
  NOT_UPDATING,
  DELETING,
  DATA_SUCCESS,
  DATA_FAIL,
  ADD_WORKOUT,
  USER_SUCCESS,
  LOG_SUCCESS
} from "./actions";

var moment = require("moment");
moment().format();

const initialState = {
  isSigningUp: false,
  signupError: "",
  status: "",
  isLoggedIn: false,
  loginError: "",
  user: "",
  workouts: [],
  users: [],
  logs: []
};

const reducer = (state = initialState, action) => {
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
        isSigningUp: true
      };
    }
    case SIGNUP_FAILURE: {
      return {
        ...state,
        isSigningUp: false,
        signupError: action.payload
      };
    }
    case LOGIN_START: {
      return {
        ...state,
        isLoggedIn: false,
        loginError: ""
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        isLoggedIn: true,
        loginError: "",
        user: action.user
      };
    }
    case LOGIN_FAILURE: {
      return {
        ...state,
        isLoggedIn: false,
        loginError: "Login Failed"
      };
    }
    case ADD_WORKOUT: {
      return {
        ...state,
        workouts: [action.payload]
      };
    }
    case FETCHING: {
      return {
        ...state
      };
    }
    case DATA_FAIL: {
      return {
        ...state
      };
    }
    case DATA_SUCCESS: {
      return {
        ...state,
        users: action.payload
      };
    }
    case USER_SUCCESS: {
      return {
        ...state,
        user: action.payload
      };
    }
    case LOG_SUCCESS: {
      return {
        ...state,
        logs: action.payload
      };
    }
    default:
      return state;
  }
};

export default reducer;
