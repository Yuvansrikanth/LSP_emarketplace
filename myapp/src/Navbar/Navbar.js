import React, { useState, useRef } from 'react';
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import eagle from './sample.svg';
import Button from './Button';
import Dropdown from './Dropdown';
import { navItems } from './Navitems';
import "./Navbarstyles.css";

function Navbar() {
  const [isHovered, setIsHovered] = useState(false);
  const dropdownRef = useRef(null);

  const handleMouseEnterLink = () => {
    setIsHovered(true);
  };

  const handleMouseLeaveLink = () => {
    setIsHovered(false);
  };

  const handleMouseEnterDropdown = () => {
    setIsHovered(true);
  };

  const handleMouseLeaveDropdown = () => {
    setIsHovered(false);
  };

  return (
    <>
      <nav>
        <h1><img src={eagle} alt="Legal Eagle" className='logo' /></h1>
        <ul className="nav-items">
          {navItems.map((item) => {
            if (item.title === "Browse Lawyers") {
              return (
                <li
                  key={item.id}
                  className={item.cName}
                  onMouseEnter={handleMouseEnterLink}
                  onMouseLeave={handleMouseLeaveLink}
                >
                  <NavLink className="navit" to={item.path}>
                    {item.title}
                  </NavLink>
                  {isHovered && <Dropdown className="drop" setDropdown={setIsHovered} onMouseEnter={handleMouseEnterDropdown} onMouseLeave={handleMouseLeaveDropdown} ref={dropdownRef} />}
                </li>
              );
            }
            return (
              <li key={item.id} className={item.cName}>
                <NavLink className="navit" to={item.path}>{item.title}</NavLink>
              </li>
            );
          })}
        </ul>
        <ul id="logins">
          <li>
            <Link to="/lawyerapp">
              <Button name="Lawyer Login" />
            </Link>
          </li>
          <li>
            <Link to="/clientapp">
              <Button name="Client Login" />
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
