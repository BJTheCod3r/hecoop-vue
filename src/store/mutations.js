export default {
    TOGGLE_ONLINE(state, value) {
        state.online = value
    },
    UPDATE_USER_INFO(state, payload) {
        state.appActiveUser = payload
        localStorage.setItem("userInfo", JSON.stringify(payload))
    }
}