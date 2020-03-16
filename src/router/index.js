import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    meta: { roles: ['admin'] },
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: 'Dashboard', icon: 'dashboard', roles: ['admin'] }
    }]
  },

  {
    path: '/form',
    component: Layout,
    meta: { roles: ['editor'] },
    children: [
      {
        path: 'index',
        name: 'Form',
        component: () => import('@/views/form/index'),
        meta: { title: 'Form', icon: 'form', roles: ['editor'] }
      }
    ]
  },

  {
    path: '/disciplines',
    component: Layout,
    redirect: '/disciplines/my',
    name: 'Disciplines',
    meta: {
      title: 'Дисциплины',
      icon: 'form',
      role: ['editor'],
    },
    children: [
      {
        path: '/disciplines/edit/new',
        component: () => import('@/views/disciplines/add/index'),
        name: 'AddDiscipline',
        meta: { title: 'Добавить', icon: 'form', role: ['editor'], },
      },
      {
        path: '/disciplines/edit/:id',
        hidden: true,
        component: () => import('@/views/disciplines/add/index'),
        name: 'EditDiscipline',
        props: { mode: true, id: true },
        meta: { title: 'Редактировать', icon: 'form', role: ['editor'], },
      },
      {
        path: '/disciplines/my',
        component: () => import('@/views/disciplines/my/index'),
        name: 'MyDiscipline',
        meta: { title: 'Мои дисциплины', icon: 'form', role: ['editor'], },
      }
    ]
  },


  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router