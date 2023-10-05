import React from 'react';
import {
  BrowserRouter, Route, Routes,
} from 'react-router-dom';
import BookList from './components/bookList';
import NavLinks from './components/NavLink';
import Categories from './components/Categories';

const App = () => (
  <BrowserRouter>
    <NavLinks />
    <Routes>
      <Route path="/" element={<BookList />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  </BrowserRouter>
);

export default App;
