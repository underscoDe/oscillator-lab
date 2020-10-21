import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { goToCourse, goToQuizz } from '../../actions';
import '../styles/StartMenu.css';

class StartMenu extends Component {
  render() {
    const { goToCourse, goToQuizz } = this.props;

    return (
      <div className='menu__buttons'>
        <ul>
          <li onClick={() => goToCourse()} className='learn__item'>
            <FontAwesomeIcon icon='book' size='3x' className='liFa' />
            <span className='cours__text'>Cours</span>
          </li>
          <li onClick={() => goToQuizz()} className='quiz__item'>
            <FontAwesomeIcon icon='brain' size='3x' className='liFa' />
            <span className='quiz__text'>Quiz</span>
          </li>
        </ul>
      </div>
    );
  }
}

const mapDispatchToProps = {
  goToCourse,
  goToQuizz
};

const connectedComponent = connect(null, mapDispatchToProps)(StartMenu);
export default connectedComponent;
