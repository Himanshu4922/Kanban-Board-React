import React, { useState } from 'react';
import DropdownMenu from "./DropdownMenu";
import "./Header.css";

export default function Header({ filter, changeFilter }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="box-shadow header-main">
      <div className="header-nav">
        <div className="displaybx box-shadow" onClick={() => setOpen(!open)}>
          <span className="icon-filter-alt"></span>
          <p style={{ margin: "0 5px" }}>Display</p>
            <span className="icon-chevron-down"></span>
        
        </div>

        {open && <DropdownMenu filter={filter} changeFilter={changeFilter} />}
      </div>
    </nav>
  );
}
