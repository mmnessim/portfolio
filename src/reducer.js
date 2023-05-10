export const defaultState = {
    authenticated: null,
    user: "Guest",
}

export const LOGIN = 'LOGIN';
export const ERROR = 'ERROR';

export function loginReducer(state = defaultState, action) {
    switch (action.type) {
        case 'LOGIN': 
            return action.payload
            break;
        case 'INCORRECT':
            return action.payload
            break;
        case 'ERROR':
            return state
            break;
        case 'LOGOUT':
            return action.payload
            break;
        default: 
            return state
            break;
    }
} 

