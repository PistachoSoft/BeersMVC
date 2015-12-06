import React from 'react';
import style from './beer-view.scss';

export default class BeerView extends React.Component {
  onClick() {
    console.log('Transition to', `/view/${this.props.data.id}`);
  }

  render() {
    return (
      <div className="beer-view"
          onClick={this.onClick.bind(this)}>
        <img src=""/>
        {this.props.data.name}
      </div>
    );
  }
}
