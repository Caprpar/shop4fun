<script setup>
  import {ref} from 'vue'
  import ShopItems from "./components/ShopItems.vue";
  import Navbar from "./components/Navbar.vue";
  import CategoryList from "./components/CategoryList.vue";

  const cart = ref([])

  // cart variable
  function addToCart(product){
    cart.value.push(product)
    console.log("Cart items:")
    for (const product of cart.value) {
      console.log(` ${product.title}`)
    }
  }
</script>

<template>
  <Navbar :cart-count="cart.length"></Navbar>
  <CategoryList />
  <RouterView @add-to-cart="addToCart" /> <!-- Product skickar till cart -->
  <!-- <ShopItems></ShopItems> -->
</template>
