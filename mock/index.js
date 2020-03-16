import Mock from 'mockjs'
import { param2Obj } from '../src/utils'

import user from './user'
import table from './table'
// import topic from './topic'
// import material from './material'
// import disciplinesDirections from './disciplinesDirections'
// import disciplinesLanguages from './disciplinesLanguages'
// import disciplinesNew from './disciplinesNew'
// import disciplinesPopular from './disciplinesPopular'
// import popularAuthors from './popularAuthors'
// import disciplines from './disciplines'
// import themes from './themes'
// import materials from './materials'
// import disciplinesList from './disciplinesList'
// import add_discipline from './add_discipline'
// import constructor from './constructor'
// import materialInfoById from './materialInfoById'
// import materialSupport from './materialSupport'
// import allLanguages from './allLanguages'
// import allLevels from './allLevels'
// import allTypes from './allTypes'
// import allAttachmentTypes from './allAttachmentTypes'
// import materialEdited from './materialEdited'
// import my_disciplines from './my_disciplines'

const mocks = [
  ...user,
  ...table,
  // ...topic,
  // ...material,
  // ...disciplinesDirections,
  // ...disciplinesLanguages,
  // ...disciplinesNew,
  // ...disciplinesPopular,
  // ...popularAuthors,
  // ...disciplines,
  // ...themes,
  // ...materials,
  // ...disciplinesList,
  // ...add_discipline,
  // ...constructor,
  // ...materialInfoById,
  // ...materialSupport,
  // ...allLanguages,
  // ...allLevels,
  // ...allTypes,
  // ...allAttachmentTypes,
  // ...materialEdited,
  // ...my_disciplines
]

// for front mock
// please use it cautiously, it will redefine XMLHttpRequest,
// which will cause many of your third-party libraries to be invalidated(like progress event).
export function mockXHR() {
  // mock patch
  // https://github.com/nuysoft/Mock/issues/300
  Mock.XHR.prototype.proxy_send = Mock.XHR.prototype.send
  Mock.XHR.prototype.send = function() {
    if (this.custom.xhr) {
      this.custom.xhr.withCredentials = this.withCredentials || false

      if (this.responseType) {
        this.custom.xhr.responseType = this.responseType
      }
    }
    this.proxy_send(...arguments)
  }

  function XHR2ExpressReqWrap(respond) {
    return function(options) {
      let result = null
      if (respond instanceof Function) {
        const { body, type, url } = options
        // https://expressjs.com/en/4x/api.html#req
        result = respond({
          method: type,
          body: JSON.parse(body),
          query: param2Obj(url)
        })
      } else {
        result = respond
      }
      return Mock.mock(result)
    }
  }

  for (const i of mocks) {
    Mock.mock(new RegExp(i.url), i.type || 'get', XHR2ExpressReqWrap(i.response))
  }
}

// for mock server
const responseFake = (url, type, respond) => {
  return {
    url: new RegExp(`${process.env.VUE_APP_BASE_API}${url}`),
    type: type || 'get',
    response(req, res) {
      console.log('request invoke:' + req.path)
      res.json(Mock.mock(respond instanceof Function ? respond(req, res) : respond))
    }
  }
}

export default mocks.map(route => {
  return responseFake(route.url, route.type, route.response)
})
