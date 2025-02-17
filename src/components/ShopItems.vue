<script>
import axios from "axios";
export default {
  props: {
    msg: String,
  },
  data() {
    return {
      products: null,
    };
  },
  async created() {
    // FIXME URL:n vill inte fetchas
    this.$watch(() => this.$route.params.category, this.get_url_by_category, {immediate:true})

  },
  methods: {
    async get_url_by_category(category) {
      const data = await this.get_data("https://dummyjson.com/products/categories")
      const categories = data.map(category => category.slug)
      let url = null

      if (!categories.includes(category)) {
        url = "https://dummyjson.com/products?limit=-1"
      } else {
        url = `https://dummyjson.com/products/category/${category}`
      }
      this.products = await this.get_data(url)
    },
    async get_data(url) {
      try {
        const response = await axios.get(url);
        return response.data;
      } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
      }
    },
    addToCart(product) {
      // console.log("added to cart: "+ product.title);
      // console.log("cart items: " + this.cart.length)
      this.$emit("add-to-cart", product)
    },
  },
};
</script>

<template>
  <ul id="cards">
    <template v-if="products">
      <div
        :key="product.id"
        id="card"
        v-for="[index, product] in Object.entries(this.products.products)"
        href=""
      >
        <li>
          <div id="image-container">
            <router-link :to="'/product/' + product.id">
              <img :src="product.images[0]" :alt="product.title" />
            </router-link>
          </div>
          <div id="info">
            <div id="title">
              <router-link :to="'/product/' + product.id">
                {{ product.title }}
              </router-link>
            </div>
            <div id="rating">* * * * * ({{ product.rating }})</div>
            <div id="price">
              {{ product.price }} $
              <input class="btn" type="button" value="Add" @click="addToCart(product)" />
            </div>
          </div>
        </li>
      </div>
    </template>
  </ul>
  <div></div>
</template>

<style scoped>
p {
  font-weight: bold;
}

img {
  width: auto;
  height: 8em;
  max-height: 100%;
  aspect-ratio: 1/1;
  object-fit: contain;
  /* margin: 1em; */
}

ul {
  padding: 0 1.5em;
}

li {
  box-sizing: border-box;
  width: 100%;
}

a {
  text-decoration: none;
  color: var(--dark);
}

#image-container {
  grid-area: image;
  box-sizing: border-box;
  object-fit: contain;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin-bottom: 1em; */
  /* border: solid red; */
}

#cards {
  overflow-y: auto;
  scrollbar-gutter: stable;
  box-sizing: border-box;
  list-style: none;
  display: flex;
  gap: 1em;
  /* flex-direction: row; */
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  display: flex;
  width: 100dvw;
  /* gap: .1em; */
}

#card {
  /* border: solid red; */
  display: grid;
  grid-template-areas:
    "image"
    "info";
  grid-template-rows: 100%;
  /* align-items: end; */
  align-items: end;

  margin-top: 1em;
  /* min-height: 15em; */
  width: 10em;
  height: 16em;
  max-height: 16em;
  background-color: var(--grey);
  border-radius: 0.5em 0.5em 0 0;
  margin-bottom: 0.5em;
}

#info {
  /* display: flex;
    flex-direction: column;
    justify-content: end; */
  height: fit-content;
  grid-area: info;
  width: 100%;
  padding: 0;
  font-family: Montserrat;
  background-color: var(--light);
}

#title {
  padding: 0.5em 0 0 0.5em;
  font-weight: bold;
  font-size: 1rem;
}
#rating {
  padding: 0.2em 0 0 0.5em;
  font-size: 0.7rem;
}
#price {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5em 0 0 0.5em;
  font-weight: bold;
  font-size: 0.9rem;
  padding-bottom: 0.5em;
}

.btn:hover {
  background-color: var(--fade-blue);
}
.btn {
  background-color: var(--blue);
  color: var(--light);
  border: none;
  border-radius: 8px;
  font-family: montserrat;
  font-size: 1.1em;
  padding: 8px 12px;
  margin-right: 0.5em;
  cursor: pointer;
}

/* Större skärmar (datorer) */
@media only screen and (min-width: 768px) {
  #card {
    width: 15em;
    height: 20em;
    max-height: 20em;
  }
  img {
    height: 11em;
  }
  .btn {
    font-size: 1.3em;
    padding: 8px 16px;
  }
  #title {
    font-size: 0.9rem;
  }
  #rating {
    font-size: 0.6rem;
  }
  #price {
    font-size: 0.8rem;
  }
}
</style>
