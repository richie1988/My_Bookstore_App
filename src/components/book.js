import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Book({ book, onDelete }) {
  const [isDeleted, setIsDeleted] = useState(false);

  const handleDelete = () => {
    setIsDeleted(true);
    onDelete();
  };

  return (
    <div>
      {isDeleted ? (
        <p>This book has been deleted.</p>
      ) : (
        <>
          <h3>{book.title}</h3>
          <p>
            Author:
            {book.author}
          </p>
          <button type="button" onClick={handleDelete}>Delete</button>
        </>
      )}
    </div>
  );
}

Book.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Book;
