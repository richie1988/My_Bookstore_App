import React from 'react';
import {
  BrowserRouter, Route, Routes,
} from 'react-router-dom';
import Navigation from './components/Navigation';
import BookList from './components/bookList';
import Categories from './components/Categories';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
