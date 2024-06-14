import Vue from 'vue';
import App from './App.vue';
import router from './router';
// import { createWebHistory, createRouter } from "vue-router";

// styles
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@/assets/styles/tailwind.css";

/* import font awesome icon component */
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
// import vSelect from 'vue-select'
// import 'vue-select/dist/vue-select.css';


library.add(faUserSecret)

import i18n from './i18n'
import vuetify from './plugins/vuetify'
import 'vuetify/dist/vuetify.min.css'
import VueVideoSection from 'vue-video-section'
import VDatePicker from './plugins/vuetify'
// import vSelect from './plugins/vuetify'
// import i18n from '@/plugins/i18n'
// import VueI18n from "vue-i18n/types";
// import createI18n from "vue-i18n-bridge";
// import VueI18n from "vue-i18n/types";
// import { VueI18n } from "vue-i18n";

// import * as createI18n from "vue-i18n";
// const i18n = createI18n({
//   globalInjection: true,
//   locale: navigator.language.startsWith('es')? 'es' : 'en',
//   fallbackLocale: 'en',
//   messages: {
//     en: require("./locale/en.json"),
//     es: require("./locale/es.json"),
//   },
// })

// const i18n = createI18n({
//   globalInjection: true,
//   locale: navigator.language.startsWith('es')? 'es' : 'en',
//   fallbackLocale: 'en',
//   messages: {
//     en: require("./locale/en.json"),
//     es: require("./locale/es.json"),
//   },
// });


// routes

// const routes = [
//   {
//     path: "/admin",
//     redirect: "/admin/dashboard",
//     component: Admin,
//     children: [
//       {
//         path: "/admin/dashboard",
//         component: Dashboard,
//       },
//       {
//         path: "/admin/settings",
//         component: Settings,
//       },
//       {
//         path: "/admin/tables",
//         component: Tables,
//       },
//       {
//         path: "/admin/maps",
//         component: Maps,
//       },
//     ],
//   },
//   {
//     path: "/auth",
//     redirect: "/auth/login",
//     component: Auth,
//     children: [
//       {
//         path: "/auth/login",
//         component: Login,
//       },
//       {
//         path: "/auth/register",
//         component: Register,
//       },
//     ],
//   },
//   {
//     path: "/landing",
//     component: Landing,
//   },
//   {
//     path: "/profile",
//     component: Profile,
//   },
//   {
//     path: "/",
//     component: Index,
//   },
//   { path: "/:pathMatch(.*)*", redirect: "/" },
// ];

// const router = createRouter({
//   history: createWebHistory(),
//   routes,
// });

/* add icons to the library */
Vue.component('font-awesome-icon', FontAwesomeIcon)
// Vue.component('v-select', vSelect)
Vue.component('vuetify',vuetify);
Vue.component('vue-video-section', VueVideoSection)
Vue.component('v-date-picker', VDatePicker)
// createApp(App).use(router).use(i18n)
// .component('font-awesome-icon', FontAwesomeIcon).mount("#app");
new Vue({
  router,
  i18n,
  vuetify,
  render: h => h(App)
}).$mount('#app');
