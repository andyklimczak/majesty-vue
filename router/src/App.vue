<template>
  <div id="app" class="container">
    <img class="logo" src="./assets/logo.png">
    <h1>Welcome to routing</h1>
    <router-link :to="{ name: 'home' }">Home</router-link>
    <router-link :to="{ name: 'login' }">Login</router-link>
    <router-link :to="{ name: 'stories.all' }">Stories</router-link>
    <router-view></router-view>
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
  .router-link-active {
    color: green;
  }
</style>
