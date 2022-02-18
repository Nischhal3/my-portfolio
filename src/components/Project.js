import React from 'react';
import './project.css';
import project01 from '../assets/project-01.png';
import todo from '../assets/todo.jpeg';
import node from '../assets/node.png';
import cart from '../assets/cart.png';
import { VscGithub } from 'react-icons/vsc';

const Project = () => {
  return (
    <div id="project">
      <h2 className="project-header">Projects</h2>
      <div className="project-01">
        <div className="shop-image">
          <a
            href="https://react-my-shopping-list.herokuapp.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img className="shopping" src={project01} alt="project01" />
          </a>
        </div>
        <div className="title-01">
          <div className="header-01">
            <h3>01. Shopping website </h3>
            <a
              href="https://github.com/Nischhal3/shopping-list"
              target="_blank"
              rel="noreferrer"
            >
              <VscGithub size={27} className="icons" />
            </a>
          </div>
          <div className="desc-01">
            <p>
              A sample of shopping website created with React. It has front-end
              features and is reponsive to different screen size.
            </p>
          </div>
        </div>
      </div>
      <div className="project-02">
        <div className="title-02">
          <div className="header-02">
            <h3>02. Todo-App </h3>
            <a
              href="https://github.com/Nischhal3/TODO-React-Native-app"
              target="_blank"
              rel="noreferrer"
            >
              <VscGithub size={27} className="icons" />
            </a>
          </div>
          <div className="desc-02">
            <p>
              A smiple app React-Native which helps to keep track of the things
              user is going to do or is done. User can add things as a reminder
              in the form of list. App has three functionality
            </p>
            <li>Show All: Displays everything in the list</li>
            <li>Show done : Displays unmarked things in the list</li>
            <li>Show Undone: Displays marked in the list</li>
          </div>
        </div>
        <div className="todo">
          <a
            href="https://snack.expo.dev/@nischhal3/todo-app"
            target="_blank"
            rel="noreferrer"
          >
            <img className="todo-image" src={todo} alt="project01" />
          </a>
        </div>
      </div>
      <div className="project-03">
        <div className="node-image">
          <img className="node-artive" src={node} alt="project03" />
        </div>
        <div className="title-03">
          <div className="header-03">
            <h3>03. Node-Artive website </h3>
            <a
              href="https://github.com/Nischhal3/NodeArtive"
              target="_blank"
              rel="noreferrer"
            >
              <VscGithub size={27} className="icons" />
            </a>
          </div>
          <div className="desc-03">
            <p>
              Art website built by me with my class mates as school project.
            </p>
            <p>Tools used:</p>
            <li>Front-end: HTML and CSS</li>
            <li>Javascript</li>
            <li>Backend: Node.js</li>
            <li>Database: MariaDB</li>
            <p>
              Preview is not available for this project as it was done in
              Metropolia server.
            </p>
          </div>
        </div>
      </div>
      <div className="project-04">
        <div className="title-04">
          <div className="header-04">
            <h3>04. Cart Price Calculator </h3>
            <a
              href="https://github.com/Nischhal3/cart-price-calculator"
              target="_blank"
              rel="noreferrer"
            >
              <VscGithub size={27} className="icons" />
            </a>
          </div>
          <div className="desc-04">
            <p>
              When a customer is ready with their shopping cart, Calculator
              shows them total delivery cost. Price depends on cart value,
              number of items in the cart, time of the order, and delivery
              distance.
            </p>
            <p>Tools used:</p>
            <li>React</li>
            <li>Type Script</li>
          </div>
        </div>
        <div className="cart">
          <a
            href="https://cart-price-calculator.herokuapp.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img className="cart-image" src={cart} alt="project01" />
          </a>
        </div>
      </div>

      <h4>You can find more projects on my GitHub page.</h4>
    </div>
  );
};

export default Project;
