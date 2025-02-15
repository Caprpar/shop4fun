import { createRouter, createWebHashHistory } from "vue-router";

import ShopListView from "./views/ShopListView.vue";
import ProductView from "./views/ProductView.vue";
import HomeView from "./views/HomeView.vue";
// import Category from "./views/Category.vue";

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: HomeView,
      path: "/",
    },
    // {
    //   component: Category,
    //   path: "/list/:category",
    // },
    {
      component: ProductView,
      path: "/product/:productId",
    },
    {
      component: ShopListView,
      path: "/list/:category",
    },
  ],
});
