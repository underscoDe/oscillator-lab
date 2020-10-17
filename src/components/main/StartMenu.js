import React from 'react';
import '../styles/StartMenu.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const StartMenu = () => (
  <div className="container">
    <div className="menu__buttons">
      <ul>
        <li className="learn__item">
          <FontAwesomeIcon icon="book" size="3x" />
          <span className="cours__text">Cours</span>
        </li>
        <li className="quiz__item">
          <FontAwesomeIcon icon="brain" size="3x" />
          <span className="quiz__text">Quiz</span>
        </li>
      </ul>
    </div>
  </div>
);

export default StartMenu;
