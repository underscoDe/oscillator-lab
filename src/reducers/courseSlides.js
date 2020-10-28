import {
    NEXT_SLIDE,
    PREVIOUS_SLIDE
} from '../types';

const initialState = 1;
const slideCount = 7;

export default (state = initialState, action) => {
    if(action.type === NEXT_SLIDE) {
        return (state < slideCount) ? state + 1 : state;
    }else if(action.type === PREVIOUS_SLIDE) {
        return (state > 1) ? state - 1 : state;
    }
    return state;
};