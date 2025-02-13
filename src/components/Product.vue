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
    <div id="images">
      <div v-for="image in product.images.slice(0,3)" class="mini" :style="{justifyContent: hasImgCountBelowThree ? 'start' : 'space-between' }">
        <img  :src="image" :alt="product.title">
      </div>
      <div id="big">
        <img :src="product.images[0]" alt="">
      </div>
    </div>
    <section>
      <div>
        {{ product.title }}
      </div>
      <div>
        From {{product.price - (product.price * product.discountPercentage / 100) }} ink vat
      </div>
      <div>
        usally {{ product.price }} -{{ product.discountPercentage }}%
      </div>
      <div>
        {{ product.rating }}
      </div>

    </section>
  </main>

</template>

<style scoped>

  main {
   display: flex;
   align-items: center;
   flex-direction: column;
  }
  img {
    width: 10em;
    height: auto;
    background-color: var(--grey);
  }
  #images {
  display: grid;
  gap: 1em;
  grid-template-areas:
  "mini mini mini"
  "big big big";
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 3fr;
  width: fit-content;
  width: 100%;
  height: auto;
  max-width: 30em;
  aspect-ratio: 3/4;

  }
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    contain: size;
  }

  #mini {
    grid-area: mini;
  }

  #big {
    grid-area: big;
  }
  section {
    width: 100%;
  }
</style>
