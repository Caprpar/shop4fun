<script setup>

</script>

<template>
  <nav>
    <span id="logo">S4F</span>
    <span id="items">
      <span id="cart" class="icon"><div id="dot"></div><img src="../../assets/cart.svg" alt=""></span>
      <span id="burger" class="icon"><img src="../../assets/burger.svg" alt=""></span>
    </span>
  </nav>
</template>

<style socped>
  nav {
    /* top: 10em;
    position: sticky; */
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
    display: block;
    position: absolute;
    height: 13px;
    width: 13px;
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

  .icon {
    padding: 0 .5rem;
    /* border:solid var(--red); */
  }
</style>
