import {createStore} from 'redux';
function countReducer(state=0 , action){
    switch(action.type){
        case "INCREMENT":
            return state+1;
        case "DECREMENT":
            return state-1;
        default:
            return state;
    }
}
const store = createStore(countReducer);

store.subscribe(() => {
    console.log("Current count ",store.getState());
    
})

store.dispatch({ type: "INCREMENT" }); 
store.dispatch({ type: "INCREMENT" }); 
store.dispatch({ type: "DECREMENT" }); 
store.dispatch({ type: "INCREMENT" });