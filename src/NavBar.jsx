import React from "react";
import "./NavBar.css";

function NavBar({ onLoginClick }) {
  return (
    <>
      <div class="navigation">
        <div class="navigation_content">
          <p id="logo">Logo</p>
          <button id="login_button" onClick={onLoginClick}>
            Login/SignUp
          </button>
        </div>
      </div>
    </>
  );
}

export default NavBar;
