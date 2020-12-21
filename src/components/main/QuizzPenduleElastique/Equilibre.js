import React, { Component } from 'react';
import _ from 'lodash';
import swal from '@sweetalert/with-react';
import htmlParse from 'html-react-parser';
import OrientationContent from '../OrientationModal';
import { Button, Checkbox } from '@material-ui/core';
import EquilibreSansForces from '../../../resources/EquilibreSansForces.svg';
import EquilibreAvecForces from '../../../resources/EquilibreAvecForces.svg';
import { goToQuizz, goToPenduleElastiqueComprimer, goToChoice } from '../../../actions';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../styles/QuizzPenduleElastique.scss';

let isArrayEqual = function(x, y) {
  // Helper function to deeply compare two array of objects
  return _(x)
    .differenceWith(y, _.isEqual)
    .isEmpty();
};

class QuizzPenduleElastique extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quizzPassed: false,
      questions: [
        {
          choice: 1,
          question: 'Force électrostatique <b>Fe</b>',
          checked: false,
          orientation: null
        },
        {
          choice: 2,
          question: 'Force électromagnétique <b>Fm</b>',
          checked: false,
          orientation: null
        },
        {
          choice: 3,
          question: 'Poids <b>P</b>',
          checked: false,
          orientation: null
        },
        {
          choice: 4,
          question: 'Tension <b>N</b> du ressort',
          checked: false,
          orientation: null
        },
        {
          choice: 5,
          question: 'Tension <b>T</b> du ressort',
          checked: false,
          orientation: null
        },
        {
          choice: 6,
          question: 'Réaction <b>R</b> du support',
          checked: false,
          orientation: null
        }
      ]
    };
  }

  checkAnswerBox = index => {
    // This method will set the answer on the first level (forces level)
    this.setState(prevState => {
      const questions = prevState.questions;
      questions[index] = {
        ...questions[index],
        checked: !questions[index].checked
      };
      return { questions };
    }, this.chooseOrientation(index));
  };

  checkRadioBox = (index, orientation) => {
    // This method will set the answer on the second level (orientations level)
    this.setState(prevState => {
      const questions = prevState.questions;
      questions[index] = {
        ...questions[index],
        orientation: orientation
      };
      return { questions };
    });
  };


  chooseOrientation = (index, forModification = null) => {
    // This method fires the orientation choose modal
    const { questions } = this.state;
    if (!questions[index].checked || (questions[index].checked && forModification)) {
      // In case the force is checked, the modal is opened to choose an orientation
      swal({
        text: "Choisir l'orientation de la force",
        buttons: {
          cancel: 'Fermer'
        },
        content: (
          <OrientationContent
            questionIndex={index}
            currentOrientation={questions[index].orientation}
            setOrientation={(index, value) => this.checkRadioBox(index, value)}
          />
        )
      });
    } else {
      // If the force is unchecked, the previously set orientation is unset
      this.setState(prevState => {
        const questions = prevState.questions;
        questions[index] = {
          ...questions[index],
          orientation: null
        };
        return { questions };
      });
    }
  };

  validateAnswers = () => {
    // This methode will validate the final answers choosen from the quizz. The forces and their orientation
    const { answers } = this.props;
    const { questions } = this.state;
    if (isArrayEqual(answers, questions)) {
      this.setState({ quizzPassed: true });
      swal('BRAVO', 'Vous avez reussi le quiz', 'success');
    } else {
      this.setState({ quizzPassed: false })
      swal('DESOLE', 'Vos reponses sont incorrectes', 'error');
    }
  };

  render() {
    const { goToQuizzPage, goToNextQuizzPage, goToChoice } = this.props;
    const { questions, quizzPassed } = this.state;
    return (
      <>
        <div className='penduleElastiqueRoot'>
          <h3>Quizz sur le Pendule Elastique (En équilibre)</h3>
          <div className='animationSVG'>
            {/*<img src={EquilibreSansForces} alt="Systeme à l'équilibre" />*/}
            {!quizzPassed ? <img src={EquilibreSansForces} alt="Systeme à l'équilibre sans force" />
              : <img src={EquilibreAvecForces} alt="Systeme à l'équilibre avec forces" />}
          </div>
          <p>
            Choisissez les forces s'appliquant au solide et leurs orientations
          </p>
          <ul className='forceChoose'>
            {questions.map((question, index) => (
              <p key={index} className='groupChoice'>
                <Checkbox
                  checked={question.checked}
                  onChange={() => this.checkAnswerBox(index)}
                  color='primary'
                  inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
                <li>{htmlParse(question.question)}</li>
                {question.orientation && (<span onClick={()=>this.chooseOrientation(index, true)} className="orientationChoosed">(Oriente vers: {question.orientation})</span>)}
                {(question.checked && !question.orientation) && (<span onClick={()=>this.chooseOrientation(index, true)} className="orientationChoosed">(Aucune orientation choisie)</span>)}
              </p>
            ))}
            <Button
              onClick={this.validateAnswers}
              color='primary'
              variant='contained'>
              Verifier vos reponses
            </Button>
            {quizzPassed && (<Button
              onClick={() => goToNextQuizzPage()}
              style={{marginLeft: '1rem'}}
              color='default'
              variant='contained'>
              Quizz Suivant
            </Button>)}
          </ul>
        </div>
        <div className='menu__buttons_quiz'>
          <ul>
            <li onClick={() => goToChoice()} className='learn__item'>
              <FontAwesomeIcon icon='home' size='3x' className='liFa' />
              <span className='cours__text'>Menu</span>
            </li>
            <li onClick={() => goToQuizzPage()} className='quiz__item'>
              <FontAwesomeIcon icon='brain' size='3x' className='liFa' />
              <span className='quiz__text'>Quiz</span>
            </li>
          </ul>
        </div>
      </>
    );
  }
}

const mapDispatchToProps = {
  goToQuizzPage: goToQuizz,
  goToNextQuizzPage: goToPenduleElastiqueComprimer,
  goToChoice
};

const mapStateToProps = state => ({
  answers: state.penduleElastiqueAnswers.equilibre
});

const connectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(QuizzPenduleElastique);

export default connectedComponent;
