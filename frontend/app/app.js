import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/navbar';
import BeerBrowser from './components/beer-browser';
import style from './styles/main.scss';

class App extends React.Component {
  render() {
    return (
      <div id="homepage">
        <Navbar />
        <div className="container">
          <BeerBrowser />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('beers-mvc'));
