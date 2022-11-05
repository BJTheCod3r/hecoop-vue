export default {
    isUserLoggedIn(state, getters, rootState) {
        const user = !!rootState.appActiveUser
        const accessToken = !!state.accessToken

        return (user && accessToken) && (getters.lastActive !== 'never' && (getters.lastActive < 24 || state.rememberMe))
    },
    lastActive(state) {
        if (state.timestamp === null) {
            return 'never'
        }
        return (Date.now() - state.timestamp) / 36e5
    },
    selectUsers: (state) => {
        let users = state.users.map(user => {
            return {
                value: user.id,
                text: user.name
            }
        })

        return [{value: null, text: 'Select User'}, ...users]
    }
}