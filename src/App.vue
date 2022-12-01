<template>
  <div class="w-full">
    <search-box></search-box>
  </div>
</template>

<script>
import '@/assets/tailwind.css';
import SearchBox from './components/Search.vue'

export default {
  name: 'App',
  components: {
    SearchBox
  }
}
</script>

<style>
</style>
