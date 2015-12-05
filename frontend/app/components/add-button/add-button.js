import React from 'react';
import style from './add-button.scss';

export default class AddButton extends React.Component {
  onClick() {
    console.log('Clicked!');
  }

  render() {
    return (
      <button className="button add-button"
          onClick={this.onClick.bind(this)}>
        <i className="fa fa-plus"></i>
        <i className="fa fa-beer"></i>
      </button>
    );
  }
}
