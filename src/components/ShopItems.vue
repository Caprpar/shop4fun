
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
  <div id="cards">
    <div id="card" v-for="[index, product] in Object.entries(this.products.products)">
    <div id="image-container">
      <img  :src="product.images[0]" alt="">
    </div>
    <div id="info">
      <div id="title">
        {{ product.title }}
      </div>
      <div id="rating">
        * * * * * ({{ product.rating }})
      </div>
      <div id="price">
        {{ product.price }} $
      </div>
    </div>
  </div>
  </div>

</template>

<style scoped>

  p {
    font-weight: bold;
  }

  img {
    width: auto;
    height: 9em;
    margin: 1em;
  }

  #cards {
    display: flex;
    width: 100vw;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  #card {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1em 0 1em 0;
    height: 16em;
    /* padding: 0 0 1em 0; */
    width: 10em;
    background-color: var(--grey);
    border-radius: 1em 1em 0 0;
  }

  #info {
    padding: 0 0 0 .5rem;
    font-family: Montserrat;
    background-color: var(--light);
    width: 100%;
    height: 100%;
  }

  #title {
    padding: .5em 0 0 0 ;
    font-weight: bold;
    font-size: .8rem;
  }
  #rating {
    padding: .2em 0 0 0 ;
    font-size: .6rem;
  }
  #price {
    padding: .5em 0 0 0 ;
    font-weight: bold;
    font-size: .8rem;

  }
</style>
