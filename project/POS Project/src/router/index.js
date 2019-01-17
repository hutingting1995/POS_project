import Vue from 'vue'
import Router from 'vue-router'
import POS from "../components/page/pos.vue"
import Details from "../components/page/posDetails.vue"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'POS',
      component:POS,
    },
    {
      path:"/details",
      name:"details",
      component:Details,
    }
  ]
})
