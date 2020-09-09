import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";
import Counter from "@/components/Counter"

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/counter",
      name: "Counter",
      component: Counter
    }
  ] // Add a new route here in Part 2
});
