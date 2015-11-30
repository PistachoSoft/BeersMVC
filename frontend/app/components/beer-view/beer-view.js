import React from 'react';
import style from './beer-view.scss';

export default class BeerView extends React.Component {
  render() {
    return (
      <div className="beer-view">
        <img src=""/>
        {this.props.data.name}
      </div>
    );
  }
}
