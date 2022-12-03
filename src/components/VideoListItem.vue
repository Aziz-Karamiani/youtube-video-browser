<template>
  <li class="px-6 py-2 border-b border-gray-200 w-full rounded-t-lg">
    <div class="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 lg:gap-6 w-full">
      <div class="text-lg font-bold rounded-lg col-span-4">
        <img :src="videoThumbnail" :alt="video.snippet.title">
      </div>
      <div class="text-lg font-bold rounded-lg col-span-8">{{ video.snippet.title }}</div>
    </div>
  </li>
</template>

<script>
export default {
  name: "VideoListItem",
  props: [
    "video"
  ],
  computed: {
    title() {
      return this.video.snippet.title;
    },
    videoThumbnail() {
      return this.video.snippet.thumbnails.default.url;
    }
  },
}
</script>

<style scoped>

</style>