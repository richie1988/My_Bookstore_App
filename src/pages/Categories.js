import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function Categories() {
  const [categories, setCategories] = useState(['Author 1', 'Author 2']);
  const [newCategory, setNewCategory] = useState('');

  const handleAddCategory = () => {
    if (newCategory.trim() !== '') {
      setCategories([...categories, newCategory]);
      setNewCategory('');
    }
  };

  return (
    <div>
      <h2>Categories (Authors)</h2>
      <ul>
        {categories.map((category) => (
          <li key={uuidv4()}>{category}</li>
        ))}
      </ul>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleAddCategory();
        }}
      >
        <label htmlFor="categoryInput">
          Author:
          <input
            type="text"
            id="categoryInput"
            name="category"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
          />
        </label>
        <button type="submit">Add Author</button>
      </form>
    </div>
  );
}

export default Categories;
