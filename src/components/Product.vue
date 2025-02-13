<script>
  // Get id from url and fetch products information to be displayed
  export default {
    data() {
      return {
        product: null,
        hasImgCountBelowThree: null,
        discountedPrice: null,
        stars: null,
      }
    },
    methods: {
      async get_product_by_id(id){
        const response = await fetch(`https://dummyjson.com/products/${id}`)
        const data = await response.json()
        this.product = await data
      },
      get_star_rating(rating){
        const full = "../../assets/full.svg"
        const half = "../../assets/half.svg"
        const empty = "../../assets/empty.svg"
        const starList = []

        for (let index = 0; index < 5; index++) {
          if (rating > 1){
            starList.push(full)
          } else if (rating > .5 && rating > 0){
            starList.push(half)
          } else {
            starList.push(empty)
          }
          rating--
        }

        return starList
      }
    },
    async created() {
      console.log(this.$route.params.productId)
      this.$watch(() => this.$route.params.productId,
      this.get_product_by_id,
      {immediate : true})
      // this.product = await this.get_product_by_id(this.$route.params.productId)
      this.hasImgCountBelowThree = this.product.images.length < 3 ? true : false
      this.discountedPrice = (this.product.price - (this.product.price * this.product.discountPercentage / 100)).toFixed(2)
      this.stars = this.get_star_rating(this.product.rating)
    }
  }
</script>

<template>
  <main>
    <div id="container">
      <div id="images">
        <div v-for="image in product.images.slice(0,3)" class="mini" :style="{justifyContent: hasImgCountBelowThree ? 'start' : 'space-between' }">
          <img  :src="image" :alt="product.title">
        </div>
        <div id="big">
          <img :src="product.images[0]" alt="">
        </div>
      </div>

      <hgroup>
        <h1 id="title">
          {{ product.title }}
        </h1>
        <p id="discount">
          from {{this.discountedPrice }}$ <span id="vat"> (ink. vat) </span>
        </p>
        <p id="price">
          usally: <strong id="ordinary-price">{{ product.price }}$</strong> <span id="discountPercentage">-{{ product.discountPercentage }}%</span>
        </p>
        <div id="star-container">
          <span id="stars">
            <img v-for="star in stars" :src="star" alt="">
          </span>
          <span id="rating">({{ product.rating }})</span>
        </div>
      </hgroup>

      <input type="button" name="" id="add-button" value="Add to cart">
    </div>
  </main>

</template>

<style scoped>
  * {
    font-family: montserrat;
  }

  main {
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
  }

  img {
    width: 10em;
    height: auto;
    background-color: var(--grey);
  }

  p{
    line-height: .1em;
  }

  #container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1em 0;
    max-width: 30em;
    width: 95%;
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
  hgroup {
    box-sizing: border-box;
    width: 100%;
  }


  #title{
    color: var(--dark);
  }
  #discount{
    color: var(--red);
    font-weight: bold;
    font-size: 1.6rem;
  }
  #vat{
    color: var(--strong-grey);
    font-size: .9rem;
  }
  #price{

  }
  #ordinary-price{
    color:var(--light-dark);
    font-size: 1.1em;
    text-decoration: line-through;
  }
  #discountPercentage{
    color: var(--red);
    font-weight: bold;
  }
  #star-container {
    display: flex;
    align-items: center;
  }
  #stars > img {
    /* border: solid red; */
    background-color: var(--light);
    width: 1.5em;
    height: 1.5em;

  }
  #rating{
    margin-left: .5em;
    font-size: .9em;
    font-weight: bold;
    color: var(--strong-grey);
  }

  #add-button:hover {
    background-color: var(--fade-blue);
  }
  #add-button {
    background-color: var(--blue);
    padding: 16px 0;
    margin: 1em 0;
    font-size: 1.2em;
    font-weight: bold;
    color: var(--light);
    border: none;
  }
</style>
