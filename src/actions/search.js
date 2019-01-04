import { key } from '../../config';

export function searchTermChange(searchTerm) {
  return {
    type: 'SEARCH_TERM_CHANGE',
    value: searchTerm,
  };
}

export function search(searchTerm) {
  return (dispatch) => {
    dispatch({ type: 'SEARCH_REQUEST' });
    const url = `http://www.omdbapi.com/?apikey=${key}&s=${encodeURIComponent(searchTerm)}&ype=movie`;
    fetch(url)
      .then(response => response.json())
      .then(json => {
        if (json.Response === 'False') {
          throw json.Error;
        }
        const results = json.Search;
        dispatch({ type: 'SEARCH_REQUEST_SUCCESS', results });
      })
      .catch(err => {
        const errorMessage = (err instanceof Error ? err.message : String(err));
        dispatch({ type: 'SEARCH_REQUEST_FAILURE', errorMessage });
      });
  };
}