import { saveState } from './localStorage';
import { store } from './index'

export const userData = (firstName, lastName) => {
    store.dispatch({type: 'UPDATE_NAME', firstName: firstName, lastName: lastName})
    saveState({
        firstName: store.getState().firstName,
        lastName: store.getState().lastName,
    });
}

export const userError = (message) => {
    store.dispatch({type: 'USER_ERROR', error: message})    
}