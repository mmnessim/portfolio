
const defaultState = {
    authenticated: false,
    user: "Guest",
}

export const LOGIN = 'LOGIN';
export const ERROR = 'ERROR';

export function loginReducer(state = defaultState, action) {
    switch (action.type) {
        case 'LOGIN': 
            return action.payload
            break;
        case 'ERROR':
            return state
            break;
        default: 
            return state
            break;
    }
} 

