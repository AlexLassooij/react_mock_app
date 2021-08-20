import React from "react";
import "./Footer.css";
import { Link } from 'react-router-dom';
import logo from '../images/logo2.png';
import {animateScroll as scroll} from 'react-scroll';
// https://www.youtube.com/watch?v=g459Eia-bxw&ab_channel=Arslan
// May need bootstrap if we want to add side by side columns

function Footer() {
  return (
    <div className="main-footer">
      <div className="backtotop_button">
        <button onClick={()=>scroll.scrollToTop()}>
          Back to Top
        </button>
      </div>
      <Link to="/" className="navbar-logo">
        <img src={logo} alt="logo" width="10%" style={{margin: "0"}} />
      </Link>
      <div className="footer_container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h4 style={{color: "black"}}>National Geographic Kids</h4>
          </div>
        </div>
      </div>
      <div className="row">
        <p className="col" style={{padding:"40px 0"}}>
          Copyright © 1996-2015 National Geographic Society  |  Copyright © 2015-2021 National Geographic Partners, LLC. All rights reserved <br></br>
          </p>
        <br></br>
      </div>
    </div>
  );
}

export default Footer;