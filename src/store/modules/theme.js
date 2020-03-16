import Vue from 'vue'

/**
 * Get index by id
 * @param index
  */
function getIndexByID(id, array) {
  let resIndex = false
  array.forEach((item, index) => {
    if (item.id === id) {
      resIndex = index
    }
  })
  return resIndex
}

const state = {
  topic: false,
  materials: [],
  newIdCounter: 0,
  cachedOldIndex: false,
  cachedNewIndex: false
}

const mutations = {
  SET_TOPIC: (state, payload) => {
    state.topic = payload
  },
  SET_MATERIALS: (state, payload) => {
    state.materials = payload
  },
  ADD_MATERIAL: (state, payload) => {
    payload.id = `new${state.newIdCounter}`
    state.materials.unshift(payload)
  },
  MOVE_MATERIAL: (state, indexes) => {
    const {oldIndex, newIndex} = indexes
    const topic = state.materials.splice(oldIndex, 1)
    state.materials.splice(newIndex, 0, topic[0])
  },
  MOVE_MATERIAL_BY_ID: (state, ids) => {
    const {firstId, secondId} = ids
    const oldIndex = getIndexByID(firstId, state.materials)
    const newIndex = getIndexByID(secondId, state.materials)
    const topic = state.materials.splice(oldIndex, 1)
    state.materials.splice(newIndex, 0, topic[0])
    state.cachedOldIndex = oldIndex
    state.cachedNewIndex = newIndex
  },
  REVERT_MOVE_MATERIAL_BY_ID: (state) => {
    const topic = state.materials.splice(state.cachedNewIndex, 1)
    state.materials.splice(state.cachedOldIndex, 0, topic[0])
  },
  REMOVE_MATERIAL: (state, index) => {
    state.materials.splice(index, 1)
  },
  REMOVE_MATERIAL_BY_ID: (state, id) => {
    const index = getIndexByID(id, state.materials)
    state.materials.splice(index, 1)
  },
  ADD_MATERIAL_BETWEEN: (state, payload) => {
    const {index, newMaterial} = payload
    state.materials.splice(index + 1, 0, newMaterial)
  },
  ADD_MATERIAL_BETWEEN_BY_ID: (state, payload) => {
    const {material, newMaterial} = payload
    const index = getIndexByID(material.id, state.materials)
    newMaterial.id = `new${state.newIdCounter}`
    state.materials.splice(index + 1, 0, newMaterial)
  },
  EDIT_MATERIAL:(state, payload) => {
    const {index, material} = payload
    material.edit = !material.edit
    Vue.set(state.materials, index, material)
    // material.edit = !material.edit
  },
  EDIT_MATERIAL_BY_ID:(state, payload) => {
    const {material} = payload
    material.edit = !material.edit
    const index = getIndexByID(material.id, state.materials)
    Vue.set(state.materials, index, material)
    // material.edit = !material.edit
  },
  FILTER_MATERIALS: (state) => {
    state.materials.forEach( (material, index) => {
      if(material.persistOnce) {
        material.persistOnce = false
        Vue.set(state.materials, index, material)
      }
    })
  },
  INCREASE_NEW_ID_COUNTER: (state) => {
    state.newIdCounter++
  },
  SET_ID_FOR_MATERIAL: (state, payload) => {
    const {material, id} = payload
    material.id = id
    // material.isNew = false
    // material.loader = false
    material.persistOnce = true
  },
  UPDATE_MATERIAL_FIELD: (state, payload) => {
    const {material, value, field} = payload
    material[field] = value
  },
  SYNC_MATERIAL_CACHE: (state, payload) => {
    const {material} = payload
    material.cache.title = material.title
    material.cache.content = material.content
    material.cache.format = material.format
  },
  RESTORE_FROM_MATERIAL_CACHE: (state, payload) => {
    const {material} = payload
    material.title = material.cache.title
    material.content = material.cache.content
    material.format = material.cache.format
  }
}

const actions = {
  setTopic({ commit }, topic) {
    return new Promise(resolve => {
      commit('SET_TOPIC', topic)
      resolve()
    })
  },
  setMaterials({ commit }, materials) {
    return new Promise(resolve => {
      commit('SET_MATERIALS', materials)
      resolve()
    })
  },
  addMaterial({ commit }, material) {
    return new Promise(resolve => {
      commit('INCREASE_NEW_ID_COUNTER')
      commit('ADD_MATERIAL', material)
      resolve()
    })
  },
  moveMaterial({ commit }, indexes) {
    return new Promise(resolve => {
      commit('MOVE_MATERIAL', indexes)
      resolve()
    })
  },
  moveMaterialById({ commit }, ids) {
    return new Promise(resolve => {
      commit('MOVE_MATERIAL_BY_ID', ids)
      resolve()
    })
  },
  removeMaterial({ commit }, index) {
    return new Promise(resolve => {
      commit('REMOVE_MATERIAL', index)
      resolve()
    })
  },
  removeMaterialById({ commit }, id) {
    return new Promise(resolve => {
      commit('REMOVE_MATERIAL_BY_ID', id)
      resolve()
    })
  },
  addMaterialBetween({ commit }, payload) {
    return new Promise(resolve => {
      commit('INCREASE_NEW_ID_COUNTER')
      commit('ADD_MATERIAL_BETWEEN', payload)
      resolve()
    })
  },
  addMaterialBetweenById({ commit }, payload) {
    return new Promise(resolve => {
      commit('INCREASE_NEW_ID_COUNTER')
      commit('ADD_MATERIAL_BETWEEN_BY_ID', payload)
      resolve()
    })
  },
  editMaterial({ commit }, payload) {
    return new Promise(resolve => {
      commit('EDIT_MATERIAL', payload)
      resolve()
    })
  },
  editMaterialById({ commit }, payload) {
    return new Promise(resolve => {
      commit('EDIT_MATERIAL_BY_ID', payload)
      resolve()
    })
  },
  filterMaterials({ commit }, payload) {
    return new Promise(resolve => {
      commit('FILTER_MATERIALS', payload)
      resolve()
    })
  },
  setIdForMaterial({ commit }, payload) {
    return new Promise(resolve => {
      commit('SET_ID_FOR_MATERIAL', payload)
      resolve()
    })
  },
  updateMaterialField({ commit }, payload) {
    return new Promise(resolve => {
      commit('UPDATE_MATERIAL_FIELD', payload)
      resolve()
    })
  },
  syncMaterialCache({ commit }, payload) {
    return new Promise(resolve => {
      commit('SYNC_MATERIAL_CACHE', payload)
      resolve()
    })
  },
  restoreFromMaterialCache({ commit }, payload) {
    return new Promise(resolve => {
      commit('RESTORE_FROM_MATERIAL_CACHE', payload)
      resolve()
    })
  },
  revertMoveMaterialById({ commit }, payload) {
    return new Promise(resolve => {
      commit('REVERT_MOVE_MATERIAL_BY_ID', payload)
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
