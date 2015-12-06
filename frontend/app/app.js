import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import Navbar from './components/navbar';
import BeerBrowser from './components/beer-browser';
import style from './styles/main.scss';

class App extends React.Component {
  render() {
    return (
      <div id="homepage">
        <Navbar />
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

class AddBeer extends React.Component {
  render() {
    return (
      <div className="add-beers">
        Add Beers.
      </div>
    );
  }
}

class ViewBeer extends React.Component {
  render() {
    return (
      <div>
        View beer {this.props.params.id}.
      </div>
    );
  }
}

ReactDOM.render((
  <Router>
    <Route path="/" component={App}>
      <IndexRoute component={BeerBrowser} />
      <Route path="add" component={AddBeer} />
      <Route path="view/:id" component={ViewBeer} />
    </Route>
  </Router>
), document.getElementById('beers-mvc'));
