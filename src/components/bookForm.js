import React, { useState } from 'react';
import PropTypes from 'prop-types';

function BookForm({ onAdd }) {
  // State for tracking the new book's title and author
  const [newBook, setNewBook] = useState({ title: '', author: '' });

  // Handle changes in the input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    // Update the corresponding field in the newBook state
    setNewBook({ ...newBook, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the provided onAdd function with the new book data
    onAdd(newBook);
    // Reset the input fields
    setNewBook({ title: '', author: '' });
  };

  return (
    <div>
      <h2>Add a New Book</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">
          Title:
          <input
            type="text"
            name="title"
            id="title"
            value={newBook.title}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="author">
          Author:
          <input
            type="text"
            name="author"
            id="author"
            value={newBook.author}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

// PropTypes definition to validate the onAdd prop
BookForm.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

export default BookForm;
