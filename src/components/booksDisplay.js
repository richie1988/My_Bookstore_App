import React from 'react';
import PropTypes from 'prop-types';
import Book from './book';

function BookDisplay({ books, onDelete }) {
  return (
    <div>
      <h2>Book List</h2>
      {books.map((book) => (
        <Book key={book.item_id} book={book} onDelete={() => onDelete(book.item_id)} />
      ))}
    </div>
  );
}

BookDisplay.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      item_id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default BookDisplay;
