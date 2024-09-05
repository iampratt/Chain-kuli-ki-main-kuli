import React from "react";
import "./SignupPage.css";

export default function SignupPage({ onLoginClick }) {
  return (
    <>
      <div class="signup_form">
        <div class="form_contents">
          <form>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" />

            <label for="password">Password:</label>
            <input type="password" id="password" name="password" />
            <button class="login_button" onClick={onLoginClick}>
              LOGIN
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
