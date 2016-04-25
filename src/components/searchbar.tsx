import * as React from 'react';

class SearchBarProps {
  query : string;
  setQuery : Function;
}

export default class SearchBar extends React.Component<SearchBarProps, any> {
  onQueryChange(evt : React.SyntheticEvent) {
    if ('key' in evt && evt['key'] !== 'Enter') {
      return;
    }
    evt.preventDefault();
    const newQuery = this.refs['queryField']['value'];
    console.log(newQuery);
    this.props.setQuery(newQuery)
  }
  
  render() {
    return (
      <div>
        <input
            //value={this.props.query}
            type="text"
            class="search__query"
            onKeyPress={this.onQueryChange.bind(this)}
            ref="queryField"
        />
        <button onClick={this.onQueryChange.bind(this)}>Search</button>
      </div>
    );
  }
}