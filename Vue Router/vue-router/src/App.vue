<script setup>




</script>






<template>
<header>
<nav>
  <!--Use router links over a href links-->
  
  <RouterLink to="/">Home</RouterLink>
  <RouterLink to="/products">Products</RouterLink>
  <RouterLink to="">Contact Us</RouterLink>
</nav>

</header>
<main>
<router-view></router-view>


</main>
<footer>



</footer>


</template>




<style scoped>
main {
  min-height: 750px;
}

header,footer {
  height: 100px;
  background-color: lightgray;
}




</style>