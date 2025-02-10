<script>
  // Get id from url and fetch products information to be displayed
  export default {
    data() {
      return {
        product: null,
      }
    },
    methods: {
      async get_product_by_id(id){
        const response = await fetch(`https://dummyjson.com/products/${id}`)
        console.log(`https://dummyjson.com/products/${id}`)
        const data = await response.json()
        return await data
      }
    },
    async created() {
      this.product = await this.get_product_by_id(this.$route.params.productId)
    }
  }
</script>

<template>
  <p>{{this.product.title}}</p>
</template>

<style scoped>
  p {
    font-weight: bold;
  }
</style>
