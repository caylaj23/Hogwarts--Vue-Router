 
<script setup>
import { useRoute } from 'vue-router';
const route = useRoute()
 
import { ref } from 'vue';
 
let houseName = ref('')
let houseColours = ref('')
let houseFounder = ref('')
let houseAnimal = ref('')
let houseElement = ref('')
let houseGhost = ref('')
 
fetch(`https://wizard-world-api.herokuapp.com/Houses/${route.params.id}`)
.then(response => {
    return response.json()
})
.then(house => {
            houseName.value = house.name
            houseColours.value = house.colours
            houseFounder.value = house.founder
            houseAnimal.value = house.animal
            houseElement.value = house.element
            houseGhost.value = house.ghost
    
})
 
</script>
 
 
<template>
    <div class="container">
<p>House Name: {{ houseName}}</p>
<p>House Colours:{{ houseColours }}</p>
<p>House Founder:{{ houseFounder }}</p>
<p>House Animal:{{ houseAnimal }}</p>
<p>House Element:{{ houseElement }}</p>
<p>House Ghost:{{ houseGhost }}</p>
</div>
 
</template>
 
 
 
<style scoped>
.container{
    text-align: center;
}
</style>
 