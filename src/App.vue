<script setup>
  import {ref} from 'vue'
  import ShopItems from "./components/ShopItems.vue";
  import Navbar from "./components/Navbar.vue";
  import CategoryList from "./components/CategoryList.vue";

  const cart = ref([])

  // cart variable
  function addToCart(product){
    cart.value.push(product)
    console.log(cart.value[0].title)
  }
  addToCart({title:"perfym"})
</script>

<template>
  <Navbar :cart-count="cart.length"></Navbar>   <!-- Hur tar navbar emot cart.l -->
  <CategoryList @product-added="addToCart" />
  <RouterView />
  <!-- <ShopItems></ShopItems> -->
</template>
