<template>
  <div class="text-green-500 text-lg font-bold rounded-lg col-span-4">
    <ul class="bg-white rounded-lg border border-gray-200 w-full text-gray-900" v-for="video in videos"
        :key="video.id.videoId">
      <VideoListItem :video="video" @OnVideoSelect="videoSelect"></VideoListItem>
    </ul>
  </div>
</template>

<script>

import VideoListItem from "@/components/VideoListItem";

export default {
  name: "ItemLists",
  components: {
    VideoListItem
  },
  props: [
    "videos"
  ],
  methods: {
    videoSelect(video) {
      this.$emit("OnVideoSelect", video);
    }
  }

}
</script>

<style scoped>

</style>