export function countReducer(state= {count:0},action){

     switch (action.type) {
    case "INCREMENT":
      return { ...state,count: state.count + 1 };
    default:
      return state;
  }
};
export const increment = () => {
  return {
    type: 'INCREMENT'
  };
};
