Vue.component('story', {
  template: "#story-template-raw",
  props: ['story'],
  methods: {
    upvoteStory: function(story) {
      story.upvotes++;
      this.$http.patch('http://localhost:3000/api/stories/' + story.id, story);
    },
    deleteStory: function(story) {
      var index = vm.stories.indexOf(story);
      vm.stories.splice(index, 1);
      this.$http.delete('http://localhost:3000/api/stories/' + story.id);
    },
    updateStory: function(story) {
      this.$http.patch('http://localhost:3000/api/stories/' + story.id, story);
      story.editing = false;
    },
    storeStory: function(story) {
      this.$http.post('http://localhost:3000/api/stories/', story).then(function(response) {
        Vue.set(story, 'id', response.data.id);
        story.editing = false;
      });
    },
    editStory: function(story) {
      story.editing = true;
    }
  }
});

var vm = new Vue({
  el: '#app',
  data: {
    stories: [],
  },
  mounted: function() {
    this.fetchStories();
  },
  methods: {
    createStory: function() {
      var newStory = {
        "plot": "",
        "upvotes": 0,
        "editing": true
      };
      this.stories.push(newStory);
    },
    fetchStories: function() {
      this.$http({url: 'http://localhost:3000/api/stories', methid: 'GET'})
        .then(function(response) {
          var storiesReady = response.data.map(function(story) {
            story.editing = false;
            return story;
          });
          Vue.set(vm, 'stories', storiesReady);
        });
    }
  },
})
