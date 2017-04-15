<template>
  <div>
    <h2>Stories</h2>
    <router-link :to="{ name: 'stories.all'}">All</router-link>
    <router-link :to="{ name: 'stories.famous'}">Trending</router-link>
    <router-view></router-view>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
