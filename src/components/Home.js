import React from 'react';
import './home.css';
import Typewriter from 'typewriter-effect';
import { AiFillInstagram } from 'react-icons/ai';
import { RiLinkedinFill } from 'react-icons/ri';
import { VscGithub } from 'react-icons/vsc';
import { BsFacebook } from 'react-icons/bs';
import CV from '../assets/CV.pdf';

const Home = () => {
  return (
    <div id="home">
      <div className="intro">
        <p className="title">Hi, my name is</p>
        <p className="name">Nischhal Shrestha</p>
      </div>
      <div className="typing">
        <Typewriter
          options={{
            autoStart: true,
            strings:
              'I build things for Web & Mobile :) <br> Currently looking for Job/Internship <br> as Web/Android Developer.',
            loop: true,
          }}
        />
      </div>
      <div className="desc">
        <p className="status">
          I am currently studying in Metropolia University of Applied
        </p>
        <p className="status">
          Sciences as a second year student, specialized in Web and
        </p>
        <p className="status">Mobile development.</p>

        <p className="status"> </p>
      </div>
      <div className="contacts">
        <a
          className="contact-link"
          href="https://github.com/Nischhal3"
          target="_blank"
          rel="noreferrer"
        >
          <VscGithub size={27} className="icons" />
        </a>
        <a
          className="contact-link"
          href="https://www.linkedin.com/in/nischhal-shrestha-0616355b/?msgControlName=reply_to_sender&msgConversationId=2-OWU3MDlhODItNWU5Ny00YTRiLWFjNDAtZjFjMzlhNDQxOGQ3XzAxMA%3D%3D&msgOverlay=true"
          target="_blank"
          rel="noreferrer"
        >
          <RiLinkedinFill size={25} className="icons" />
        </a>
        <a
          className="contact-link"
          href="https://www.facebook.com/nischhas/"
          target="_blank"
          rel="noreferrer"
        >
          <BsFacebook size={25} className="icons" />
        </a>
        <a
          className="contact-link"
          href="https://www.instagram.com/nischhal_s/"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillInstagram
            size={27}
            className="icons"
            target="_blank"
            rel="noreferrer"
          />
        </a>
      </div>
      <a href={CV} download={false} target="_blank" rel="noreferrer">
        <button className="cv">
          <span className="blink">View Resume</span>
        </button>
      </a>
    </div>
  );
};

export default Home;
