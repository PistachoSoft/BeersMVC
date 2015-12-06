import React from 'react';

export default class ViewBeer extends React.Component {
  render() {
    return (
      <div>
        View beer {this.props.params.id}.
      </div>
    );
  }
}
