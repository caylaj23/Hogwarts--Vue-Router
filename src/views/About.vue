<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function curriculumButton() {
  router.push('/curriculum')
}
</script>

<template>
  <div class="wrapper">
    <h1>About us</h1>
    <p>This prestigious institution is steeped in centuries of magical tradition. Nestled amidst the enchanting
      landscape
      of Scotland, Hogwarts is more than just a school; it's a home for young witches and wizards seeking to unlock
      their full potential in a supportive and enriching environment. With a distinguished faculty, state-of-the-art
      facilities, and a diverse array of magical subjects, Hogwarts offers students an unparalleled education that
      prepares them for a lifetime of magical discovery and personal growth.</p>
    <button @click="curriculumButton()">View our curriculum!</button>

    <h1>Hogwarts Houses</h1>
    <p>Every student is sorted into one of four prestigious houses: Gryffindor, HufflePuff, RavenClaw, or Slytherin.
      Each house embodies unique traits and values, fostering a sense of belonging, camaraderie, and personal growth.
      Together, these houses form the foundation of Hogwarts, shaping the character and experiences of its students as
      they embark on their magical journey. </p>

    <div class="wizard-houses">
      <div class="gryffindor">
        <h2>Gryffindor</h2>
        <img @click="() => { $router.push(`/house/0367baf3-1cb6-4baf-bede-48e17e1cd005`) }"
          src="/Users/cjohnson345/Library/CloudStorage/OneDrive-Humana/Desktop/Vue Folder/Hogwarts- Vue Router/src/assets/thegryffindor.png"
          alt="gryffindor">
      </div>

      <div class="ravenclaw">
        <h2>Ravenclaw</h2>
        <img @click="() => { $router.push(`/house/805fd37a-65ae-4fe5-b336-d767b8b7c73a`) }"
          src="/Users/cjohnson345/Library/CloudStorage/OneDrive-Humana/Desktop/Vue Folder/Hogwarts- Vue Router/src/assets/ravenclaw.png"
          alt="ravenclaw">
      </div>

      <div class="hufflepuff">
        <h2>Hufflepuff</h2>
        <img @click="() => { $router.push(`/house/85af6295-fd01-4170-a10b-963dd51dce14`) }"
          src="/Users/cjohnson345/Library/CloudStorage/OneDrive-Humana/Desktop/Vue Folder/Hogwarts- Vue Router/src/assets/hufflepuff.png"
          alt="hufflepuff">
      </div>
      <div class="slytherin">
        <h2>Slytherin</h2>
        <img @click="() => { $router.push(`/house/a9704c47-f92e-40a4-8771-ed1899c9b9c1`) }"
          src="/Users/cjohnson345/Library/CloudStorage/OneDrive-Humana/Desktop/Vue Folder/Hogwarts- Vue Router/src/assets/slytherin.png"
          alt="slytherin">
      </div>

    </div>

  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

p {
  padding: 16px;
  max-width: 50%;
  text-align: center;
}

button {
  margin-top: 16px;
  margin-bottom: 100px;
  background-color: #222f5b;
  color: white;
  height: 40px;
  width: 200px;
  border: none;
  border-radius: 5px;
}

.houses {
  padding-top: 36px;
  display: flex;
  justify-content: center;
}

.gryffindor,
.ravenclaw,
.hufflepuff,
.slytherin {
  display: flex;
  height: 300px;
  width: 300px;
}
</style>


<!--For this assignment, you will be practicing using dynamic routes with Vue Router. You will add on to your existing Hogwarts website. For this assignment we would like you to:

- Display the four Hogwarts houses on the 'About.vue' with house images and house names
- When the user clicks on a house, they are directed to a new view that displays information about that specific house. To achieve this, you will need to:
Create a dynamic route in the vue-router configuration file. This route should be a part of the "/about" flow and should accept a houseId parameter
Create a new 'House.vue' view that can be used to display information about any of the four houses whenever the router navigates to your new route
In order for the 'House.vue' view to display information about the specific house that was selected, you much fetch the house information from the URL listed in the API docs (https://wizard-world-api.herokuapp.com/swagger/index.html)
HINT: https://wizard-world-api.herokuapp.com/Houses/:id
You will need to pass a houseID in the route so that your 'House.vue' view can access and use that ID to make the correct fetch/API call to get house information (you will need to reference how we accessed the route parameters using the route instance for the product  description view) -->