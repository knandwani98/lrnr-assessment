import React, { useState } from "react";
import "../header/header.scss";
import { Link } from "react-router-dom";
import { useContext } from "react";
import SidebarContext from "../../context/SidebarContext";

export default function Header() {
  const navArr = ["all", "board", "graph", "recent"];

  const { isMenuOpen, setIsMenuOpen, activeMenu, setActiveMenu } =
    useContext(SidebarContext);

  const toggleMenu = () => {
    return isMenuOpen ? setIsMenuOpen(false) : setIsMenuOpen(true);
  };

  return (
    <header className="top-header">
      {/* Only Header */}
      <div className="header container flex">
        {/* Left Container */}
        <div className="flex gap">
          {/* Toggle Menu */}
          <span
            onClick={toggleMenu}
            className={`ham-burger icon ${isMenuOpen && "active"}`}
          >
            <i className="fa-solid fa-bars"></i>
          </span>

          {/* Search Input */}
          <div className="search-bar">
            <label htmlFor="search-bar" className="search icon">
              <i class="fa-solid fa-magnifying-glass"></i>
            </label>
            <input
              id="search-bar"
              className="form-box"
              type="search"
              placeholder="lrnr"
              name=""
            />
          </div>
        </div>

        {/* Right Container */}
        <div className="flex gap-2">
          {/* Invite Members */}
          <Link className="invite flex">
            <span className="add-user icon">
              <i class="fa-solid fa-user-plus"></i>
            </span>
            <h2 className="heading">Invite Team Member</h2>
          </Link>

          {/* Notifications */}
          <span className="icon bell">
            <i class="fa-solid fa-bell"></i>
          </span>

          {/* View Profile */}
          <div className="profile f-center">
            {/* If No Image */}
            <span className="name">FL</span>

            {/* isOnline */}
            <span className="online-indicator"></span>

            {/* isOnline */}
            <span className="new-notification">new</span>
          </div>
        </div>
      </div>

      {/* NavBar */}
      <nav className="nav-bar container flex">
        <ul className={`menu-bar flex ${isMenuOpen ? "" : "hidden"}`}>
          {/* Dynamic Nav Menu */}
          {navArr.map((nav) => {
            return (
              <li className={nav === activeMenu && "active"}>
                <button
                  onClick={() => {
                    setActiveMenu(nav);
                  }}
                >
                  {nav}
                </button>
              </li>
            );
          })}

          <li className="no-border">
            <button className="icon">
              <i class="fa-solid fa-ellipsis-vertical"></i>
            </button>
          </li>
        </ul>
        <div></div>
        <div></div>
      </nav>
    </header>
  );
}
