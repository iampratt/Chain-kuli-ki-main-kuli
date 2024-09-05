import React from "react";
import "./NavBar.css";

function NavBar({ onSignupClick }) {
  return (
    <>
      <div class="navigation">
        <div class="navigation_content">
          <p id="logo">Logo</p>
          <button id="login_button" onClick={onSignupClick}>
            Login/SignUp
          </button>
        </div>
      </div>
    </>
  );
}

export default NavBar;
