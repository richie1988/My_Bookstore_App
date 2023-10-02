import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addBook, removeBook } from '../redux/books/bookSlice';
import BookDisplay from '../components/booksDisplay';
import BookForm from '../components/bookForm';

function Books() {
  const books = useSelector((state) => state.books.books);
  const dispatch = useDispatch();

  const handleAddBook = (newBook) => {
    dispatch(addBook(newBook));
  };

  const handleDeleteBook = (itemId) => {
    const bookToDelete = books.find((book) => book.item_id === itemId);

    if (bookToDelete) {
      dispatch(removeBook(itemId));
    }
  };

  return (
    <div>
      <h2>Books</h2>
      <BookForm onAdd={handleAddBook} />
      <BookDisplay books={books} onDelete={handleDeleteBook} />
    </div>
  );
}

export default Books;
