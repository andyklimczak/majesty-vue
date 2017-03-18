<template>
  <div id="famous">
    <h2>Trending stories<strong>({{famous.length}})</strong></h2>
    <ul class="list-group">
      <li v-for="story in famous" class="list-group-item">
        {{ story.writer }} said "{{ story.plot }}"
        Story upvotes {{ story.upvotes }}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    computed: {
      famous () {
        return this.stories.filter(function (item) {
          return item.upvotes > 20
        })
      }
    },
    data () {
      return {
        stories: [
          {
            plot: 'Story 1',
            writer: 'Writer 1',
            upvotes: 28,
            voted: false
          },
          {
            plot: 'Story 2',
            writer: 'Writer 2',
            upvotes: 1,
            voted: false
          },
          {
            plot: 'Story 3',
            writer: 'Writer 3',
            upvotes: 30,
            voted: false
          },
          {
            plot: 'Story 4',
            writer: 'Writer 4',
            upvotes: 8,
            voted: false
          }
        ]
      }
    }
  }
</script>
