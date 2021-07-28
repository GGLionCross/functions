import { store } from 'quasar/wrappers'
import { createStore } from 'vuex'
import state from './state'
import * as getters from './getters'
import * as mutations from './mutations'
import * as actions from './actions'

export default store(function (/* { ssrContext } */) {
  const Store = createStore({
    state: state(),
    getters,
    mutations,
    actions,

    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: process.env.DEBUGGING
  })

  return Store
});
