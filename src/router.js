import { createRouter, createWebHashHistory } from "vue-router";

import ShopListView from "./views/ShopListView.vue";
import ProductView from "./views/ProductView.vue";
import HomeView from "./views/HomeView.vue";

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: ProductView,
      path: "/product/:productId",
    },
    {
      component: HomeView,
      path: "/",
    },
    {
      component: ShopListView,
      path: "/list",
    },
  ],
});
