<template>
  <div class="w-full">
    <search-box @termChanged="termChanged"></search-box>
  </div>
</template>

<script>
import '@/assets/tailwind.css';
import SearchBox from './components/Search.vue'

export default {
  name: 'App',
  components: {
    SearchBox
  },
  methods: {
    termChanged(value) {
      console.log(value);
    }
  }
}
</script>

<style>
</style>
