import axios from 'axios'

export const FETCHING = 'FETCHING'
export const CREATING = 'CREATING' 
export const DELETING = 'DELETING'
export const UPDATING = 'UPDATING' 
export const NOT_UPDATING = 'NOT_UPDATING' 

export const DATA_SUCCESS = 'DATA_SUCCESS' 

export const DATA_FAIL = 'DATA_FAIL' 

export const getUsers = () => dispatch => {
    dispatch({type: FETCHING})
    axios
      .get('https://lift-book.herokuapp.com/api/users')
      .then(response => {
        dispatch({type: DATA_SUCCESS, payload: response.data})
      })
      .catch(error => {
        dispatch({type: DATA_FAIL, payload: error})
      })
  }