<script setup>
import Product from "@/components/Product.vue";
import { reactive } from "vue";

const productsArray = reactive([]);
fetch("https://fakestoreapi.com/products")
  .then((response) => {
    return response.json();
  })
  .then((products) => {
    productsArray.push(...products);
  });
</script>

<template>
  <body>
    <h1>Check out our Products</h1>

    <div>
      <div class="productsContainer">
        <Product
          v-for="item in productsArray"
          :product="item"
          @product-clicked="
            (productId) => {
             $router.push(`/products/${item.id}`)
            }
          "
        ></Product>
      </div>
    </div>
  </body>
</template>

<style scoped>
.productsContainer {
  display: flex;
  flex-wrap: wrap;
}
</style>
