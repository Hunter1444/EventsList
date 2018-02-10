import {combineReducers} from "redux";
import events from './events';
import currentFilter from './currentFilter';
import currentSort from './currentSort';

export default combineReducers({events, currentFilter, currentSort})
