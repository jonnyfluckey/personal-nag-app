import {createStore, combineReducers} from 'redux';
import reactDeviseReducers from 'react-devise/lib/reducers';

const store = createStore(
  combineReducers({
    ...reactDeviseReducers
  })
);


export default store