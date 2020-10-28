import {
  CHOICE_PAGE,
  COURSE_PAGE,
  QUIZZ_PAGE,
  QUIZZ_PENDULE_SIMPLE,
  QUIZZ_PENDULE_ELASTIQUE_EQUILIBRE,
  QUIZZ_PENDULE_ELASTIQUE_COMPRIMER,
  QUIZZ_PENDULE_ELASTIQUE_ETIRER,
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
    case QUIZZ_PENDULE_ELASTIQUE_EQUILIBRE:
      return 'quizzPenduleElastiqueEquilibre';
    case QUIZZ_PENDULE_ELASTIQUE_COMPRIMER:
      return 'quizzPenduleElastiqueComprimer';
    case QUIZZ_PENDULE_ELASTIQUE_ETIRER:
      return 'quizzPenduleElastiqueEtirer';
    default:
      return state;
  }
};
