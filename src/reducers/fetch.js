import { BOOKS_FETCH } from '../constants/actionTypes';

const INITIAL_STATE = {
  books: []
};

function fetchReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case BOOKS_FETCH: {
      return { state, books: action.payload };
    }
    default:
      return state;
  }
}

export default fetchReducer;
