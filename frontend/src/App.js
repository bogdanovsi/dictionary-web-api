import React, { useEffect, useState } from 'react';
import './App.css';
import DictView from './components/DictView';

function App() {
  const [items, setItems] = useState([])
  useEffect(() => fetch('/dict').then(res => res.json()).then(setItems), [])

  return (
    <div className="App">
      <header className="App-header">
        bogdanovsi
      </header>
      <DictView items={items}/>
    </div>
  );
}

export default App;
