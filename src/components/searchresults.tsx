import * as React from 'react';
import FileResults from 'src/components/fileresults';

class SearchResultsProps {
  results: Object;
}

export default class SearchResults extends React.Component<SearchResultsProps, any> {
  
  _renderFileResults() {
    const renderedResults = [];
    for (const filename in this.props.results) {
      renderedResults.push(
        <FileResults
            key={filename}
            filename={filename}
            matches={this.props.results[filename]}
        />
      );
    }
    return renderedResults;
  }
  
  render() {
    return (
      <div>
        {this._renderFileResults()}
      </div>
    );
  }
}