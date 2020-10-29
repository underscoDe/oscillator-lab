import React from 'react';
import { goToPenduleSimple, goToPenduleElastiqueEquilibre, goToChoice } from '../../actions';
import { connect } from 'react-redux';
import Hook from '../../resources/Hook.svg';
import Pendulum from '../../resources/Pendulum.svg';
import Spring from '../../resources/Spring.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/QuizzPage.scss';

const QuizzPage = ({ goToPenduleSimplePage, goToPenduleElastiquePage, goToChoicePage }) => {

  return (
    <div className="quizzPageRoot">
      <div className='menu__buttons'>
          <ul>
            <li onClick={()=> goToChoicePage()} className='learn__item'>
              <FontAwesomeIcon icon='home' size='3x' className='liFa' />
              <span className='cours__text'>Menu</span>
            </li>
            <li onClick={() => goToPenduleSimplePage()} className='learn__item'>
              <img width="70px" height="70px" src={Pendulum} className="liFa liFaS" alt="" />
              <span className='cours__text spanS'>Pendule Simple</span>
            </li>
            <li onClick={() => goToPenduleElastiquePage()} className='quiz__item'>

            <img width="75px" height="75px" src={Hook} className="liFa liFaE" alt="" />
              <span className='quiz__text spanE'>Pendule Elastique</span>
            </li>
          </ul>
        </div>
    </div>
  );
}

const mapDispatchToProps = {
  goToChoicePage: goToChoice,
  goToPenduleSimplePage: goToPenduleSimple,
  goToPenduleElastiquePage: goToPenduleElastiqueEquilibre,
};

const connectedComponent = connect(null, mapDispatchToProps)(QuizzPage);

export default connectedComponent;
