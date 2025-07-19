import { createStore } from "redux";

function addToproducts(state=[],action){
    switch(action.type){
        case "ADDPRODUCT":
            return [...state,action.payload]
        case "DELETEPRODUCT":
            return state.filter(product => product !== action.payload)
        default:
            return state;
    }
}

const store = createStore(addToproducts)
store.subscribe(() => {
  console.log("Updated Products:", store.getState());
});
store.dispatch({ type: "ADDPRODUCT", payload: "Football Shoes" });
store.dispatch({ type: "ADDPRODUCT", payload: "Cricket Bat" });
store.dispatch({ type: "ADDPRODUCT", payload: "Basketball" });

store.dispatch({ type: "DELETEPRODUCT", payload: "Cricket Bat" });
