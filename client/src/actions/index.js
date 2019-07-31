import axios from 'axios';

export const FETCH_USERS_START = 'FETCH_USERS_START';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_FAIL = 'FETCH_USERS_FAIL';

export const FETCH_POSTS_START = 'FETCH_POSTS_START';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAIL = 'FETCH_POSTS_FAIL';

export const fetchUsers = () => dispatch => {
  dispatch({ type: FETCH_USERS_START });
  axios
    .get('http://localhost:4000/api/users')
    .then(res => {
      dispatch({ type: FETCH_USERS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: FETCH_USERS_FAIL, payload: err.message });
    });
};

export const fetchUserPosts = userId => dispatch => {
  dispatch({ type: FETCH_POSTS_START });
  axios
    .get(`http://localhost:4000/api/users/${userId}/posts`)
    .then(res => {
      dispatch({ type: FETCH_POSTS_START, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: FETCH_POSTS_FAIL, payload: err.message });
    });
};
