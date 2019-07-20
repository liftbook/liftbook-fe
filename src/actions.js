import axios from "axios";
export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const SIGNUP_START = "SIGNUP_START";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_RESOLVED = "SIGNUP_RESOLVED";
export const SIGNUP_FAILURE = "SIGNUP_FAILURE";

export const FETCHING = "FETCHING";
export const CREATING = "CREATING";
export const DELETING = "DELETING";
export const UPDATING = "UPDATING";
export const NOT_UPDATING = "NOT_UPDATING";

export const DATA_SUCCESS = "DATA_SUCCESS";
export const USER_SUCCESS = "USER_SUCCESS";
export const LOG_SUCCESS = "LOG_SUCCESS";
export const DATA_FAIL = "DATA_FAIL";

export const EXERCISE_SUCCESS = 'EXERCISE_SUCCESS'

export const ADD_WORKOUT = "ADD_WORKOUT";

export const signup = user => dispatch => {
  dispatch({ type: SIGNUP_START });
  return axios
    .post("https://lift-book.herokuapp.com/api/users/register", user)
    .then(res => {
      dispatch({
        type: SIGNUP_SUCCESS,
        payload: res.data.msg,
        status: "success"
      });
      setTimeout(() => dispatch({ type: SIGNUP_RESOLVED }), 1500);
    })
    .catch(err => {
      dispatch({ type: SIGNUP_FAILURE, payload: err.response });
    });
};

export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });
  return axios
    .post("https://lift-book.herokuapp.com/api/users/login", creds)
    .then(res => {
      localStorage.setItem("token", res.data.payload);
      dispatch({
        type: LOGIN_SUCCESS,
        user: res.data.username,
        token: res.data.token,
        status: "success",
        message: res.data.message
      });
      console.log(res.data);
    })
    .catch(err => {
      if (err.response && err.response.status === 403) {
        localStorage.removeItem("token");
      }
      dispatch({ type: LOGIN_FAILURE });
    });
};

//USER ACTIONS

export const getUsers = () => dispatch => {
  dispatch({ type: FETCHING });
  axios
    .get("https://lift-book.herokuapp.com/api/users", {
      headers: {
        "content-type": "application/json",
        username: localStorage.getItem("username"),
        Authorization: localStorage.getItem("token")
      }
    })
    .then(response => {
      dispatch({ type: DATA_SUCCESS, payload: response.data });
    })
    .catch(error => {
      dispatch({ type: DATA_FAIL, payload: error });
    });
};

// add.js

export const getUser = username => dispatch => {
  dispatch({ type: FETCHING });
  axios
    .get(`https://lift-book.herokuapp.com/api/users/${username}`, {
      headers: {
        "content-type": "application/json",
        username: localStorage.getItem("username"),
        Authorization: localStorage.getItem("token")
      }
    })
    .then(response => {
      dispatch({ type: USER_SUCCESS, payload: response.data });
    })
    .catch(error => {
      dispatch({ type: DATA_FAIL, payload: error });
    });
};

//LOG ACTIONS
// GET -- /logs
// Returns: array of objects
// Function: Returns all logs for all users

// GET -- /logs/[log id]
// Returns: object
// Function: Returns a single log

// PUT -- /logs/[log id]
// Returns: object
// Function: Returns an updated log
export const getLogs = user => dispatch => {
  dispatch({ type: FETCHING });
  axios
    .get(`https://lift-book.herokuapp.com/api/users/${user.username}/logs`, {
      headers: {
        "content-type": "application/json",
        username: localStorage.getItem("username"),
        Authorization: localStorage.getItem("token")
      }
    })
    .then(response => {
      dispatch({ type: LOG_SUCCESS, payload: response.data });
    })
    .catch(error => {
      dispatch({ type: DATA_FAIL, payload: error });
    });
};

//EXERCISE ACTIONS
export const getExercises = () => dispatch => {
  dispatch({ type: FETCHING });
  axios
    .get("https://lift-book.herokuapp.com/api/exercises", {
      headers: {
        "content-type": "application/json",
        username: localStorage.getItem("username"),
        Authorization: localStorage.getItem("token")
      }
    })
    .then(response => {
      dispatch({ type: EXERCISE_SUCCESS, payload: response.data });
    })
    .catch(error => {
      dispatch({ type: DATA_FAIL, payload: error });
    });
};

export const getExercise = exercise => dispatch => {
  dispatch({ type: FETCHING });
  axios
    .get(`https://lift-book.herokuapp.com/api/exercises/${exercise}`, {
      headers: {
        "content-type": "application/json",
        username: localStorage.getItem("username"),
        Authorization: localStorage.getItem("token")
      }
    })
    .then(response => {
      dispatch({ type: DATA_SUCCESS, payload: response.data });
    })
    .catch(error => {
      dispatch({ type: DATA_FAIL, payload: error });
    });
};
//GOAL ACTIONS
export const getGoals = () => dispatch => {
  dispatch({ type: FETCHING });
  axios
    .get("https://lift-book.herokuapp.com/api/goals", {
      headers: {
        "content-type": "application/json",
        username: localStorage.getItem("username"),
        Authorization: localStorage.getItem("token")
      }
    })
    .then(response => {
      dispatch({ type: DATA_SUCCESS, payload: response.data });
    })
    .catch(error => {
      dispatch({ type: DATA_FAIL, payload: error });
    });
};
export const getGoal = username => dispatch => {
  dispatch({ type: FETCHING });
  axios
    .get(`https://lift-book.herokuapp.com/api/users/${username}/goals`, {
      headers: {
        "content-type": "application/json",
        username: localStorage.getItem("username"),
        Authorization: localStorage.getItem("token")
      }
    })
    .then(response => {
      dispatch({ type: DATA_SUCCESS, payload: response.data });
    })
    .catch(error => {
      dispatch({ type: DATA_FAIL, payload: error });
    });
};
// GET -- /goals
// Returns: array of objects
// Function: Returns all goals

// GET -- /goals/[goal id]
// Returns: object
// Function: Returns a single goal

// GET -- /users/[username]/goals
// Returns: array of objects
// Function: Returns all goals for one user

// GET -- /users/[username]/goals/[exercise name or id]
// Returns: array of objects
// Function: Returns all goals for one exercise
//LOGS ACTIONS

//RECORDS ACTIONS

export const addWorkout = newWorkout => dispatch => {
  console.log(newWorkout);
  dispatch({ type: CREATING });
  axios
    .post("https://lift-book.herokuapp.com/api/exercises", newWorkout, {
      headers: {
        "content-type": "application/json",
        username: localStorage.getItem("username"),
        Authorization: localStorage.getItem("token")
      }})
    .then(res => {
      console.log(res);
      dispatch({ type: ADD_WORKOUT, payload: res.data });
    })
    .catch(err => dispatch({ type: DATA_FAIL, payload: err }));

};
