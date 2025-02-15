<script setup>
  // import CitiesList from "./components/CitiesList.vue";
  // import HelloWorld from "./components/HelloWorld.vue";
  import ShopItems from "./components/ShopItems.vue";
  import Navbar from "./components/Navbar.vue";
import CategoryList from "./components/CategoryList.vue";

</script>

<template>
  <Navbar></Navbar>
  <CategoryList />
  <RouterView />
  <!-- <ShopItems></ShopItems> -->
</template>
