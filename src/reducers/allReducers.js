import { combineReducers } from 'redux';
import earthquakes from './featuresReducer';

const rootReducer = combineReducers({
  earthquakes
});

export default rootReducer;
