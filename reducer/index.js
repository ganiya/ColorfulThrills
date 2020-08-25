import { combineReducers } from 'redux';


const INITIAL_STATE = { isLoggedIn: false }
function libraries(state = INITIAL_STATE, action){
   switch (action.type) { 

     default:
      return state
   }
 }

const reducers  = combineReducers({
    libraries,
    //otherFunctions...
});

export default reducers;