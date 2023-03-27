import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import headerLogo from '../images/header-logo.svg';

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={headerLogo} alt="Логотип Место" />
      <nav className="navigation">
      <Routes>
        <Route path="/sign-up" element={
          <Link to="/sign-in" className="navigation__link">Войти</Link>} />
        <Route path="/sign-in" element={
          <Link to="/sign-up" className="navigation__link">Регистрация</Link>} />
        <Route path="/" element={
          <Link to="/sign-in" className="navigation__link">Выйти</Link>} />
      </Routes>
      </nav>
    </header>
  );
}
   
export default Header;