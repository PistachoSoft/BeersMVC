import React from 'react';
import style from './spinner.scss';
import spinner from './spinner.gif';

export default class Spinner extends React.Component {
  render() {
    return (
      <div className="spinner-outer">
        <img className="spinner" src={spinner} alt="Loading..." />
      </div>
    );
  }
}
