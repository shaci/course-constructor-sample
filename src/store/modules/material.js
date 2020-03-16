const state = {
  editMaterialStatus: false,
  editMaterialId: null,
  editMaterialTitle: '',
  editMaterialType: '',
  editMaterialLevel: '',
  editMaterialLanguage: '',
  editMaterialTags: [],
  editMaterialContent: '',
  editMaterialSupport: '',
  editMaterialSource: '',
  editMaterialFile: [],
  editMaterialDopFile: [],
  editMaterialVideoLink: '',
  editMaterialDopVideoLink: '',
  beforeSaveStep: true
}

const mutations = {
  CHANGE_STATUS_EDIT_MATERIAL: (state) => {
    state.editMaterialStatus = !state.editMaterialStatus
    state.editMaterialId = null
    state.editMaterialType = ''
    state.editMaterialLevel = ''
    state.editMaterialLanguage = ''
    state.editMaterialTags = []
    state.editMaterialContent = ''
    state.editMaterialSupport = ''
    state.editMaterialSource = ''
    state.editMaterialFile = []
    state.editMaterialVideo = []
    state.editMaterialDopFile = []
    state.editMaterialDopVideo = []
    state.editMaterialVideoLink = ''
    state.editMaterialDopVideoLink = ''
    state.beforeSaveStep = false
  },
  SET_EDIT_MATERIAL_ID: (state, payload) => {
    state.editMaterialId = payload
  },
  SET_EDIT_MATERIAL_TITLE: (state, payload) => {
    console.log(payload)
    state.editMaterialTitle = payload
  },
  SET_EDIT_MATERIAL_TYPE: (state, payload) => {
    state.editMaterialType = payload
  },
  SET_EDIT_MATERIAL_LEVEL: (state, payload) => {
    state.editMaterialLevel = payload
  },
  SET_EDIT_MATERIAL_LANGUAGE: (state, payload) => {
    state.editMaterialLanguage = payload
  },
  SET_EDIT_MATERIAL_TAGS: (state, payload) => {
    state.editMaterialTags = payload
  },
  SET_EDIT_MATERIAL_CONTENT: (state, payload) => {
    state.editMaterialContent = payload
  },
  SET_EDIT_MATERIAL_SUPPORT: (state, payload) => {
    state.editMaterialSupport = payload
  },
  SET_EDIT_MATERIAL_SOURCE: (state, payload) => {
    state.editMaterialSource = payload
  },
  SET_EDIT_MATERIAL_FILE: (state, payload) => {
    state.editMaterialFile = payload
  },
  SET_EDIT_MATERIAL_VIDEO: (state, payload) => {
    state.editMaterialVideo = payload
  },
  SET_EDIT_MATERIAL_VIDEO_LINK: (state, payload) => {
    state.editMaterialVideoLink = payload
  },
  SET_EDIT_MATERIAL_DOP_FILE: (state, payload) => {
    state.editMaterialDopFile = payload
  },
  SET_EDIT_MATERIAL_DOP_VIDEO: (state, payload) => {
    state.editMaterialDopVideo = payload
  },
  SET_EDIT_MATERIAL_DOP_VIDEO_LINK: (state, payload) => {
    state.editMaterialDopVideoLink = payload
  },
  SET_EDIT_MATERIAL_BEFORE_SAVE_STEP: (state, payload) => {
    console.log('setBeforeStep ', payload)
    state.beforeSaveStep = payload
  }
}

const actions = {
  changeStatusEditMaterial({ commit }) {
    return new Promise(resolve => {
      commit('CHANGE_STATUS_EDIT_MATERIAL')
      resolve()
    })
  },
  setMaterialId({ commit }, id) {
    return new Promise(resolve => {
      commit('SET_EDIT_MATERIAL_ID', id)
      resolve()
    })
  },
  setEditMaterialTitle({ commit }, title) {
    return new Promise(resolve => {
      commit('SET_EDIT_MATERIAL_TITLE', title)
      resolve()
    })
  },
  setEditMaterialType({ commit }, type) {
    return new Promise(resolve => {
      commit('SET_EDIT_MATERIAL_TYPE', type)
      resolve()
    })
  },
  setEditMaterialLevel({ commit }, level) {
    return new Promise(resolve => {
      commit('SET_EDIT_MATERIAL_LEVEL', level)
      resolve()
    })
  },
  setEditMaterialLanguage({ commit }, language) {
    return new Promise(resolve => {
      commit('SET_EDIT_MATERIAL_LANGUAGE', language)
      resolve()
    })
  },
  setEditMaterialTags({ commit }, tags) {
    return new Promise(resolve => {
      commit('SET_EDIT_MATERIAL_TAGS', tags)
      resolve()
    })
  },
  setEditMaterialContent({ commit }, content) {
    return new Promise(resolve => {
      commit('SET_EDIT_MATERIAL_CONTENT', content)
      resolve()
    })
  },
  setEditMaterialSupport({ commit }, support) {
    return new Promise(resolve => {
      commit('SET_EDIT_MATERIAL_SUPPORT', support)
      resolve()
    })
  },
  setEditMaterialSource({ commit }, source) {
    return new Promise(resolve => {
      commit('SET_EDIT_MATERIAL_SOURCE', source)
      resolve()
    })
  },
  setEditMaterialFile({ commit }, file) {
    return new Promise(resolve => {
      commit('SET_EDIT_MATERIAL_FILE', file)
      resolve()
    })
  },
  setEditMaterialVideo({ commit }, video) {
    return new Promise(resolve => {
      commit('SET_EDIT_MATERIAL_VIDEO', video)
      resolve()
    })
  },
  setEditMaterialVideoLink({ commit }, link) {
    return new Promise(resolve => {
      commit('SET_EDIT_MATERIAL_VIDEO_LINK', link)
      resolve()
    })
  },
  setEditMaterialDopFile({ commit }, file) {
    return new Promise(resolve => {
      commit('SET_EDIT_MATERIAL_DOP_FILE', file)
      resolve()
    })
  },
  setEditMaterialDopVideo({ commit }, file) {
    return new Promise(resolve => {
      commit('SET_EDIT_MATERIAL_DOP_VIDEO', file)
      resolve()
    })
  },
  setEditMaterialDopVideoLink({ commit }, link) {
    return new Promise(resolve => {
      commit('SET_EDIT_MATERIAL_DOP_VIDEO_LINK', link)
      resolve()
    })
  },
  setBeforeSaveStep({ commit }, payload) {
    console.log('setBeforeStep', payload)
    return new Promise(resolve => {
      commit('SET_EDIT_MATERIAL_BEFORE_SAVE_STEP', payload)
      resolve()
    })
  }

}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
