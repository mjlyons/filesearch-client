import * as React from 'react';
import SearchBar from 'src/components/searchbar'
import SearchResults from 'src/components/searchresults'

class SearchPageProps {
  query : string;
  results: Object;
  setQuery : Function;
}

export default class SearchPage extends React.Component<SearchPageProps, any> {
  render() {
    return (
      <div>
        <SearchBar query={this.props.query} setQuery={this.props.setQuery} />
        <SearchResults results={this.props.results} />
      </div>
    )
  }
}

