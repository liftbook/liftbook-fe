import axios from 'axios'
export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';


export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const FETCHING = 'FETCHING'
export const CREATING = 'CREATING' 
export const DELETING = 'DELETING'
export const UPDATING = 'UPDATING' 
export const NOT_UPDATING = 'NOT_UPDATING' 

export const DATA_SUCCESS = 'DATA_SUCCESS' 
export const USER_SUCCESS = 'USER_SUCCESS' 
export const LOG_SUCCESS = 'LOG_SUCCESS'

export const DATA_FAIL = 'DATA_FAIL' 
// import authentication from './Authentication/authentication'

export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });

  return axios
      .post('https://lift-book.herokuapp.com/api/users/login', creds)
      .then(res => {
          localStorage.setItem('token', res.data.payload)
          dispatch({ type: LOGIN_SUCCESS })
      })
      .catch(err => {
          if(err.response && err.response.status === 403 ) {
              localStorage.removeItem('token')
          }
          dispatch({ type: LOGIN_FAILURE })
      })
}

//USER ACTIONS

export const getUsers = () => dispatch => {
    dispatch({type: FETCHING})
    axios
      .get('https://lift-book.herokuapp.com/api/users', {
        headers: {
          "content-type": "application/json",
          username: localStorage.getItem("username"),
          Authorization: localStorage.getItem("token")
      }
      })
      .then(response => {
        dispatch({type: DATA_SUCCESS, payload: response.data})
      })
      .catch(error => {
        dispatch({type: DATA_FAIL, payload: error})
      })
  }

export const getUser = (user) => dispatch => {
  dispatch({type: FETCHING})
  axios
    .get(`https://lift-book.herokuapp.com/api/users/${user}`, {
      headers: {
        "content-type": "application/json",
        username: localStorage.getItem("username"),
        Authorization: localStorage.getItem("token")
    }
    })
    .then(response => {
    dispatch({type: USER_SUCCESS, payload: response.data})
  })
  .catch(error => {
    dispatch({type: DATA_FAIL, payload: error})
  })
}

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
export const getLogs = (user) => dispatch => {
  dispatch({type: FETCHING})
  axios
    .get(`https://lift-book.herokuapp.com/api/users/${user.username}/logs`, {
      headers: {
        "content-type": "application/json",
        username: localStorage.getItem("username"),
        Authorization: localStorage.getItem("token")
    }
    })
    .then(response => {
      dispatch({type: LOG_SUCCESS, payload: response.data})
    })
    .catch(error => {
      dispatch({type: DATA_FAIL, payload: error})
    })
}


//EXERCISE ACTIONS
export const getExercises = () => dispatch => {
  dispatch({type: FETCHING})
  axios
    .get('https://lift-book.herokuapp.com/api/exercises', {
      headers: {
        "content-type": "application/json",
        username: localStorage.getItem("username"),
        Authorization: localStorage.getItem("token")
    }
    })
    .then(response => {
      dispatch({type: DATA_SUCCESS, payload: response.data})
    })
    .catch(error => {
      dispatch({type: DATA_FAIL, payload: error})
    })
}

export const getExercise = (exercise) => dispatch => {
  dispatch({type: FETCHING})
  axios
    .get(`https://lift-book.herokuapp.com/api/exercises/${exercise}`, {
      headers: {
        "content-type": "application/json",
        username: localStorage.getItem("username"),
        Authorization: localStorage.getItem("token")
    }
    })
    .then(response => {
      dispatch({type: DATA_SUCCESS, payload: response.data})
    })
    .catch(error => {
      dispatch({type: DATA_FAIL, payload: error})
    })
}
//GOAL ACTIONS
export const getGoals = () => dispatch => {
  dispatch({type: FETCHING})
  axios
    .get('https://lift-book.herokuapp.com/api/goals', {
      headers: {
        "content-type": "application/json",
        username: localStorage.getItem("username"),
        Authorization: localStorage.getItem("token")
    }
    })
    .then(response => {
      dispatch({type: DATA_SUCCESS, payload: response.data})
    })
    .catch(error => {
      dispatch({type: DATA_FAIL, payload: error})
    })
}
export const getGoal = (username) => dispatch => {
  dispatch({type: FETCHING})
  axios
    .get(`https://lift-book.herokuapp.com/api/users/${username}/goals`, {
      headers: {
        "content-type": "application/json",
        username: localStorage.getItem("username"),
        Authorization: localStorage.getItem("token")
    }
    })
    .then(response => {
      dispatch({type: DATA_SUCCESS, payload: response.data})
    })
    .catch(error => {
      dispatch({type: DATA_FAIL, payload: error})
    })
}
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


