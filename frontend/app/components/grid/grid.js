import React from 'react';
import style from './grid.scss';

export default class Grid extends React.Component {
  render() {
    return (
      <div className="grid">
        <ul className="grid-list">
          {
            this.props.children.map((item, index) => {
              return (
                <li className="grid-list-item"
                    key={index}>
                  {item}
                </li>
              );
            })
          }
        </ul>
      </div>
    );
  }
}
