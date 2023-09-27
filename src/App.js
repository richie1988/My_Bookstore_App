import React from 'react';
import {
  BrowserRouter, Route, Routes, Link,
} from 'react-router-dom';
import Books from './pages/books';
import Categories from './pages/Categories';
import './Books.css';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Books</Link>
          </li>
          <li>
            <Link to="/categories">Categories</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
