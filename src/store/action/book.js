import { GET_BOOK_ACTION, GET_CATEGORIES_ACTION } from "./types";
import axios from "axios";

export const getBookAction = () => async (dispatch, getState) => {
  const response = await axios.get(
    "https://www.googleapis.com/books/v1/volumes?q=coding&maxResults=10&key=AIzaSyCxG7X-PSgnVSx1M_FKpgbjEg8dLgs7WbA"
  );
  const data = response.data.items;
  const arrCat = [];
  data.forEach((item, index) => {
    if (item.volumeInfo?.categories) {
      var val = {
        name: item.volumeInfo.categories[0],
      };
      arrCat.push(val);
    }
  });

  const filteredCategory = arrCat.reduce((acc, current) => {
    const x = acc.find((item) => item.name === current.name);
    if (!x) {
      return acc.concat([current]);
    } else {
      return acc;
    }
  }, []);

  dispatch({
    type: GET_BOOK_ACTION,
    payload: {
      data: data,
    },
  });
  dispatch({
    type: GET_CATEGORIES_ACTION,
    payload: {
      categories: filteredCategory,
    },
  });
};

export const getSearchAction = (search) => async (dispatch, getState) => {
  const response = await axios.get(
    "https://www.googleapis.com/books/v1/volumes?q=coding&maxResults=10&key=AIzaSyCxG7X-PSgnVSx1M_FKpgbjEg8dLgs7WbA"
  );
  const data = response.data.items;
  const newData = data.filter((item) => {
    return (
      item.volumeInfo.title.toLowerCase().indexOf(search.toLowerCase()) !== -1
    );
  });

  dispatch({
    type: GET_BOOK_ACTION,
    payload: {
      data: newData,
    },
  });
};

export const getFilteredAction = (filtered) => async (dispatch, getState) => {
  const response = await axios.get(
    "https://www.googleapis.com/books/v1/volumes?q=coding&maxResults=10&key=AIzaSyCxG7X-PSgnVSx1M_FKpgbjEg8dLgs7WbA"
  );
  const data = response.data.items;
  const dataArr = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].volumeInfo.categories) {
      if (data[i].volumeInfo.categories[0] === filtered) {
        dataArr.push(data[i]);
      }
    }
  }

  dispatch({
    type: GET_BOOK_ACTION,
    payload: {
      data: dataArr,
    },
  });
};
