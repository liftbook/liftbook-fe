import { FETCHING, CREATING, UPDATING, NOT_UPDATING, DELETING, DATA_SUCCESS, DATA_FAIL, USER_SUCCESS } from './actions'
    var moment = require('moment');
    moment().format();
    const initialState = {
        users: [],
        user: {},
    }
    
    const reducer = (state = initialState, action) => {
        switch (action.type) {
            case FETCHING: {
                return {
                  ...state,
                    }
                  }
            
            case FETCHING: {
            return {
              ...state,
                }
              }
              case DATA_SUCCESS: {
                return {
                  ...state,
                  users: action.payload,
                }
              }
              case USER_SUCCESS: {
                return {
                  ...state,
                  user: action.payload,
                }
              }
              case DATA_FAIL: {
                return {
                  ...state,
                }
            }
            default: 
                return state;
        }
    }
    
    export default reducer
    