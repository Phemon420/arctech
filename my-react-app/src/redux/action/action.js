import axios from "axios";
import { GET_DATA_FAIL, GET_DATA_REQUEST, GET_DATA_SUCCESS } from "../constant/constant.js";
// Example of fetching posts

const fetchPosts = () => {

  const URL=import.meta.env.VITE_REACT_BASE_URL;
  return async (dispatch) => {
    try {
      dispatch({ type: GET_DATA_REQUEST });
      const response = await axios.get(`${URL}/data`);
      console.log(response);
      dispatch({ type: GET_DATA_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: GET_DATA_FAIL, payload: error.message });
    }
  };
};

export default fetchPosts;