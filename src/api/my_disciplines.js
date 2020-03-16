import request from '@/utils/request'

export function getMyDisciplinesInfo() {
  return request({
    url: 'api/disciplines/my',
    method: 'get',
  })
}
