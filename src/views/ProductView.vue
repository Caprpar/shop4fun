<script setup>
import Product from "../components/Product.vue";
import { defineEmits } from "vue";

const emit = defineEmits(["add-to-cart"]);

function addToCart(product) {
  emit("add-to-cart", product);
}
</script>

<template>
  <Product @add-to-cart="addToCart" />
</template>
