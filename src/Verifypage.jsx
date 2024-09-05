import React from "react";
import NavBar from "./NavBar";
import "./Verifypage.css";
import SignupPage from "./SignupPage";
import { useState } from "react";

function Verifypage() {
  const [isSignupVisible, setIsSignupVisible] = useState(false);
  const handleLoginClick = () => {
    setIsSignupVisible(!isSignupVisible);
  };
  return (
    <>
      <NavBar onLoginClick={handleLoginClick} />
      {isSignupVisible && <SignupPage />}

      <div class="verify_container">
        <button class="verify_button">VERIFY</button>
      </div>
    </>
  );
}

export default Verifypage;
