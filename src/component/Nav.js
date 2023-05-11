import React, { useState } from "react";

function Nav() {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    toggle === false ? setToggle(true) : setToggle(false);
  };
  return (
    <nav className="nav">
      <h3>CLT</h3>
      <ul className="nav-li">
        <a href="#first" onClick={() => setToggle(false)}>
          <li>About us</li>
        </a>
        <a href="#second" onClick={() => setToggle(false)}>
          <li>Objective</li>
        </a>
        <a href="#third" onClick={() => setToggle(false)}>
          <li>Curriculum</li>
        </a>
        <a href="#fourth" onClick={() => setToggle(false)}>
          <li>Certification</li>
        </a>
        <a href="#fifth" onClick={() => setToggle(false)}>
          <li>Register</li>
        </a>
      </ul>
      <h1 onClick={handleToggle}>
        <b>{!toggle ? <>&#x2630;</> : <>&times;</>}</b>
      </h1>
      {toggle && (
        <ul className="nav2-li">
          <a href="#first" onClick={() => setToggle(false)}>
            <li>About Us</li>
          </a>
          <a href="#second" onClick={() => setToggle(false)}>
            <li>Objective</li>
          </a>
          <a href="#third" onClick={() => setToggle(false)}>
            <li>Curriculum</li>
          </a>
          <a href="#fourth" onClick={() => setToggle(false)}>
            <li>Certification</li>
          </a>
          <a href="#fifth" onClick={() => setToggle(false)}>
            <li>Register</li>
          </a>
        </ul>
      )}
    </nav>
  );
}

export default Nav;
