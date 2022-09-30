import { loadState } from './localStorage';

const persistedState = loadState();

let initialState = {
    firstName: 'firstname',
    lastName: 'lastname',
};

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
    if (action.type === "UPDATE_NAME") {
      return {
        ...state,
        firstName: state.firstName = action.firstName,
        lastName: state.lastName = action.lastName
      };
    }
    if (action.type === "USER_ERROR") {
        return {
            ...state = action
        };
      }
    return state
}