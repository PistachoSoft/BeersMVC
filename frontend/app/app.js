import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/navbar/navbar.js';
import Footer from './components/footer/footer.js';
import BeerBrowser from './components/beer-browser/beer-browser.js';
import style from './styles/main.scss';

class App extends React.Component {
  render() {
    return (
      <div id="homepage">
        <Navbar />
        <BeerBrowser />
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('beers-mvc'));
