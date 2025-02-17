<script setup>
  import {defineProps, ref} from 'vue'
  const props = defineProps({
    cartCount: {
      required: true,
      type: Number,
    }
  })

</script>

<template>

  <nav>
    <router-link to="/" class="no-deco"><span id="logo">S4F</span></router-link>
    <span id="items">
      <span id="cart" class="icon"><div id="dot">{{ props.cartCount }}</div><img src="../../assets/cart.svg" alt=""></span>
      <span id="burger" class="icon"><img src="../../assets/burger.svg" alt=""></span>
    </span>
  </nav>
  <div id="filler"></div>
</template>

<style scoped>
  #filler{
    height: 5em;
  }
  nav {
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 5em;
    width: 100vw;
    background-color: var(--dark);
  }
  span {
    display: flex;
    justify-content: center;
    padding: 0 1.5rem;
    font-size: 2em;
    font-weight: bold;
    color: var(--light);
    font-family: Montserrat;
  }
  #dot {
    /* Appears if cart contains items, display: block = on, none = off */
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    position: absolute;
    height: 23px;
    width: 23px;
    left: 39px;
    bottom: 29px;
    background-color: var(--red);
    border: var(--dark) 8px solid ;
    border-radius: 100px;
  }

  #cart {
    position: relative;
    transform: scale(.6);
  }
  #burger {
    transform: scale(.5);
  }
  .no-deco {
    text-decoration: none;
  }

  .icon {
    padding: 0 .5rem;
    /* border:solid var(--red); */
  }
</style>
