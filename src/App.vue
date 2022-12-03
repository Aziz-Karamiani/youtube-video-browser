<template>
  <div class="w-full">
    <search-box @termChanged="termChanged"></search-box>
    <div class="container mx-auto flex justify-center mt-3 w-full">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 lg:gap-6 w-full">
        <div class="text-lg font-bold rounded-lg col-span-8">
          <div v-if="selectedVideo">
            <VideoDetails :video="selectedVideo"></VideoDetails>
          </div>
        </div>
        <VideoList :videos="videos" @OnVideoSelect="videoSelect"></VideoList>
      </div>
    </div>
  </div>
</template>

<script>
import '@/assets/tailwind.css';
import SearchBox from './components/Search.vue';
import VideoList from './components/VideoList.vue';
import VideoDetails from './components/VideoDetails.vue';
import axios from "axios";

const YOUTUBE_API_KEY = process.env.VUE_APP_API_KEY;

export default {
  name: 'App',
  components: {
    SearchBox,
    VideoList,
    VideoDetails
  },
  data() {
    return {
      videos: [],
      selectedVideo: null
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
    },

    videoSelect(video) {
      this.selectedVideo = video;
    }
  }
}
</script>

<style>
</style>
