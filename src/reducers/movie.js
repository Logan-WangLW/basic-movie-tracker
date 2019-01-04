const initialState = {
  resultsById: {},
};

export function movie(state = initialState, action) {
  switch (action.type) {
    case 'MOVIE_REQUEST':
      return {
        ...state,
        resultsById: {
          ...state.resultsById,
          [action.id]: {
            loading: true,
          },
        },
      };
    case 'MOVIE_REQUEST_FAILURE':
      return {
        ...state,
        resultsById: {
          ...state.resultsById,
          [action.id]: {
            ...state.resultsById[action.id],
            loading: false,
            errorMessage: action.errorMessage,
          },
        },
      };
    case 'MOVIE_REQUEST_SUCCESS':
      return {
        ...state,
        resultsById: {
          ...state.resultsById,
          [action.id]: {
            ...state.resultsById[action.id],
            loading: false,
            result: action.result,
          },
        },
      };
    default:
      return state;
  }
}