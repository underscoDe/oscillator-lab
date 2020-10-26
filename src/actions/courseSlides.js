import { 
    NEXT_SLIDE,
    PREVIOUS_SLIDE
} from '../types';

export const showNextSlide = () => dispatch => {
  dispatch({
    type: NEXT_SLIDE
  });
};

export const showPreviousSlide = () => dispatch => {
  dispatch({
    type: PREVIOUS_SLIDE
  });
};
