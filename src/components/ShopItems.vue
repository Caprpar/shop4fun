
<script>
import axios from "axios"
  export default {
    props: {
      msg: String
    },
    data() {
      return {
        products: null
      }
    },
    async created() {
      this.products = await this.get_data("https://dummyjson.com/products?limit=-1")
    },
    methods: {
      async get_data(url){
        try {
          const response = await axios.get(url)
          return response.data
        } catch (error) {
          console.error("Error fetching data:", error)
          throw error
        }
      }
    }
  };
</script>

<template>
  <div id="card" v-for="[index, product] in Object.entries(this.products.products)">
    <img  :src="product.images[0]" alt="">
    <div id="info">
      {{ product.price }}
    </div>
  </div>
</template>

<style scoped>

  p {
    font-weight: bold;
  }

  img {
    width: auto;
    height: 10em;
  }

  #card {
    margin: 2em;
    height: fit-content;
    width: fit-content;
    background-color: var(--grey);
    border-radius: 1em 1em 0 0;
  }

  #info {
    background-color: var(--light);
    width: 100%;
  }
</style>
