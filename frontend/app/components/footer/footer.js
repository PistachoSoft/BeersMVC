import React from 'react';
import style from './footer.scss';

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <p className="footer-text">
          BeerMVC app by <a href="http://pistacho.moe">PistachoSoft</a>
        </p>
      </footer>
    );
  }
}
