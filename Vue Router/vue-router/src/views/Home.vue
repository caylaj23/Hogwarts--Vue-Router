<script setup>

//We need to import the useRouter function before we can access the router in the script
import {useRouter} from 'vue-router'
 
 
//creating an instance of the router
const router = useRouter()
 
//This is the syntax for accessing router instance in the script and pushing to it
function goToProductsPage() {
    router.push('/products')
}
 
</script>
 
 
<template>
<body>
    <h1>Welcome to our website!</h1>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est praesentium iusto eveniet, dicta, quidem sequi deleniti nostrum saepe soluta dolor architecto ad nulla? Reprehenderit hic laborum nesciunt nostrum, quos labore cumque illo vitae minima ipsum, esse omnis iste id ullam tenetur? Sequi repudiandae incidunt ex porro a explicabo reiciendis minus quas vel officia, sapiente aliquid pariatur quos dolore necessitatibus error!</p>
    <!-- <button @click="$router.push('/products')">View Products</button> -->
                <!-- $router is accessing directly to the router -->
            <button @click="goToProductsPage()">View Products</button>
</body>
</template>
 
<style scoped>
body{
    text-align: center;
}
 
</style>
 

<style scoped>

body{
    text-align: center;
}




</style>
