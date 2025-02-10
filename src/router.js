import { createRouter, createWebHashHistory } from "vue-router";

import ShopListView from "./views/ShopListView.vue";
import ContactsView from "./views/ContactsView.vue";
import HomeView from "./views/HomeView.vue";

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: ContactsView,
      path: "/contacts",
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
