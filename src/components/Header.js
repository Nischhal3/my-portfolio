import React from 'react';
import './header.css';
import logo from '../assets/logo.png';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <div className="header" id="header">
      <div className="logo-div">
        <img className="logo" src={logo} alt="cat" />
      </div>
      <ul className="navigation">
        <li className="nav-list">
          <Link
            to="header"
            smooth={true}
            hashSpy={true}
            offset={-150}
            duration={500}
            isDynamic={true}
            ignoreCancelEvents={false}
            spyThrottle={500}
          >
            Home
          </Link>
        </li>
        <li className="nav-list">
          <Link
            to="about"
            smooth={true}
            hashSpy={true}
            offset={-150}
            duration={500}
            isDynamic={true}
            ignoreCancelEvents={false}
            spyThrottle={500}
          >
            About
          </Link>
        </li>
        <li className="nav-list">
          <Link
            to="project"
            smooth={true}
            hashSpy={true}
            offset={-150}
            duration={500}
            isDynamic={true}
            ignoreCancelEvents={false}
            spyThrottle={500}
          >
            Project
          </Link>
        </li>
        <li className="nav-list">
          <Link
            to="contact"
            smooth={true}
            hashSpy={true}
            offset={-150}
            duration={500}
            isDynamic={true}
            ignoreCancelEvents={false}
            spyThrottle={500}
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
