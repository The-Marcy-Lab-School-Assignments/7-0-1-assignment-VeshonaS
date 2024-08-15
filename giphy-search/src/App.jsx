import React, { useState, useEffect } from 'react';
import GifSearch from './components/GifSearch';
import GifContainer from './components/GifContainer';
import API_KEY from '../config';

function App () {
  const [query, setQuery] = useState('');
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    const url = query ? `https://api.giphy.com/v1/gifs/search?q=${query}&limit=3&api_key=${API_KEY}`:  `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=3&rating=g`
    
      const fetchGifs = async () => {
        const response = await fetch(url);
        const { data } = await response.json();
        setGifs(data);
      };

      fetchGifs();

  }, [query]);

  return (
    <div>
      <h1>GIF Search</h1>
      <GifSearch setQuery={setQuery} />
      <GifContainer gifs={gifs} />
    </div>
  );
};

export default App;
