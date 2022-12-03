<template>
  <div class="aspect-w-16 aspect-h-9">
    <iframe :src="embedUrl" class="w-full" title="YouTube video player" height="500px"
            frameborder="1"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
    </iframe>
    <div class="w-full">
      <h3>{{ title }}</h3>
    </div>
    <div class="w-full">
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "VideoDetails",
  props: [
    "video"
  ],
  computed: {
    title() {
      return this.video.snippet.title;
    },
    description() {
      return this.video.snippet.description;
    },
    embedUrl() {
      return `https://www.youtube.com/embed/RqR1JQknfSA/${this.video.id.videoId}`;
    }
  },
}
</script>

<style scoped>

</style>