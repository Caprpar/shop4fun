
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
  <ul id="cards">
    <div>

    </div>
    <div :key="product.id" id="card" v-for="[index, product] in Object.entries(this.products.products)" href="">
      <li>
        <div id="image-container">
          <a href="">
            <img  :src="product.images[0]" :alt="product.title">
          </a>
        </div>
      <div id="info">
        <div id="title">
          <a href="">
            {{ product.title }}
          </a>
        </div>
        <div id="rating">
          * * * * * ({{ product.rating }})
        </div>
        <div id="price">
          {{ product.price }} $
          <a href="">
            <input class="btn" type="button" value="Add">
          </a>
        </div>
      </div>
    </li>
  </div>
  </ul>
  <div >

  </div>

</template>

<style scoped>

  p {
    font-weight: bold;
  }

  img {
    width: auto;
    height: auto;
    max-height: 8em;
    aspect-ratio: 1/1;
    object-fit: contain;
    /* margin: 1em; */
  }

  ul {
    padding: 0 1em;
  }

  li {
    box-sizing: border-box;
    width: 100%;
    width: 100%;
  }
  a {
    text-decoration: none;
    color: var(--dark);
  }

  #image-container {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 1em;
    /* border: solid red; */
  }

  #cards {
    overflow-y: auto;
    scrollbar-gutter: stable;
    /* padding: 01em; */
    box-sizing: border-box;
    list-style: none;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    /* padding: 0 1em; */
    /* width: 50em; */
    display: flex;
    width: 100dvw;
    gap: .1em;
  }

  #card {
    /* border: solid red; */
    display: flex;
    align-items: end;

    margin-top: 1em;
    min-height: 15em;
    width: 10em;
    background-color: var(--grey);
    border-radius: .5em .5em 0 0;
    margin-bottom: .5em;
  }

  #info {
    width: 100%;
    padding: 0;
    font-family: Montserrat;
    background-color: var(--light);
  }

  #title {
    padding: .5em 0 0 .5em ;
    font-weight: bold;
    font-size: .8rem;
  }
  #rating {
    padding: .2em 0 0 .5em ;
    font-size: .6rem;
  }
  #price {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .5em 0 0 .5em ;
    font-weight: bold;
    font-size: .8rem;
  }

  .btn:hover{
    background-color: var(--fade-blue);
  }
  .btn{
    background-color: var(--blue);
    color: var(--light);
    border: none;
    border-radius: 8px;
    font-family: montserrat;
    font-size: 1em;
    padding: 8px 12px;
    margin-right: .5em;
    cursor: pointer;
  }

/* Större skärmar (datorer) */
@media only screen and (min-width: 768px) {
  #card {
    width: 15em;
    height: 20em;
  }
}

</style>
