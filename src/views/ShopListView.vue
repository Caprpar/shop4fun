<script setup>
  import ShopItems from "../components/ShopItems.vue";
  import { defineEmits } from "vue";

  const emit = defineEmits(["add-to-cart"])

  function addToCart(product) {
    emit("add-to-cart", product);
  }
</script>

<template>
  <ShopItems @add-to-cart="addToCart" />
</template>
