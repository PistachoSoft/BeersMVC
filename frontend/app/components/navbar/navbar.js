import React from 'react';
import Logo from '../logo';
import AddButton from '../add-button';
import style from './navbar.scss';

export default class Navbar extends React.Component {
  render() {
    return (
      <header className="navbar">
        <Logo />
        <AddButton />
      </header>
    );
  }
}
