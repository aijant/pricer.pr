import { set, toggle } from '@/utils/vuex'

// initial state
const state = () => ({
  drawer: null
})

// mutations
const mutations = {
    setDrawer: set('drawer'),
    toggleDrawer: toggle('drawer')
}

export default {
  state,
  mutations
}
