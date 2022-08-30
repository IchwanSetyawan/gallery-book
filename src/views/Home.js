import React, { useEffect, useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import {
  getBookAction,
  getFilteredAction,
  getSearchAction,
} from "../store/action";

const Home = () => {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const bookReducers = useSelector(({ Book }) => Book);

  useEffect(() => {
    dispatch(getBookAction());
  }, [dispatch]);

  useEffect(() => {
    if (localStorage.getItem("username")) {
      navigate("/login");
    }
  });

  const handleOnchangeSearch = useCallback(
    (e) => {
      const value = e.target.value;

      if (value) {
        dispatch(getSearchAction(value, selectedCategory));
      } else {
        dispatch(getBookAction());
      }
      setSearch(value);
    },
    [selectedCategory]
  );

  const handleOnchangeSelect = useCallback(
    (e) => {
      const value = e.target.value;

      if (value) {
        dispatch(getFilteredAction(value, search));
      } else {
        dispatch(getBookAction());
      }
      setSelectedCategory(value);
    },
    [search]
  );

  return (
    <>
      <Navbar />
      <div>
        <div className="header flex justify-center items-center">
          <input
            className="p-1.5 text-center rounded-md m-2 bg-slate-200"
            type="text"
            placeholder="search title"
            value={search}
            onChange={handleOnchangeSearch}
          />
          <select
            className="p-1.5 text-center rounded-md m-2 bg-slate-200"
            onChange={handleOnchangeSelect}
            value={selectedCategory}
          >
            <option value="">---all categories --</option>
            {bookReducers.categories.map((m, idx) => {
              return (
                <option key={idx} value={m.name}>
                  {m.name}
                </option>
              );
            })}
          </select>
        </div>
        <div className="flex justify-center mt-6">
          <div className="w-1/2 bg-white rounded-lg shadow">
            <h2 className="m-6 text-2xl text-center">BookList</h2>
            {bookReducers.data.map((book) => {
              return (
                <ul key={book.id} className="divide-y-2 divide-gray-100">
                  <li className="p-3 hover:bg-blue-600 hover:text-blue-200">
                    - {book.volumeInfo.title}
                  </li>
                </ul>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
