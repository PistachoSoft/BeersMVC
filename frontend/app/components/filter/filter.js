import React from 'react';
import style from './filter.scss';

export default class Filter extends React.Component {
  onType() {
    let query = this.refs['filter-input'].value;

    this.props.onType(query);
  }

  render() {
    return (
      <div className="filter">
        <input className="filter-input"
          type="text"
          ref="filter-input"
          placeholder={this.props.placeholder}
          onKeyUp={this.onType.bind(this)}/>
      </div>
    );
  }
}
