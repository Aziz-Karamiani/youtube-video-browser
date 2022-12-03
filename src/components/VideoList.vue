<template>
  <div class="container mx-auto flex justify-center mt-3 w-full">
    <div class="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 lg:gap-6 w-full">
      <div class="text-green-500 text-lg font-bold rounded-lg col-span-8">Video Details</div>
      <div class="text-green-500 text-lg font-bold rounded-lg col-span-4">
        <ul class="bg-white rounded-lg border border-gray-200 w-full text-gray-900" v-for="video in videos">
          <li class="px-6 py-2 border-b border-gray-200 w-full rounded-t-lg">{{ video.snippet.title }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ItemLists",
  props: [
    "videos"
  ],

}
</script>

<style scoped>

</style>