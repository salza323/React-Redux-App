import { FETCH_CHARS_START, FETCH_CHARS_SUCCESS } from '../actions';

const initialState = {
  chars: [],
  isLoading: false,
  error: '',
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHARS_START:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_CHARS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        chars: action.payload,
      };
    default:
      return state;
  }
};
