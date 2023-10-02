import React, { useState } from 'react';
import PropTypes from 'prop-types';

function BookForm({ onAdd }) {
  const [newBook, setNewBook] = useState({ title: '', author: '' });

  // Handle changes in the input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewBook({ ...newBook, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(newBook);
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

BookForm.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

export default BookForm;
