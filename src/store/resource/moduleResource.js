import state from './moduleResourceState.js'
import mutations from './moduleResourceMutations.js'
import actions from './moduleResourceActions.js'
import getters from './moduleResourceGetters.js'

export default {
  isRegistered: false,
  namespaced: true,
  state: state,
  mutations: mutations,
  actions: actions,
  getters: getters
}
