import React from 'react';
import { goToPenduleSimple, goToPenduleElastiqueEquilibre, goToChoice } from '../../actions';
import { connect } from 'react-redux';
import { Button } from "@material-ui/core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/QuizzPage.scss';

const QuizzPage = ({ goToPenduleSimplePage, goToPenduleElastiquePage, goToChoicePage }) => {

  return (
    <div className="quizzPageRoot">
      <Button color="default" variant="contained" onClick={ ()=> goToChoicePage() }>Retour</Button>
      <div className='menu__buttons'>
          <ul>
            <li onClick={() => goToPenduleSimplePage()} className='learn__item'>
              <FontAwesomeIcon icon='book' size='3x' className='liFa' />
              <span className='cours__text'>Pendule Simple</span>
            </li>
            <li onClick={() => goToPenduleElastiquePage()} className='quiz__item'>
              <FontAwesomeIcon icon='brain' size='3x' className='liFa' />
              <span className='quiz__text'>Pendule Elastique</span>
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
