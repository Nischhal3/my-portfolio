/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import './aboutMe.css';

const AboutMe = () => {
  return (
    <div id="about">
      <h2 className="about-header">About Me</h2>
      <div className="about-me">
        <div className="mine">
          <p>
            Hello! My name is Nischhal. I love coding and creating things that
            live on the internet. My interest in coding started back in 2020
            when I was laid off from my work. Currently studying in Metropolia
            University as an Engineering student in IT field. I am learning from
            University as well as I am teaching myself various coding languages.
          </p>
          <p style={{ marginTop: '10px' }}>
            Here are few techonologies that I am familiar with:{' '}
          </p>
          <div className="list-div">
            <ul className="my-list">
              <li>React</li>
              <li>Java Script</li>
              <li>React Native</li>
              <li>Type Script</li>
              <li>HTML & CSS </li>
            </ul>
            <ul className="my-list" style={{ marginLeft: '15px' }}>
              <li>Node.js</li>
              <li>Kotlin</li>
              <li>Java</li>
              <li>MySql</li>
              <li>Git</li>
            </ul>
          </div>
        </div>
        <div className="image-box">
          <div className="my-image"></div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
