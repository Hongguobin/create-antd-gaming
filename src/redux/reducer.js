import { change_user_info, tab_info } from './actions'

let storeState = {
    userInfo: null,
    tabInfo: null
}

export default function Store(state = storeState, actions) {
    switch (actions.type) {
        case change_user_info:
            return {
                ...state,
                userInfo: actions.data
            }
        case tab_info:
            return {
                ...state,
                tabInfo: actions.data
            }
        default:
            return state
    }
}