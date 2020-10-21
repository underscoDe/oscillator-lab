import { CHOICE_PAGE, COURSE_PAGE, QUIZZ_PAGE } from '../types';

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
