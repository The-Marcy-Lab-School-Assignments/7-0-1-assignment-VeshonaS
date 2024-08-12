import React, { useState, useEffect } from 'react';
import GifSearch from'./GifSearch'
import GifContainer from './GifContainer';

export const App = () => {
  const [query, setQuery] = useState('');
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    if (query !== '') {
      const fetchGifs = async () => {
        const apiKey = 'LWRNzPufLxWTLY7Br2UJkPkbNmTbmJXI';
        const response = await fetch(
          `https://api.giphy.com/v1/gifs/search?q=${query}&limit=10&api_key=${apiKey}`
        );
        const { data } = await response.json();
        setGifs(data);
      };

      fetchGifs();
    }
  }, [query]);

  return (
    <div>
      <h1>GIF Search</h1>
      <GifSearch setQuery={setQuery} />
      <GifContainer gifs={gifs} />
    </div>
  );
};

// export default App;
