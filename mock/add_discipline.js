import Mock from 'mockjs'

const data = Mock.mock(
  ['Математика',
    'Информатика',
    'Русский язык',
    'Литература',
    'Физика',
    'Базы данных',
    'Окружающий мир']
)

const dataEdit = Mock.mock(
  {
    name: 'Введение в базы данныx',
    course: 'Базы данных',
    desc: 'Знакомство с методами структурированного хранения данных, основами SQL, принципами использования баз данных в приложениях, обзор нереляционных способов хранения данных',

    img: 'https://stylescribe.s3.amazonaws.com/wp-content/uploads/2018/08/zurich-sunset-skyline.jpg'
  }
)

export default [
  {
    url: '/api/dictionary/directions',
    type: 'get',
    response: config => {
      return {
        code: 20000,
        data: data
      }
    }
  },

  {
    url: '/api/discipline/[0-9]',
    type: 'get',
    response: config => {
      return {
        code: 20000,
        data: dataEdit
      }
    }
  },

  {
    url: 'api/discipline/[0-9]',
    type: 'post',
    response: config => {
      return {
        code: 20000,
        data: 'success'
      }
    }
  },

  {
    url: 'api/discipline/new',
    type: 'post',
    response: config => {
      return {
        code: 20000,
        data: { id: 2 }
      }
    }
  },

]
