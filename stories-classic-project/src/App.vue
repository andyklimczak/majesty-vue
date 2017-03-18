<template>
  <div id="app" class="container">
    <img src="./assets/logo.png">
    <h1>Welcome to dynamic components</h1>
    <ul class="nav nav-tabs">
      <li v-for="page in pages" :class="isActivePage(page) ? 'active' : ''">
        <a @click="setPage(page)">{{page | capitalize}}</a>
      </li>
    </ul>
    <component :is="activePage"></component>
  </div>
</template>

<script>
  import Vue from 'vue'
  import Login from './components/Login'
  import Register from './components/Register'
  import Stories from './components/Stories'

  Vue.filter('capitalize', function (value) {
    return value.charAt(0).toUpperCase() + value.substr(1)
  })

  export default {
    name: 'app',
    components: {
      Login,
      Register,
      Stories
    },
    data () {
      return {
        pages: [
          'stories',
          'register',
          'login'
        ],
        activePage: 'stories'
      }
    },
    methods: {
      setPage (newPage) {
        this.activePage = newPage
      },
      isActivePage (page) {
        return this.activePage === page
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
