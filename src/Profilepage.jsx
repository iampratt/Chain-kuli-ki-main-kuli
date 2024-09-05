import React from "react";
import "./Profilepage.css";
import ProfileIcon from "./assets/profileicon.svg";
import ProfileImage from "./assets/profileimage.png";

function Profilepage() {
  return (
    <>
      <div class="navigation_bar">
        <div class="navigation_inside">
          <p id="logo">Logo</p>
          <img src={ProfileIcon} alt="Profile Icon" />
        </div>
      </div>
      <div class="details">
        <div class="namedetails">
          <img src={ProfileImage} alt="Profile Image" />
          <p> Name</p>
        </div>
        <div class="profilelink">
          <a href="#">Link</a>
          <button>Copy</button>
        </div>
      </div>
      <div class="bottom_section">
        <div class="section_top">
          <p id="sec_head">Certificates</p>
          <p id="sec_edit">Edit</p>
        </div>
        <div class="main_section">
          <div class="card"></div>
          <div class="card"></div>
          <div class="card"></div>
        </div>
      </div>
    </>
  );
}

export default Profilepage;
