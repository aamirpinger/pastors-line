import { combineReducers } from 'redux';

import contactsReducer from './contacts';
import loading from './loading';

const rootReducer = combineReducers({
  loading,
  contacts: contactsReducer,
});

export default rootReducer;
