import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/bookSlice';
import categoriesReducer from './categories/categorieSlice';

const store = configureStore({
  reducer: {
    book: booksReducer,
    categories: categoriesReducer,
  },
});

export default store;
