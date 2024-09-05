import React from "react";
import NavBar from "./NavBar";
import "./Verifypage.css";
import SignupPage from "./SignupPage";
import { useState } from "react";

function Verifypage({ onLoginClick, onVerifyClick }) {
  const [isSignupVisible, setIsSignupVisible] = useState(false);
  const handleLoginClick = () => {
    setIsSignupVisible(!isSignupVisible);
  };
  return (
    <>
      <NavBar onSignupClick={handleLoginClick} />
      {isSignupVisible ? (
        <SignupPage onLoginClick={onLoginClick} />
      ) : (
        <div className="verify_container">
          <button className="verify_button" onClick={onVerifyClick}>
            VERIFY
          </button>
        </div>
      )}
    </>
  );
}

export default Verifypage;
