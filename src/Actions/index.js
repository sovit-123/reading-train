import { BOOKS_FETCH } from '../constants/actionTypes';

export const searchBooks = (result) => ({
  type: BOOKS_FETCH,
  payload: result
});

export default searchBooks;
