import Vue from 'vue'
import Router from 'vue-router'

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// 开发模式下未使用懒加载，页面太多会导致热加载过慢，所以只在生产模式下使用懒加载
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/**
* hidden: true                   如果为true, 则不在sidebar中显示，默认是false
* alwaysShow: true               如果设置为true, 则始终显示根目录, 无论子路由的个数是多少
*                                如果不设置alwaysShow, 子路由不能超过一个,如果超过一个, 将变成嵌套模式, 不显示根目录
* redirect: noredirect           如果设置 `redirect:noredirect` 面包屑中该位置将不能点击
* name:'router-name'             <keep-alive>使用的属性 (必须设置!!!)
* meta : {
    title: 'title'               在子菜单（submenu）和面包屑(breadcrumb)中显示的名称 (推荐设置)
    icon: 'svg-name'             sidebar中显示icon,
    affix: true                  在标签导航栏中显示
  }
**/
export const constantRouterMap = [
  { path: '/login', component: () => import('@/views/login/index'), hidden: true },
  { path: '/404', component: () => import('@/views/404'), hidden: true },
  { path: '/questionnairePreview', component: () => import('@/views/questionnaire/preview'), hidden: true },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      component: () => import('@/views/dashboard/index'),
      name: 'dashboard',
      meta: { title: '主页', icon: 'dashboard', noCache: true, affix: true }
    }]
  },

  {
    path: 'external-link',
    component: Layout,
    children: [{
      path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
      meta: { title: 'External Link', icon: 'link' }
    }]
  },

  {
    path: '/mobileGame',
    name: 'mobileGame',
    component: Layout,
    alwaysShow: true,
    meta: { title: '手游业务', icon: 'mobile' },
    children: [{
      path: 'manage',
      name: 'mbGameManage',
      component: () => import('@/views/mobileGame/gameManage/index'),
      meta: { title: '游戏管理', icon: 'manage' }
    }]
  },

  {
    path: '/questionnaire',
    name: 'questionnaire',
    component: Layout,
    alwaysShow: true,
    meta: { title: '问卷调查', icon: 'questionnaire' },
    children: [{
      path: 'list',
      name: 'questionnaireList',
      component: () => import('@/views/questionnaire/list/index'),
      meta: { title: '问卷列表', icon: 'list' }
    }, {
      path: 'design',
      name: 'designQuestionnaire',
      component: () => import('@/views/questionnaire/designQuestionnaire/index'),
      hidden: true,
      meta: { title: '设计问卷' }
    }]
  }
]

export default new Router({
  // mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  base: process.env.BASE_URL,
  routes: constantRouterMap
})

// 解决开发环境下路由重复警告的问题

export const createRouter = () => new Router({
  base: process.env.BASE_URL,
  routes: constantRouterMap
})
// export const asyncRouterMap = [
//   { // 系统管理
//     path: '/sysManage',
//     component: Layout,
//     name: 'sysManage',
//     meta: { title: '系统管理', icon: 'sysManage' },
//     children: [{
//       path: 'sysInfo',
//       component: () => import('@/views/sysManage/sysInfo/index'),
//       name: 'sysInfo',
//       meta: { title: '系统信息', icon: 'sysInfo' }
//     }, { // 配置项管理
//       path: 'configItem',
//       component: () => import('@/views/sysManage/configItem/index'),
//       name: 'configItem',
//       meta: { title: '配置项管理', icon: 'configItem' }
//     }, { // 菜单管理
//       path: 'menuManage',
//       component: () => import('@/views/sysManage/menuManage/index'),
//       name: 'menuManage',
//       meta: { title: '菜单管理', icon: 'menuManage' }
//     }, { // 角色管理
//       path: 'roleManage',
//       name: 'roleManage',
//       component: () => import('@/views/sysManage/roleManage/index'),
//       meta: { title: '角色管理', icon: 'roleManage' }
//     }, { // 用户管理
//       path: 'userManage',
//       name: 'userManage',
//       component: () => import('@/views/sysManage/userManage/index'),
//       meta: { title: '用户管理', icon: 'user' }
//     }, { // 组织机构
//       path: 'department',
//       name: 'department',
//       component: () => import('@/views/sysManage/department/index'),
//       meta: { title: '组织机构', icon: 'tree' }
//     }, { // 系统日志
//       path: '/sysLog',
//       name: 'sysLog',
//       component: () => import('@/views/sysManage/sysLog/index'),
//       meta: { title: '系统日志', icon: 'sysLog' },
//       children: [{
//         path: 'loginLog',
//         name: 'loginLog',
//         component: () => import('@/views/sysManage/sysLog/loginLog/index'),
//         meta: { title: '登录日志', icon: 'logLog' }
//       }, {
//         path: 'operationLog',
//         name: 'operationLog',
//         component: () => import('@/views/sysManage/sysLog/operationLog/index'),
//         meta: { title: '操作日志', icon: 'operLog' }
//       }]
//     }]
//   },

//   { // 系统监控
//     path: '/sysWatch',
//     component: Layout,
//     name: 'sysWatch',
//     meta: { title: '系统监控', icon: 'sysWatch' },
//     alwaysShow: true,
//     children: [{ // 定时任务
//       path: 'setTime',
//       name: 'setTime',
//       component: () => import('@/views/sysWatch/setTime/index'),
//       meta: { title: '定时任务', icon: 'setTime', btnPermission: ['search', 'remove'] }
//     }]
//   },

//   { path: '*', redirect: '/404', hidden: true }
// ]
