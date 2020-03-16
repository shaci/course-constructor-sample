import request from '@/utils/request'

export function getDirectionsList() {
  return request({
    url: 'api/dictionary/directions',
    method: 'get'
  })
}

export function getDisciplineInfo(disciplineId) {
  return request({
    url: `/api/discipline/${disciplineId}`,
    method: 'get'
  })
}

export function postDisciplineInfo(disciplineId, data) {
  return request({
    url: `/api/discipline/${disciplineId}`,
    method: 'post',
    data: data
  })
}

export function postNewDisciplineInfo(data) {
  return request({
    url: `/api/discipline/new`,
    method: 'post',
    data: data
  })
}
