import * as Redux from 'redux';
import thunk from 'redux-thunk';

import {notesReducer} from './reducers/';

export default () => {
  var reducer = Redux.combineReducers({
    notes: notesReducer
  });
  var store = Redux.createStore(reducer, {
    notes: [{
      id: 12,
      createdAt: 12343234234,
      text: 'Sample text here'
    }]
  }, Redux.compose(
    Redux.applyMiddleware(thunk)
  ));

  return store;
}
