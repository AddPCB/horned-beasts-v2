import Form from './Form';
import '../css/Header.css';
import React from "react";
function Header({hornsFilter, setHornsFilter}) {
  return (
    <header className="Header">
      <nav>
      <h1>Horned Beasts</h1>
      <Form hornsFilter={hornsFilter} setHornsFilter={setHornsFilter} />
      </nav>
    </header>
  );
}

export default Header;
