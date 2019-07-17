import axios from "axios";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const FETCHING = "FETCHING";
export const CREATING = "CREATING";
export const DELETING = "DELETING";
export const UPDATING = "UPDATING";
export const NOT_UPDATING = "NOT_UPDATING";

export const DATA_SUCCESS = "DATA_SUCCESS";

export const DATA_FAIL = "DATA_FAIL";

// add.js
export const ADD_WORKOUT = "ADD_WORKOUT";

export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });

  return axios
    .post("https://lift-book.herokuapp.com/api/users/login", creds)
    .then(res => {
      localStorage.setItem("token", res.data.payload);
      dispatch({ type: LOGIN_SUCCESS });
    })
    .catch(err => {
      if (err.response && err.response.status === 403) {
        localStorage.removeItem("token");
      }
      dispatch({ type: LOGIN_FAILURE });
    });
};
export const getUsers = () => dispatch => {
  dispatch({ type: FETCHING });
  axios
    .get("https://lift-book.herokuapp.com/api/users")
    .then(response => {
      dispatch({ type: DATA_SUCCESS, payload: response.data });
    })
    .catch(error => {
      dispatch({ type: DATA_FAIL, payload: error });
    });
};

export const addWorkout = newWorkout => dispatch => {
  dispatch({ type: CREATING });
  axios
    .post("https://lift-book.herokuapp.com/api/exercises", newWorkout)
    .then(res => dispatch({ type: ADD_WORKOUT, payload: res.data }))
    .catch(err => dispatch({ type: DATA_FAIL, payload: err }));
};
