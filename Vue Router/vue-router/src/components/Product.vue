<script setup>
const props = defineProps(['product'])
defineEmits(['productClicked'])

</script>


<template>
<div class="product-card" @click="$emit('productClicked', product.id)">
    <!---This lets you know that the product was clicked, but also the second parameter will allow you to filter what the separate product id's are-->
<img class="productImg" :src="product.image" alt="product image">
<p>{{ product.title }}</p>
<p>{{ product.price }}</p>
</div>



</template>



<style scoped>
.product-card {
    height: 400px;
    width: 400px;
    border: solid 1px lightgray;
    border-radius: 5px;
}
.productImg {
    height: 300px;
}

</style>