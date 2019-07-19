import Vue from 'vue'
import Router from 'vue-router'
import index from '../components/index.vue'
import account from '../components/account.vue'
import siren from '../components/personal.vue'
import address from '../components/address.vue'
import geren from '../components/geren.vue'
import cart from '../components/cart.vue'
import order from '../components/order.vue'

import xinpin from '../components/xinpin.vue'
import xifu from '../components/xifu.vue'
import waitao from '../components/waitao.vue'
import chenshan from '../components/chenshan.vue'
import zhenzhishan from '../components/zhenzhishan.vue'
import poloshan from '../components/poloshan.vue'
import ku from '../components/ku.vue'
import lindai from '../components/lindai.vue'
import xiezi from '../components/xiezi.vue'
import peishi from '../components/peishi.vue'
import yanjing from '../components/yanjing.vue'
import youhui from '../components/youhui.vue'



import BaiduMap from 'vue-baidu-map'
import winter from '../components/2019.vue'
import Essential from '../components/Essential.vue'
import Primosuit from '../components/Primosuit.vue'
import Store from  '../components/StoreLocator.vue'
import VueLazyLoad from 'vue-lazyload'


import Bespoke from '../components/Bespoke-m.vue'
import Denims from '../components/Denims-m.vue'
import Art from '../components/Art.vue'
import Brand from '../components/Brand-m.vue'
import Actor from '../components/Actor-m.vue'
import ActorTwo from '../components/ActorTwo-m.vue'
import ActorFour from '../components/ActorFour-m.vue'
import ActorThree from '../components/ActorThree-m.vue'

import show from '../components/show.vue'

Vue.use(Router)


Vue.use(VueLazyLoad,{
  preLoad: 1.3,
  error: 'dist/error.png',
  loading: 'dist/loading.gif',
  attempt: 1
});

Vue.use(BaiduMap,{
  ak: 'jKK7vMNhK03GvYzUkCpUXqhllRvEKaSS'
});

export default new Router({
  routes: [
    {
      name:"shouye",
      path:'/',
      component:index
    },
    {
      name:"account",
      path:'/account',
      component:account
    },
    {
      name:"siren",
      path:'/siren',
      component:siren
    },
    {
      name:'dizhi',
      path:'/address',
      component:address
    },
    {
      name:'geren',
      path:"/geren",
      component:geren
    },
    {
      name:"cart",
      path:'/cart',
      component:cart
    },
    {
      name:"order",
      path:'/dingdan',
      component:order
    },
    {
      name:"xinpin",
      path:'/xinpin',
      component:xinpin
    },
    {
      name:"xifu",
      path:'/xifu',
      component:xifu
    },
    {
      name:"waitao",
      path:'/waitao',
      component:waitao
    },
    {
      name:"chenshan",
      path:'/chenshan',
      component:chenshan
    },
    {
      name:"zhenzhishan",
      path:'/zhenzhishan',
      component:zhenzhishan
    },
    {
      name:"poloshan",
      path:'/poloshan',
      component:poloshan
    },
    {
      name:"ku",
      path:'/ku',
      component:ku
    },
    {
      name:"lindai",
      path:'/lindai',
      component:lindai
    },
    {
      name:"xiezi",
      path:'/xiezi',
      component:xiezi
    },
    {
      name:"peishi",
      path:'/peishi',
      component:peishi
    },
    {
      name:"yanjing",
      path:'/yanjing',
      component:yanjing
    },
    {
      name:"youhui",
      path:'/youhui',
      component:youhui
    },

    
    {
      name:"winter",
      path:'/fall-winter-2019_section',
      component:winter
    },
    {
      name:"Essential",
      path:'/essential_section',
      component:Essential
    },
    {
      name:"Primosuit",
      path:'/primosuit_section',
      component:Primosuit
    },
    {
      name:"Store",
      path:'/store-locator',
      component:Store
    },


    {
      name: "bespoke",
      path: '/bespoke',
      component: Bespoke
    },
    {
      name: "denims",
      path: '/denims',
      component: Denims
    },
    {
      name: "art",
      path: '/art',
      component: Art
    },
    {
      name: "brand",
      path: '/brand',
      component: Brand
    },
    {
      name: "actor",
      path: '/actor',
      component: Actor
    },
    {
      name: "actor-two",
      path: '/actor-two',
      component: ActorTwo
    },
    {
      name: "actor-four",
      path: '/actor-four',
      component: ActorFour
    },
    {
      name: "actor-three",
      path: '/actor-three',
      component: ActorThree
    },
    {
      name:"show",
      path:'/show',
      component:show
    }
  ]
})
