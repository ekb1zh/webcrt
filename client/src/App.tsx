import React, { useState, useEffect, useMemo } from 'react';
import './App.css';
import * as T from '../../middle/types';
import Card from './components/Card';

const SERVER_URL = '';

const App: React.FC = () => {

  const [entities, setEntities] = useState([] as T.Data['response']);

  function fetchMoreEntities<T extends T.Data = T.Data>(url: string) {
    fetch(url)
      .then<T>(res => {
        if (res.ok) return res.json();
        else throw new Error(`Fetch error with status: ${res.status}`)
      })
      .then(res => setEntities(prev => [...prev, ...res.response]))
      .catch(err => console.error(err));
  }

  useEffect(() => fetchMoreEntities(SERVER_URL), []);

  const memoizedCards = useMemo(
    () => entities.map(entity => <Card key={entity.id} entity={entity} />),
    [entities]
  );

  return (
    <>
      <header>
        HEADER
      </header>

      <main>
        <div className="grid">
          {memoizedCards}
        </div>
        <button
          className="more"
          onClick={() => fetchMoreEntities(SERVER_URL)}
        >
          показать ещё
        </button>
      </main>

      <footer>
        FOOTER
      </footer>
    </>
  );
}

export default App;
