// src/SearchForm.js
import React, { useState } from 'react';

 const GifSearch = ({ setQuery }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(inputValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Search for GIFs"
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default GifSearch;
