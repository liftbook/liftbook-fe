
import { FETCHING, DATA_SUCCESS, DATA_FAIL, USER_SUCCESS, LOG_SUCCESS } from './actions'
    var moment = require('moment');
    moment().format();
    const initialState = {

    }
    
    const reducer = (state = initialState, action) => {

import {
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
  user: [],
  workouts: [],
          users: [],
        user: [],
        logs: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_WORKOUT: {
      return {
        ...state,
        workouts: [...action.payload]
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
              case LOG_SUCCESS: {
                return {
                  ...state,
                  logs: action.payload,
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
};

export default reducer;
