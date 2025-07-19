import { createStore } from "redux";

function isLoggedIn(state=false, action){
    switch(action.type){
        case "LOGIN":
            return true;
        case "LOGOUT":
            return false;
        default:
            return state;

    }
}
const store = createStore(isLoggedIn);

const Login=() => {return {type:"LOGIN"}}
const Logout = () => {return {type:"LOGOUT"}}

store.subscribe (() =>{
    console.log("login", store.getState());
    
})
store.dispatch(Login());   
store.dispatch(Logout());