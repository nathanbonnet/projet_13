import { store } from './index'
import { saveState } from './localStorage';
  

export const userData = (firstName, lastName) => {
    store.dispatch({type: 'UPDATE_NAME', firstName: firstName, lastName: lastName})
    saveState({
        firstName: store.getState().firstName,
        lastName: store.getState().lastName,
    });
}