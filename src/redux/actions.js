export const change_user_info = "changeUserInfo"
export const tab_info = 'tabInfo'

export function changeUserInfo(data) {
    return {
        type: change_user_info,
        data: data
    }
}

export function changeTabInfo(data) {
    return {
        type: tab_info,
        data: data
    }
}