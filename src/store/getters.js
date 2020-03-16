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

const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  roles: state => state.user.roles,
  themes: state => state.search.themes,
  materials: state => state.search.materials,
  chosenMaterials: state => state.search.chosenMaterials,
  chosenThemes: state => state.search.chosenThemes,
  visibleSearchTab: state => state.search.visibleSearchTab,
  disciplineList: state => state.search.disciplineList,
  allowAdd: state => state.search.allowAdd,
  topics: state => state.theme.topics,
  editMaterialStatus: state => state.material.editMaterialStatus,
  editMaterialId: state => state.material.editMaterialId,
  editMaterialType: state => state.material.editMaterialType,
  editMaterialLevel: state => state.material.editMaterialLevel,
  editMaterialLanguage: state => state.material.editMaterialLanguage,
  editMaterialTags: state => state.material.editMaterialTags,
  editMaterialContent: state => state.material.editMaterialContent,
  editMaterialSupport: state => state.material.editMaterialSupport,
  editMaterialSource: state => state.material.editMaterialSource,
  editMaterialTitle: state => state.material.editMaterialTitle,
  editMaterialFile: state => state.material.editMaterialFile,
  editMaterialDopFile: state => state.material.editMaterialDopFile,
  editMaterialVideoLink: state => state.material.editMaterialVideoLink,
  editMaterialDopVideoLink: state => state.material.editMaterialDopVideoLink,
  beforeSaveStep: state => state.material.beforeSaveStep,
  currentDiscipline: state => state.discipline.currentDiscipline,
  materialsIds: (state) => {
    return state.theme.materials.map( (item) => {
      return item.id
    })
  },
  materialIndex: (state) => {
    return (material) => {
      return getIndexByID(material.id, state.theme.materials)
    }
  }
}
export default getters
