import React, { useState, Fragment } from "react";
import { useExternalApi } from "./hooks"

function App() {
  const [query, setQuery] = useState('');
  const [{ data, isError, isLoading }, doFetch] = useExternalApi(
    `https://hn.algolia.com/api/v1/search?query=React`,
    { hits: [] }
  );

  return (
    <Fragment>
      <form onSubmit={(event) => {
        doFetch(`https://hn.algolia.com/api/v1/search?query=${query}`);

        event.preventDefault();
      }}>
        <input
          type="text"
          value={query}
          onChange={event => setQuery(event.target.value)}>
        </input>
        <button type="submit">Search</button>
      </form>
      { isError ? <div>Oops... some error occured!</div> : null}
      {
        isLoading ? <div>Loading...</div> :
          <ul>
            {data.hits.map(item => (
              <li key={item.objectID}>
                <a href={item.url}>{item.title}</a>
              </li>
            ))}
          </ul>
      }
    </Fragment >
  );
}

export default App;
