import { GET_BOOK_ACTION, GET_CATEGORIES_ACTION } from "../action/types";

const initialState = {
  data: [],
  isLoading: true,
  categories: [],
};

const BookReducers = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_BOOK_ACTION:
      state = {
        ...state,
        data: payload.data,
      };
      break;
    case GET_CATEGORIES_ACTION:
      state = {
        ...state,
        categories: payload.categories,
      };
      break;
  }
  return state;
};

export default BookReducers;
