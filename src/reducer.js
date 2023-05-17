export const defaultState = {
    authenticated: null,
    user: "Guest",
}

//Redux state reducer to manage login state

export function loginReducer(state = defaultState, action) {
    switch (action.type) {
        case 'LOGIN': 
            return action.payload
            break;
        case 'INCORRECT':
            return action.payload
            break;
        case 'LOGOUT':
            return action.payload
            break;
        default: 
            return state
            break;
    }
} 

