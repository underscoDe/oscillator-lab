import { CHOICE_PAGE, COURSE_PAGE, QUIZZ_PAGE, QUIZZ_PENDULE_SIMPLE, QUIZZ_PENDULE_ELASTIQUE_EQUILIBRE, QUIZZ_PENDULE_ELASTIQUE_COMPRIMER, QUIZZ_PENDULE_ELASTIQUE_ETIRER } from '../types';

export const goToChoice = () => dispatch => {
  dispatch({
    type: CHOICE_PAGE
  });
};

export const goToCourse = () => dispatch => {
  dispatch({
    type: COURSE_PAGE
  });
};

export const goToQuizz = () => dispatch => {
  dispatch({
    type: QUIZZ_PAGE
  });
};

export const goToPenduleSimple = () => dispatch => {
  dispatch({
    type: QUIZZ_PENDULE_SIMPLE
  });
};

export const goToPenduleElastiqueEquilibre = () => dispatch => {
  dispatch({
    type: QUIZZ_PENDULE_ELASTIQUE_EQUILIBRE
  });
};

export const goToPenduleElastiqueComprimer = () => dispatch => {
  dispatch({
    type: QUIZZ_PENDULE_ELASTIQUE_COMPRIMER
  });
};

export const goToPenduleElastiqueEtirer = () => dispatch => {
  dispatch({
    type: QUIZZ_PENDULE_ELASTIQUE_ETIRER
  });
};
