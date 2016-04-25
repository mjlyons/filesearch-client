import * as React from 'react';
import FileMatch from 'src/components/filematch';

class FileResultsProps {
  filename: string;
  matches: Array<Object>;
}

export default class FileResults extends React.Component<FileResultsProps, any> {
  
  _renderMatchResults() {
    const renderedMatches = [];
    for (const match of this.props.matches) {
      renderedMatches.push(
        <FileMatch key={renderedMatches.length} match={match} />
      );
    }
    return renderedMatches;
  }
  
  render() {
    return (
      <div>
        <div style={{marginTop: "15px", fontWeight: 'bold'}}>{this.props.filename}</div>
        {this._renderMatchResults()}
      </div>
    );
  }
}