import { change_user_info } from './actions'

let storeState = {
    userInfo: null,
}

export default function Store(state = storeState, actions) {
    switch (actions.type) {
        case change_user_info:
            return {
                ...state,
                userInfo: actions.data
            }
        default:
            return state
    }
}