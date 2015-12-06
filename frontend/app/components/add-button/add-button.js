import React from 'react';
import {Link} from 'react-router';
import style from './add-button.scss';

export default class AddButton extends React.Component {
  render() {
    return (
      <Link className="button add-button"
          activeClassName="active"
          to="/add">
        <i className="fa fa-plus"></i>
        <i className="fa fa-beer"></i>
      </Link>
    );
  }
}
