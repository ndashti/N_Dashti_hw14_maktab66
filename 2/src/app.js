import './style.scss';
import React from 'react';
import ReactDom from 'react-dom';

import ColorGenerator from './components/colorgenerator/ColorGenerator';
class App extends React.Component {

  render() {
    return (
      <div className="app">
        <ColorGenerator />
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));