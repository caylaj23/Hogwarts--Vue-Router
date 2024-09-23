<script setup>
const props = defineProps(["photo"])
const emits = defineEmits(['click-photo'])



</script>






<template>
<div class="photos-container">


<button @click="$emit(click-photo)"></button>




</div>





</template>







<style scoped>
.photos-container {
    height: 300px;
    width: 300px;
}




</style>