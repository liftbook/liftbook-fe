import {
  FETCHING,
  CREATING,
  UPDATING,
  NOT_UPDATING,
  DELETING,
  DATA_SUCCESS,
  DATA_FAIL,
  ADD_WORKOUT
} from "./actions";

var moment = require("moment");
moment().format();
const initialState = {
  user: [],
  workouts: []
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
    case DATA_SUCCESS: {
      return {
        ...state,
        user: action.payload
      };
    }
    case DATA_FAIL: {
      return {
        ...state
      };
    }
    default:
      return state;
  }
};

export default reducer;
