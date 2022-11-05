import axios from "@/axios"

export default {
  SET_BEARER(state, accessToken) {
    state.accessToken = accessToken
    localStorage.setItem('accessToken', accessToken)
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + accessToken
  },
  SIGN_OUT(state) {
      state.accessToken = null
  },
  SET_USERS(state, users) {
    state.users = users
  }
}