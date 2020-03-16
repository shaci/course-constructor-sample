import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import app from './modules/app'
import settings from './modules/settings'
import user from './modules/user'
import search from './modules/search'
import theme from './modules/theme'
import material from './modules/material'
import discipline from '@/store/modules/discipline'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    settings,
    user,
    theme,
    search,
    material,
    discipline
  },
  getters
})

export default store
