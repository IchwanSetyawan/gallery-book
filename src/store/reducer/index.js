import { combineReducers } from "redux";
import Book from "./book";
import User from "./users";

const RootReducers = combineReducers({
  Book,
  User,
});

export default RootReducers;
