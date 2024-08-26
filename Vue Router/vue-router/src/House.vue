<script setup>


</script>


<template>




</template>


<style scoped>



</style>


<!---For this assignment, you will be practicing using dynamic routes with Vue Router. You will add on to your existing Hogwarts website. For this assignment we would like you to:

- Display the four Hogwarts houses on the 'About.vue' with house images and house names
- When the user clicks on a house, they are directed to a new view that displays information about that specific house. To achieve this, you will need to:
Create a dynamic route in the vue-router configuration file. This route should be a part of the "/about" flow and should accept a houseId parameter
Create a new 'House.vue' view that can be used to display information about any of the four houses whenever the router navigates to your new route
In order for the 'House.vue' view to display information about the specific house that was selected, you much fetch the house information from the URL listed in the API docs (https://wizard-world-api.herokuapp.com/swagger/index.html)
HINT: https://wizard-world-api.herokuapp.com/Houses/:id
You will need to pass a houseID in the route so that your 'House.vue' view can access and use that ID to make the correct fetch/API call to get house information (you will need to reference how we accessed the route parameters using the route instance for the product  description view)
- The four houseIDs needed to fetch the correct house info from the wizard-world-api are:
Gryffindor- 0367baf3-1cb6-4baf-bede-48e17e1cd005
HufflePuff- 85af6295-fd01-4170-a10b-963dd51dce14
Slytherin- a9704c47-f92e-40a4-8771-ed1899c9b9c1
Ravenclaw- 805fd37a-65ae-4fe5-b336-d767b8b7c73a