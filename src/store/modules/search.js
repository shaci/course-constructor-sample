const state = {
  themes: [],
  materials: [],
  chosenThemes: 0,
  chosenMaterials: 0,
  visibleSearchTab: 'disciplines',
  chosenThemesArray: [],
  chosenMaterialsArray: [],
  disciplineList: [],
  allowAdd: false
}

const mutations = {
  CLEAR_ALL: (state) => {
    state.chosenThemes = 0
    state.chosenMaterials = 0
    state.materials = state.materials.map(material => {
      material.check = false
      return material
    })
    state.themes = state.themes.map(theme => {
      theme.materials.map(material => {
        material.check = false
        return material
      })
      theme.check = false
      return theme
    })
  },
  CHANGE_VISIBLE_TAB: (state, payload) => {
    state.visibleSearchTab = payload
  },
  SET_MATERIALS: (state, payload) => {
    state.materials = payload
  },
  SET_ALLOW_ADD: (state, payload) => {
    state.allowAdd = payload
  },
  CHANGE_ONLY_MATERIALS: (state) => {
    state.chosenMaterials = 0
    state.themes = state.themes.map(item => {
      item.materials.forEach(material => {
        if (material.check === true) state.chosenMaterials++
      })
      return item
    })
    state.materials = state.materials.map(item => {
      if (item.check === true) state.chosenMaterials++
      return item
    })
  },
  SET_THEMES: (state, payload) => {
    state.themes = payload
  },
  SET_DISCIPLINE_LIST: (state, payload) => {
    state.disciplineList = payload
  },
  CHANGE_THEMES: (state, id) => {
    state.chosenThemes = 0
    state.themes = state.themes.map(item => {
      if (item.id === id) {
        item.materials = item.materials.map(material => {
          material.check = item.check
          return material
        })
      }

      if (item.check === true) {
        state.chosenThemes++
      }
      return item
    })

    state.chosenMaterials = 0
    state.themes = state.themes.map(item => {
      item.materials.forEach(material => {
        if (material.check === true) state.chosenMaterials++
      })
      return item
    })
    state.materials = state.materials.map(item => {
      if (item.check === true) state.chosenMaterials++
      return item
    })
  },
  CHANGE_MATERIAL: (state, id) => {
    state.chosenMaterials = 0
    state.themes = state.themes.map(item => {
      item.materials.forEach(material => {
        if (material.check === true) {
          state.chosenMaterials++
          item.check = true
        }
      })
      return item
    })

    state.chosenThemes = 0
    state.themes.forEach(item => {
      if (item.check === true) {
        state.chosenThemes++
      }
    })

    state.materials = state.materials.map(item => {
      if (item.check === true) state.chosenMaterials++
      return item
    })
  }
}

const actions = {
}

export default {
  state,
  mutations,
  actions
}

