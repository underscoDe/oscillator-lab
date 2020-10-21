import { CHOICE_PAGE, COURSE_PAGE, QUIZZ_PAGE } from '../types';

const initialState = 'choicePage';

export default (state = initialState, action) => {
  switch (action.type) {
    case CHOICE_PAGE:
      return 'choicePage';
    case COURSE_PAGE:
      return 'coursePage';
    case QUIZZ_PAGE:
      return 'quizzPage';
    default:
      return state;
  }
};
