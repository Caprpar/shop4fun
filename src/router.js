import { createRouter, createWebHashHistory } from "vue-router";

import ShopListView from "./views/ShopListView.vue";
import ProductView from "./views/ProductView.vue";
import HomeView from "./views/HomeView.vue";

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: HomeView,
      path: "/",
    },
    {
      component: ProductView,
      path: "/product/:productId",
    },
    {
      component: ShopListView,
      path: "/list",
    },
  ],
});
