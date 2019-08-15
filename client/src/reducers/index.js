import {
  FETCH_USERS_START,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAIL,
  FETCH_POSTS_START,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAIL,
  GET_USER_START,
  GET_USER_SUCCESS,
  GET_USER_FAIL
} from '../actions';

const initialState = {
  users: [],
  user: [],
  postdata: [],
  postsFetched: false,
  fetchingUsers: false,
  fetchingPosts: false,
  fetchingUser: false,
  error: ''
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_START: {
      return {
        ...state,
        fetchingUsers: true,
        error: ''
      };
    }
    case FETCH_USERS_SUCCESS: {
      return {
        ...state,
        fetchingUsers: false,
        users: action.payload
      };
    }
    case FETCH_USERS_FAIL: {
      return {
        ...state,
        fetchingUsers: false,
        error: action.payload
      };
    }
    case FETCH_POSTS_START: {
      return {
        ...state,
        fetchingPosts: true,
        postsFetched: false,
        error: ''
      };
    }
    case FETCH_POSTS_SUCCESS: {
      return {
        ...state,
        postsFetched: true,
        fetchingPosts: false,
        postdata: action.payload
      };
    }
    case FETCH_POSTS_FAIL: {
      return {
        ...state,
        postsFetched: false,
        fetchingPosts: false,
        error: action.payload
      };
    }
    case GET_USER_START: {
      return {
        ...state,
        fetchingUser: true,
        error: ''
      };
    }
    case GET_USER_SUCCESS: {
      return {
        ...state,
        fetchingUser: false,
        user: action.payload
      };
    }
    case GET_USER_FAIL: {
      return {
        ...state,
        fetchingUser: false,
        error: action.payload
      };
    }
    default:
      return state;
  }
};

export default rootReducer;
