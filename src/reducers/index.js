import { combineReducers } from 'redux';
import layoutReducer from './layout';
import appInstanceReducer from './appInstance';
import contextReducer from './context';
import userReducer from './users';
import labSectionReducer from './labSection';
import penduleElastiqueReducer from './penduleElastique';
import courseSlidesReducer from './courseSlides';

export default combineReducers({
  layout: layoutReducer,
  appInstance: appInstanceReducer,
  context: contextReducer,
  user: userReducer,
  labSection: labSectionReducer,
  penduleElastiqueAnswers: penduleElastiqueReducer,
  courseSlides: courseSlidesReducer
});
