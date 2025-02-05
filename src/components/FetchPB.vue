
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
  <img alt="" src="/assets/full.svg" />
  <img alt="" src="/assets/fox.jpeg" />

  <p>{{ msg }}</p>
  <div v-for="[index, product] in Object.entries(this.products.products)">
    <img  :src="product.images[0]" alt="">{{product.category}}
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
</style>
