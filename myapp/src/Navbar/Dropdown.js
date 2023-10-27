import React, { useState } from "react";
import "./Dropdown.css";
import { Link } from "react-router-dom";
import { DropdownItems } from "./Navitems";

function Dropdown() {
  const [dropdown, setDropdown] = useState(false);

  return (
    <>
      <ul
        className={`submenu ${dropdown ? "clicked" : ""}`}
        onClick={() => setDropdown(!dropdown)}
      >
        {DropdownItems.map((item) => {
          return (
            <li key={item.title}>
              <Link
                to={item.path}
                className={item.cName}
                onClick={() => setDropdown(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdown;
