import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: '/Home'
  },
  {
    path: '/Home',
    name: 'home',
    component: () => import('views/home/Home'),
    meta: {
      title: '首页'
    }
  },
  {
    path: '/Cart',
    name: 'cart',
    component: () => import('views/cart/Cart'),
    meta: {
      title: '购物车'
    }
  },

  {
    path: '/Profile',
    name: 'profile',
    component: () => import('views/profile/profile.vue'),
    meta: {
      title: '我的'
    }
  },
  {
    path: '/Detail/:iid',
    name: 'detail',
    component: () => import('views/detail/Detail.vue'),
    meta: {
      title: '商品详情'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
// 通过路由守卫动态改变 title
router.beforeEach((to, from, next) => {
  document.title = to.matched[0].meta.title;
  next()
})
export default router