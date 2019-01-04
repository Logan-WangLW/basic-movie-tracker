import { Alert } from 'react-native';
import axios from 'axios';
import { key } from '../../config';

export function fetchMovie(id) {
  return (dispatch) => {
    dispatch({ type: 'MOVIE_REQUEST', id });
    const url = `http://www.omdbapi.com/?apikey=${key}&i=${encodeURIComponent(id)}&ype=movie&plot=full`;
    fetch(url)
      .then(response => response.json())
      .then(json => {
        if (json.Response === 'False') {
          throw json.Error;
        }
        const result = json;
        dispatch({ type: 'MOVIE_REQUEST_SUCCESS', id, result });
      })
      .catch(err => {
        const errorMessage = (err instanceof Error ? err.message : String(err));
        dispatch({ type: 'MOVIE_REQUEST_FAILURE', id, errorMessage });
      });
  };
}