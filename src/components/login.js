import React from "react";
import "./login.css";

function login() {
  return (
    <div className="subscribe">
      <div className="subscribeContainer">
        <div className="title">Subscribe to Our Newsletter</div>
        <hr className="break"/>

        <div className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </div>

        <form className="form">
          <input type="text" placeholder="Enter your email" />
          <button>SUBSCRIBE</button>
        </form>
      </div>
    </div>
  );
}

export default login;
