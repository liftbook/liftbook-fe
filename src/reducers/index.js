import { LOGIN_SUCCESS, LOGIN_START, LOGIN_FAILURE } from "../actions";

const initialState = {
  isLoggedIn: false,
  loginError: ""
};

function reducer(state = initialState, action) {
  switch (action.type) {
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
