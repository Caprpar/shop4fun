<script>
  // Get id from url and fetch products information to be displayed
  export default {
    data() {
      return {
        product: null,
        hasImgCountBelowThree: null,
      }
    },
    methods: {
      async get_product_by_id(id){
        const response = await fetch(`https://dummyjson.com/products/${id}`)
        const data = await response.json()
        return await data
      }
    },
    async created() {
      this.product = await this.get_product_by_id(this.$route.params.productId)
      this.hasImgCountBelowThree = this.product.images.length < 3 ? true : false
    }
  }
</script>

<template>
  <main>
    <p>{{ product.title }}</p>
    <div id="images">
      <div id="mini" :style="{justifyContent: hasImgCountBelowThree ? 'start' : 'space-between' }">
        <div v-for="image in product.images.slice(0,3)"> <!-- get three images from index 1 -->
          <img v-if="image" :src="image" :alt="product.title">
          <div v-else id="placeholder"></div>
        </div>
      </div>
      <div id="big">
        <img :src="product.images[0]" alt="">
      </div>
    </div>
  </main>

</template>

<style scoped>
  main {
    width: 100%;
    padding: 0 1em;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  img {
    width: 10em;
    height: auto;
    background-color: var(--grey);
  }
  #images {
    /* border: solid; */
    display: grid;
    grid-template-areas:
    "mini"
    "big";
    grid-template-rows: .3fr 1fr;
    /* grid-template-columns: .3fr 1fr; */
    gap: .5em;
    /* max-width: 22em; */
  }
  #mini > div{
    height: 100%;
    width: 100%;
  }

  #mini > div > img{
    width: auto;
    object-fit: contain;
    height: 100%;
    padding: .5em;
    aspect-ratio: 1/1;
    contain: size;
    /* margin-right: 1em; */
  }
  #mini {
    display: flex;
    justify-content: space-around;
    flex-basis: auto;
    gap: .5em;
    flex-direction: row;
  }
  #placeholder {
    height: 6em;
    width: 6em;
    background-color: var(--grey);
  }
  #big {
    background-color: var(--grey);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: auto;
    aspect-ratio: 1/1;
  }
</style>
