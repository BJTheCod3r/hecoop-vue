import Vue from "vue";
import axios from 'axios';
import router from "./router";
import store from "./store"

const UNVALIDATED_ROUTES = [
  'login'
]

const IGNORED_ROUTES = [
  'login', 'resources', 'admin-resources'
]

const INCLUDED_ENDPOINTS = [

]

const signOut = () => {
  store.dispatch('auth/signOut')
  router.push('/login')
}
let baseURL = "https://localhost:8000/api"

const Axios = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL || baseURL
});



Axios.interceptors.response.use((response) => {
  if (response.status == 200 || response.status == 201) {
    localStorage.setItem('timestamp', Date.now())
    if (INCLUDED_ENDPOINTS.includes(response.config.url) || !IGNORED_ROUTES.includes(router.currentRoute.name)) {
      if (response?.data?.message) {
        Vue.$toast.success(response.data.message)
      }
    }
  }
  return response
}, (error) => {
  const data = error?.response?.data
  if (error?.response?.status === 401) {
    signOut()
  }
  else if (error?.response?.status === 403) {
    Vue.$toast.error(data.message)
  }
  else if (error?.response?.status === 422) {
    Vue.$toast.warning(data.message)
    if (!UNVALIDATED_ROUTES.includes(router.currentRoute.name)) {
      Object.keys(data.errors).forEach(key => {
        data.errors[key].forEach(err => {
          Vue.$toast.error(err)
        })
      })
    }
  }
  else if (error?.response?.status === 429) {
    Vue.$toast.warning(data.message)
  }
  else if (error?.response?.status === 500) {
    if (data.message === "Unauthenticated.") {
      signOut()
    }
  }
  return Promise.reject(error)
})


export default Axios;