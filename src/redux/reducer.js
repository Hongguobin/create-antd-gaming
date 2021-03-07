import { change_user_info } from './actions'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    userInfo(state = null, action) {
        const { type, data } = action;
        switch (type) {
            case change_user_info:
                return data;
            default:
        }
        return state;
    },
}
    