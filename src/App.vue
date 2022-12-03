<template>
  <div class="w-full">
    <search-box @termChanged="termChanged"></search-box>
    <VideoList :videos="videos"></VideoList>
  </div>
</template>

<script>
import '@/assets/tailwind.css';
import SearchBox from './components/Search.vue';
import VideoList from './components/VideoList.vue';
import axios from "axios";

const YOUTUBE_API_KEY = process.env.VUE_APP_API_KEY;

export default {
  name: 'App',
  components: {
    SearchBox,
    VideoList
  },
  data() {
    return {
      videos: []
    }
  },
  methods: {
    termChanged(value) {
      axios
          .get('https://www.googleapis.com/youtube/v3/search', {
            params: {
              key: YOUTUBE_API_KEY,
              type: 'video',
              part: 'snippet',
              q: value
            }
          })
          .then(response => {
            this.videos = response.data.items;
          });
    }
  }
}
</script>

<style>
</style>
