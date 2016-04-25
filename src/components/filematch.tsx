import * as React from 'react';

class FileMatchProps {
  match: Object;
}

export default class FileMatch extends React.Component<FileMatchProps, any> {
  
  _splitLines(text : string, style: Object) {
    const lineDivs = []
    const textLines = text.split('\n');
    let lineCount = 0;
    for (const line of textLines) {
      const lineWithSpacing = line.replace(" ", "\u00a0")
      lineDivs.push(<span style={style}>{lineWithSpacing}</span>);
      if (lineCount < textLines.length - 1) {
        lineDivs.push(<br/>);
      }
      lineCount++;
    }
    return lineDivs;
  }
  
  render() {
    const snippetStyle = {
      border: '1px solid black',
      fontFamily: 'monospace',
    };
    
    // Highlight match in snippet
    const snippet : string = this.props.match['Snippet'];
    const beforeMatchText = snippet['Text'].slice(0, snippet['Start']);
    const matchText = snippet['Text'].slice(snippet['Start'], snippet['End']);
    const afterMatchText = snippet['Text'].slice(snippet['End']);
    
    const beforeLineDivs = this._splitLines(beforeMatchText, {});
    const matchLineDivs = this._splitLines(matchText, {'background': 'yellow'});
    const afterLineDivs = this._splitLines(afterMatchText, {});
    
    const startPos = this.props.match['Start'];
    return (
      <div>
        <div style={{marginTop: '5px'}}>Line: {startPos['Line'] + 1}</div>
        <div style={snippetStyle}>
          {beforeLineDivs}
          {matchLineDivs}
          {afterLineDivs}
        </div>
      </div>
    );
  }
}