import { ActionTypes } from 'src/actions/search'; 
import 'src/utils/object-assign';

const initialState = {
  query: "new",
  results: {},
};

export default function searchReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.SET_QUERY:
      return Object.assign({}, state, {query: action.query});
     case ActionTypes.SET_QUERY_RESULTS:
      return Object.assign({}, state, { results: action.results });
    default:
      return state;
  }
}