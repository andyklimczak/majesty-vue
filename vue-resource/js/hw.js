Vue.component('movie', {
  template: "#movie-template-raw",
  props: ['movie'],
  methods: {
    deleteMovie: function(movie) {
      var index = vm.movies.indexOf(movie);
      vm.movies.splice(index, 1);
      this.$http.delete('http://localhost:3000/api/movies/' + movie.id);
    },
    updateMovie: function(movie) {
      this.$http.patch('http://localhost:3000/api/movies/' + movie.id, movie);
      movie.editing = false;
    },
    storeMovie: function(movie) {
      this.$http.post('http://localhost:3000/api/movies/', movie).then(function(response) {
        Vue.set(movie, 'id', response.data.id);
        movie.editing = false;
      });
    },
    editMovie: function(movie) {
      movie.editing = true;
    }
  }
});

var vm = new Vue({
  el: '#app',
  data: {
    movies: [],
  },
  mounted: function() {
    this.fetchMovies();
  },
  methods: {
    createMovie: function() {
      var newMovie = {
        "title": "",
        "director": "",
        "editing": true
      };
      this.movies.push(newMovie);
    },
    fetchMovies: function() {
      this.$http({url: 'http://localhost:3000/api/movies', method: 'GET'})
        .then(function(response) {
          var moviesReady = response.data.map(function(movie) {
            movie.editing = false;
            return movie;
          });
          Vue.set(vm, 'movies', moviesReady);
        });
    }
  },
})
