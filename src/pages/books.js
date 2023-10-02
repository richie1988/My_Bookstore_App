import React, { useState } from 'react';
import BookList from '../components/bookList';
import BookForm from '../components/bookForm';

function Books() {
  const [books, setBooks] = useState([
    { id: 1, title: 'Book 1', author: 'Author 1' },
    { id: 2, title: 'Book 2', author: 'Author 2' },
  ]);

  const handleDeleteBook = (bookId) => {
    // Remove the book from the state (you can also send a DELETE request to an API).
    const updatedBooks = books.filter((book) => book.id !== bookId);
    setBooks(updatedBooks);
  };

  const handleAddBook = (newBook) => {
    // Add a new book to the state (you can also send a POST request to an API).
    setBooks([...books, { ...newBook, id: Date.now() }]);
  };

  return (
    <div>
      <h2>Books</h2>
      <BookForm onAdd={handleAddBook} />
      <BookList books={books} onDelete={handleDeleteBook} />
    </div>
  );
}

export default Books;
