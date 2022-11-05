import auth from "@/http/requests/auth"

export default {
    signin({ commit }, payload) {
        return new Promise((resolve, reject) => {
            auth.signin(payload)
                .then(response => {
                    commit("SET_BEARER", response.data.data.access_token)
                    commit("UPDATE_USER_INFO", response.data.data.user, { root: true })
                    resolve(response)

                })
                .catch(error => { reject(error) })
        })
    },
    fetchUsers({ commit }) {
        return new Promise((resolve, reject) => {
            auth.fetchUsers()
                .then(response => {
                    commit("SET_USERS", response.data.data)
                    resolve(response)
                })
                .catch(error => { reject(error) })
        })
    },
    signOut({ commit }) {
        localStorage.removeItem('accessToken')
        localStorage.removeItem('userInfo')
        commit("SIGN_OUT")
    },
}