import {objectAppend} from '../utils/index';
import { TypeInterface } from 'custom';


const defaultState:TypeInterface._Object = {
    locale:'',
}

export default (state:any,action:any) => {
    let newState:TypeInterface._Object = {};
    switch(action.type){
        case 'APP_TOGGLE_LOCALE':
            newState.locale = action.locale;
            break;
        default: return state||defaultState;
    }
    return objectAppend(newState,state);
}