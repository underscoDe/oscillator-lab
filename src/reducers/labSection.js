import {
  CHOICE_PAGE,
  COURSE_PAGE,
  QUIZZ_PAGE,
  QUIZZ_PENDULE_SIMPLE,
  QUIZZ_PENDULE_ELASTIQUE
} from '../types';

const initialState = 'choicePage';

export default (state = initialState, action) => {
  switch (action.type) {
    case CHOICE_PAGE:
      return 'choicePage';
    case COURSE_PAGE:
      return 'coursePage';
    case QUIZZ_PAGE:
      return 'quizzPage';
    case QUIZZ_PENDULE_SIMPLE:
      return 'quizzPenduleSimple';
    case QUIZZ_PENDULE_ELASTIQUE:
      return 'quizzPenduleElastique';
    default:
      return state;
  }
};
