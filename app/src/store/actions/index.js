import axios from 'axios';

export const FETCH_CHARS_START = 'FETCH_CHARS_START';
export const FETCH_CHARS_SUCCESS = 'FETCH_CHARS_SUCCESS';
export const FETCH_CHARS_FAILURE = 'FETCH_CHARS_FAILURE';

export const fetchChars = (url) => (dispatch) => {
  dispatch({ type: FETCH_CHARS_START });
  axios
    .get(url)
    .then((res) => {
      dispatch({ type: FETCH_CHARS_SUCCESS, payload: res.data });
    })
    .catch((err) => console.log(err));
};

export const SET_SEARCH_TERM = 'SET_SEARCH_TERM';

export const handleChanges = (e) => (dispatch) => {
  dispatch({ type: SET_SEARCH_TERM, payload: e.target.value });
};
