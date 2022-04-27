import { loadState } from './localStorage';

const persistedState = loadState();

console.log(persistedState, "test")

let initialState;

if (persistedState) {
    initialState = {
        firstName: persistedState.firstName,
        lastName: persistedState.lastName
    };
}else {
    initialState = {
        firstName: "firstName",
        lastName: "lastName"
    };
}

export const reducer = (state = initialState, action) => {
    console.log("reducer", action)
    if (action.type === "UPDATE_NAME") {
      return {
        ...state,
        firstName: state.firstName = action.firstName,
        lastName: state.lastName = action.lastName
      };
    }
    return state
}