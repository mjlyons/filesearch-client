import { MIN_QUERY_LEN, SERVER_URL } from 'src/constants';

/*
 * Action types
 */
export const ActionTypes = {
  SET_QUERY: 'SET_QUERY',
  SET_QUERY_RESULTS: 'SET_QUERY_RESULTS',
}

let pendingRequest = null; 

/*
 * Action creators
 */
export function setQuery(query : string) {
  return (dispatch) => {
    if (pendingRequest) {
      pendingRequest.abort();
      pendingRequest = null;
    }
    
    if (query.length < MIN_QUERY_LEN) {
      dispatch({ type: ActionTypes.SET_QUERY_RESULTS, results: {}});
    } else {
      console.log(`dispatching ajax call for ${query}`);
      const ajaxReq = new XMLHttpRequest();
      ajaxReq.onreadystatechange = function() {
        if (ajaxReq.readyState !== XMLHttpRequest.DONE) {
          return;
        }
        if (ajaxReq.status === 200) {
          console.log("Response is ok!");
          const results = JSON.parse(ajaxReq.responseText);
          dispatch({ type: ActionTypes.SET_QUERY_RESULTS, results });
        } else {
          console.log("RESPONSE ERROR");
        }
      }
      ajaxReq.open('GET', `${SERVER_URL}/search?q=${encodeURIComponent(query)}`, true);
      ajaxReq.send(null);
      pendingRequest = ajaxReq;
    }
        
    dispatch({ type: ActionTypes.SET_QUERY, query }); 
  }
}
