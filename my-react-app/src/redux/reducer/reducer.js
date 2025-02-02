import * as actionType from "../constant/constant.js"

const initialState = {
  posts: [],
  loading: false,
  error: null,
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.GET_DATA_REQUEST:
      return { ...state, loading: true }; // Sets loading to true before fetching posts
    case actionType.GET_DATA_SUCCESS:
      return { ...state, loading: false, posts: action.payload }; // Stores fetched posts
    case actionType.GET_DATA_FAIL:
      return { ...state, loading: false, error: action.payload }; // Stores error if fetch fails
    default:
      return state;
  }
};

export default postsReducer;