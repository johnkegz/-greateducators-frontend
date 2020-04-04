/** @format */

import React, { useState } from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import Logo from "../../../assets/img/logo.jpg";

function TopMenu() {
  return (
    <div className="row">
      <div className="col-md-1"></div>
      <div className="col-md-4 logo">
        <img src={Logo} alt="logo" />
      </div>
      <div className="col-md-6"></div>
    </div>
  );
}

function Menu() {
  return (
    <div className="">
      <nav className="navigation">
        <NavLink exact to="/">
          Home
        </NavLink>
        <NavLink exact to="/activities">
          Activities
        </NavLink>
        <NavLink exact to="/objectives">
          Objectives
        </NavLink>
        <NavLink exact to="/obituaries">
          Obituaries
        </NavLink>
        <NavLink exact to="/Gallery">
          Gallery
        </NavLink>
        <NavLink exact to="/board">
          Board
        </NavLink>
      </nav>
    </div>
  );
}

function Search({ handleSetMenu }) {
  return (
    <div>
      <div onClick={() => handleSetMenu(true)} className="backToMenu">
        <i className="fa fa-bars bars"></i>
      </div>
      <div className="searchWidgetContainer">
        <input type="text" className="form-control searchWidget" />
      </div>
    </div>
  );
}

function Header() {
  const [menu, setMenu] = useState(true);
  function handleSetMenu() {
    return setMenu(true);
  }

  return (
    <div>
      <div className="topNav">
        <TopMenu />
      </div>
      <div className="NavOuterContainer">
        <div className="container">
          <div className="row navContainer">
            <div className="name">Great educators forum</div>
            {menu ? <Menu /> : <Search handleSetMenu={handleSetMenu} />}
            <div className="search" onClick={() => setMenu(false)}>
              <i className="fa fa-search searchWord">Search</i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
