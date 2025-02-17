
<script>
import { routerKey } from 'vue-router';
  export default {
    created() {
      fetch("https://dummyjson.com/products/categories/")
        .then((response) => response.json())
        .then((categories) => {
          this.categories = categories;
        });
    },
    data() {
      return {
        categories: null
      };
    }
  };
</script>

<template>
  <ul>
    <li v-for="category in categories">
      <router-link class="link" :to="'/list/' + category.slug">
        {{ category.name }}
      </router-link>
      </li>
  </ul>
</template>

<style scoped>
  ul{
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 0;
    margin: 1em;
    list-style-type: none;
    overflow-y: scroll;
    /* width: 100vw; */
    gap: 1em;
  }
  li{
    padding: 0;
    margin: 0;
  }
  .link:hover{
    background-color: var(--dark);
    color: var(--light);
  }
  .link{
    text-decoration: none;
    display: flex;
    align-items: center;
    font-family: montserrat;
    font-weight: bold;
    font-size: .8em;
    border-radius: 16px;
    padding: 1em 2em;
    min-height: 2em;
    color: var(--dark);
    background-color: var(--grey);
  }

</style>
