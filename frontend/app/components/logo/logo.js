import React from 'react';
import {Link} from 'react-router';
import style from './logo.scss';

export default class Logo extends React.Component {
  render() {
    return (
      <Link className="logo button"
          to="/">
        Beer Collection
      </Link>
    );
  }
}
