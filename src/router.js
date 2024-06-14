import Vue from 'vue';
import Router from 'vue-router';
import Login from "@/views/auth/Login.vue";
// import Register from "@/views/auth/Register.vue";
import Landing from "@/views/Landing.vue";
// import Profile from "@/views/Profile.vue";
import Index from "@/views/Index.vue";
import Dashboard from "@/views/admin/Dashboard.vue";
import Settings from "@/views/admin/Settings.vue";
import RivieraMaya from "@/views/externo/RivieraMaya.vue";
// import Tables from "@/views/admin/Tables.vue";
// import Maps from "@/views/admin/Maps.vue";

Vue.use(Router);

export default new Router({
  linkExactActiveClass: 'active',
  routes: [
    {
      path: "/admin",
      name: "admin",
      component: {default: Dashboard},
    },
    {
      path: "/auth",
      name: "auth",
      component: {default:Login},
    },
    {
      path: "/landing",
      name: 'landing',
      component: {default:Landing},
    },
    {
      path: "/profile",
      component: Settings,
    },
    {
      path: "/rivieraMaya",
      name: "rivieraMaya",
      component: RivieraMaya,
    }, 
    {
      path: "/",
      component: Index,
    },
    { path: "/:pathMatch(.*)*", redirect: "/" },
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
