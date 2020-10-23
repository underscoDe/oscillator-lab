import React, { Component } from 'react';
import htmlParse from 'html-react-parser';
import { Button, Checkbox } from '@material-ui/core';
import { goToQuizz } from '../../actions';
import { connect } from 'react-redux';
import '../styles/QuizzPenduleElastique.scss';

class QuizzPenduleElastique extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [
        {
          choice: 1,
          question: 'Force électrostatique <b>Fe</b>',
          checked: false,
          options: null
        },
        {
          choice: 2,
          question: 'Force électromagnétique <b>Fm</b>',
          checked: false,
          options: null
        },
        {
          choice: 3,
          question: 'Poids <b>P</b>',
          checked: false,
          options: null
        },
        {
          choice: 4,
          question: 'Tension <b>N</b> du ressort',
          checked: false,
          options: null
        },
        {
          choice: 5,
          question: 'Tension <b>T</b> du ressort',
          checked: false,
          options: null
        },
        {
          choice: 6,
          question: 'Réaction <b>R</b> du support',
          checked: false,
          options: null
        }
      ]
    };
  }

  checkAnswer = () => {
    console.log('check');
  };

  render() {
    const { goToQuizzPage } = this.props;
    const { questions } = this.state;
    return (
      <>
        <Button
          color='default'
          variant='contained'
          onClick={() => goToQuizzPage()}>
          Retour
        </Button>
        <div className='penduleElastiqueRoot'>
          <h3>Quizz sur le Pendule Elastique</h3>
          <div className='animationSVG'>Animation will be here</div>
          <p>
            Choisissez les forces s'appliquant au solide et leurs orientations
          </p>
          <ul className='forceChoose'>
            {questions.map(question => (
              <p className='groupChoice'>
                <Checkbox
                  checked={question.checked}
                  onChange={this.checkAnswer}
                  color='primary'
                  inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
                <li>{htmlParse(question.question)}</li>
              </p>
            ))}
            <Button color='primary' variant='contained'>
              Verifier vos reponses
            </Button>
          </ul>
        </div>
      </>
    );
  }
}

const mapDispatchToProps = {
  goToQuizzPage: goToQuizz
};

const connectedComponent = connect(
  null,
  mapDispatchToProps
)(QuizzPenduleElastique);

export default connectedComponent;
