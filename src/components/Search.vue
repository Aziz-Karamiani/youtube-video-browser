<template>
  <div class="container mx-auto flex justify-center mt-3 w-full">
    <div class="w-full mb-3">
      <label for="exampleSearch"></label>
      <input type="search" @input="search"
             class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
             id="exampleSearch" placeholder="Search youtube video ..."/>
    </div>
  </div>
</template>

<script>
import '@/assets/tailwind.css';

export default {
  name: "SearchBox",
  data() {
    return {
      keyword: ""
    }
  },
  methods: {
    search(event) {
      this.$emit('termChanged', event.target.value)
    }
  }
}
</script>

<style scoped>

</style>