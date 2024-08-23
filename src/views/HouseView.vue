<script setup>
import {useRouter} from 'vue-router'

const router = useRouter()

function houseId(){
    fetch("https://wizard-world-api.herokuapp.com/Houses/:id")
        .then(response => {
            return response.json()
        })
        .then(houseId)
    console.log(houseId)
    }

</script>



<template>





</template>


<style scoped>




</style>