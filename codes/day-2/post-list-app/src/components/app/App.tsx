import React, { useState } from 'react';
import logo from './logo.svg';
import '../app/App.css';
import PostList from '../post-list/PostList';

function App() {
  const [search, setSearch] = useState('')
  return (
    <div className="App">
      <header className="App-header">
        <a>
          Post List
        </a>
      </header>
      <input className="Post-search" type='textbox' placeholder='Search Posts' onChange={(event) => 
        {setSearch(event.target.value)}} />
      <PostList searchText={search} />
    </div>
  );
}

export default App;
