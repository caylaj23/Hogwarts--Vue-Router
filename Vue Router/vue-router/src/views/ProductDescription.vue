<script setup>
import { useRoute } from 'vue-router';
import { ref } from 'vue';
//gives access to the current route

// the route holds / has the params (among other things

const route = useRoute()

let productImage = ref('')
let productName = ref('')
let productDesc = ref('')
let productPrice = ref('')


// we can create a ref variable for every piece of data - image, name, description

// create a reactive object that contains properties for image, name, description, etc

//in order to load the product info, we need to get the data for the product

fetch(`https://fakestoreapi.com/products/${route.params.id}`)
.then(response => {
    return response.json()
})
.then(product => {
productImage.value = product.image
productName.value = product.title
productDesc.value = product.desc
productPrice.value = product.price
console.log(product)
})

</script>



<template>
<body>
    <h1>Product description</h1>
        <img :src="productImage" alt="">
        <p>{{ productName }}</p>
        <p>{{ productDesc }}</p>
        <p>{{ productPrice }}</p>
        <div>

        </div>
</body>



</template>


<style scoped>



</style>