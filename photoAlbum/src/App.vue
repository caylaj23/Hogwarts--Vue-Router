<script setup>
import './components/photos.vue'
import {ref} from vue
import { reactive } from 'vue';

const photos = reactive({




})



</script>








<template>
<div class="album-container">
  <p v-for="photo in photos" :src="photo.url"></p>
</div>






</template>








<style scoped>
body {
  background-color: red;
  color: white;
}



</style>