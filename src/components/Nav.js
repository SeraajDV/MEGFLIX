import React, { useState, useEffect } from "react";
import logo from "../assets/Logo.png";
import user from "../assets/user.png";
import '../css/Nav.css';

function Nav() {
    const [show, handleShow] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else {
                handleShow(false);
            }
        });
        return () => {
            window.removeEventListener("scroll");
        }
    }, [])
  
    return (
    <div className={`nav ${show && "nav__black"}`}>
      <img className="nav__logo" src={logo} alt="Megflix Logo" />

      <img className="nav__avatar" src={user} alt="User" />
    </div>
  );
}

export default Nav;
