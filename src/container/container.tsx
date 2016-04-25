import * as React from 'react';
import { render } from 'react-dom';
import { connect, Provider} from 'react-redux';
import { applyMiddleware, bindActionCreators, compose, createStore, IReducer } from 'redux';
import SearchPage from 'src/components/searchpage';
import searchReducer from 'src/reducers/search';
import * as searchActions from 'src/actions/search'; 

import * as thunk from 'redux-thunk';


// TODO: disable this in prod
let devToolsExtension : Function = f => f;
if ('devToolsExtension' in window) {
  console.log('detected dev tools extension');
  devToolsExtension = window['devToolsExtension'];
} 

const store = (createStore as Function)(
  searchReducer as IReducer<any>,
  compose(applyMiddleware(thunk), devToolsExtension())
);

function mapStateToProps(state) {
  return {
    query: state.query,
    results: state.results,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
      setQuery: searchActions.setQuery,
    }, dispatch);
}

const ReduxSearchPage = connect(mapStateToProps, mapDispatchToProps)(SearchPage);

render(
  <Provider store={store}>
    <ReduxSearchPage />
  </Provider>,
  document.getElementById('app')
);
