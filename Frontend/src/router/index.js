import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const routes = [{
  path: '/1',
  name: 'demands',
  component: () =>
    import ("@/views/demands.vue") // Заявки
}, {
  path: '/1/demandcard',
  name: 'demandcard',
  props: true,
  component: () =>
    import ("@/views/demand.card.vue") // Заявка
}, {
  path: '/2',
  name: 'trails',
  component: () =>
    import ("@/views/trails.vue") //Заказы/маршруты  
}, {
  path: '/2/trailcard',
  name: 'trailcard',
  props: true,
  component: () =>
    import ("@/views/trail.card.vue")
}, {
  path: '/4',
  name: 'references',
  component: () =>
    import ("@/views/references.vue") // справочники
}]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
export default router