import React, { useEffect, useState } from 'react';
import './App.css';
import DictView from './components/DictView';
import api from './api';

function App() {
  const [items, setItems] = useState([])
  const [created, setCreated] = useState({ isNeed: false, data: {} })
  useEffect(() => api().get('/dict').then(res => {
    setItems(res.data);
  }), [])

  const updateItems = (searchText) => {
    api().get(`/dict/${searchText}`).then(res => {
      if (res.data === null) {
        setCreated({ isNeed: true, data: { title: searchText } })
      } else {
        setItems([res.data]);
      }
    })
  }

  const onSubmit = (ev) => {
    ev.preventDefault();

    const formData = new FormData(ev.target);
    const searchText = formData.get('search-text')

    updateItems(searchText)
  }

  const onSubmitCreated = (ev) => {
    ev.preventDefault();

    const formData = new FormData(ev.target);
    const title = formData.get('title')
    const description = formData.get('description')

    api().post(`/dict`, { title: created.data.title, description }).then(res => {
      if (res.status == 201) {
        setCreated({ isNeed: false, data: {} })
        updateItems()
      }
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        bogdanovsi
      </header>
      <div>
        <form onSubmit={onSubmit}>
          <input name='search-text' type="search" />
          <button type='submit'>Search</button>
        </form>
      </div>
      {created.isNeed && <form className="submit-form" onSubmit={onSubmitCreated}>
        <input name="title" disabled value={created.data.title} />
        <textarea name='description' />
        <button type='submit'>Create</button>
      </form>}
      <DictView items={items} />
    </div>
  );
}

export default App;
