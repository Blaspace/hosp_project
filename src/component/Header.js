import React from "react";
import img from "../public/image-1.jpg";

function Header() {
  return (
    <header className="header">
      <img src={img} alt="header-img" />
      <div>
        <h1>Caregiver learning institute.</h1>
        <p>
          Get training and Certification through our comprehensive training
          program for individuals seeking to become professional Caregiver.
        </p>
        <a href="#fifth">
          <button>Register now</button>
        </a>
      </div>
    </header>
  );
}

export default Header;
