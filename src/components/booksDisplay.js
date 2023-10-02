import React from 'react';
import PropTypes from 'prop-types';
import Book from './book';

function BookDisplay({ books, onDelete }) {
  return (
    <div>
      <h2>Book List</h2>
      {books.map((book) => (
        <Book key={book.id} book={book} onDelete={onDelete} />
      ))}
    </div>
  );
}

BookDisplay.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default BookDisplay;
