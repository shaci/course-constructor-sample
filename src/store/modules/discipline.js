const state = {
  currentDiscipline: 'Текущая дисциплина'
}

const mutations = {
  SET_CURRENT_DISCIPLINE: (state, payload) => {
    state.currentDiscipline = payload
  },
}

const actions = {
  setCurrentDiscipline({ commit }, discipline) {  // TODO установить при переходе на поиск
    return new Promise(resolve => {
      commit('SET_CURRENT_DISCIPLINE', discipline)
      resolve()
    })
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
