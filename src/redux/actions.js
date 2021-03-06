export const change_user_info = "changeUserInfo"

export function changeUserInfo(data) {
    return {
        type: change_user_info,
        data: data
    }
}