import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StartMenu = () => (
  <div className='containerBg'>
    <div className='menu__buttons'>
      <ul>
        <li className='learn__item'>
          <FontAwesomeIcon icon='book' size='3x' className='liFa' />
          <span className='cours__text'>Cours</span>
        </li>
        <li className='quiz__item'>
          <FontAwesomeIcon icon='brain' size='3x' className='liFa' />
          <span className='quiz__text'>Quiz</span>
        </li>
      </ul>
    </div>
  </div>
);

export default StartMenu;
