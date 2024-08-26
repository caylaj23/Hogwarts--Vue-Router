<script setup>
import {useRouter} from 'vue-router'
import {ref} from "vue";

const route = useRouter()

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
        .then(houseId => {
            houseName.value = houseId.name
            houseColours.value = houseId.colours
            houseFounder.value = houseId.founder
            houseAnimal.value = houseId.animal
            houseElement.value = houseId.element
            houseGhost.value = houseId.ghost
        })


</script>



<template>

<p>{{ houseName}}</p>
<p>{{ houseColours }}</p>
<p>{{ houseFounder }}</p>
<p>{{ houseAnimal }}</p>
<p>{{ houseElement }}</p>
<p>{{ houseGhost }}</p>




</template>


<style scoped>




</style>