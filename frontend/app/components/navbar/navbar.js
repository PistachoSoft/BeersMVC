import React from 'react';
import NavbarLogo from '../navbar-logo/navbar-logo.js';
import NavbarMenu from '../navbar-menu/navbar-menu.js';
import style from './navbar.scss';

export default class Navbar extends React.Component {
  render() {
    return (
      <header className="navbar">
        <NavbarLogo />
        <NavbarMenu />
      </header>
    );
  }
}
