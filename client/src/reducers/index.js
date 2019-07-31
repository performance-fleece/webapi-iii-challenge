const initialState = {
  users: [],
  posts: [],
  fetchingUsers: false,
  fetchingPosts: false,
  error: ''
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default rootReducer;
