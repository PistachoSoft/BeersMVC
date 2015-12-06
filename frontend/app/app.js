import React from 'react';
import ReactDOM from 'react-dom';
import history from './history';
import { Router, Route, IndexRoute } from 'react-router';
import { Navbar } from './components';
import { BeerBrowser, AddBeer, ViewBeer } from './views';
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

ReactDOM.render((
  <Router history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={BeerBrowser} />
      <Route path="add" component={AddBeer} />
      <Route path="view/:id" component={ViewBeer} />
    </Route>
  </Router>
), document.getElementById('beers-mvc'));
