import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';

const UL = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    font-size: 20px;
    color: #fc814a;
    margin: 10px 20px 20px 10px;
  }

  .nav-list:hover {
    cursor: pointer;
    color: #64ffda;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 60px;
    padding-top: 40px;
    padding-right: 40px;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
    transition: transform 0.3 ease-in-out;
  }
`;

const NavBar = ({ open }) => {
  return (
    <UL open={open}>
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
    </UL>
  );
};

export default NavBar;
