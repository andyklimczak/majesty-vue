// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Hello from '../src/components/Hello.vue'
import Login from '../src/components/Login.vue'
import StoriesPage from '../src/components/StoriesPage.vue'
import StoriesAll from '../src/components/StoriesAll.vue'
import StoriesFamous from '../src/components/StoriesFamous.vue'
import StoriesEdit from '../src/components/StoriesEdit.vue'

Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [
  { path: '/', component: Hello, name: 'home' },
  { path: '/login', component: Login, name: 'login' },
  {
    path: '/stories',
    component: StoriesPage,
    children: [
      {
        path: '',
        name: 'stories.all',
        component: StoriesAll
      },
      {
        path: 'famous',
        name: 'stories.famous',
        component: StoriesFamous
      },
      {
        path: ':id/edit',
        name: 'stories.edit',
        component: StoriesEdit
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<app></app>',
  components: { App }
})
