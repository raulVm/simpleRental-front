<template>
  <nav
    id="nav"
    class="relative flex flex-wrap items-center justify-between navbar-expand-lg px-2 bg-emerald-500"
    :style="type"
  >
    <div
      class="container px-4 mx-auto flex flex-wrap items-center justify-between"
    >      
      <div
        class="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start"
      >
        <router-link
          class="text-white text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
          to="/"
        >
        </router-link>
        <button
          class="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
          type="button"
          v-on:click="setNavbarOpen"
        >
          <i class="text-white fas fa-bars"></i>
        </button>
      </div>
      <div
        class="lg:flex flex-grow items-center"
        :class="[navbarOpen ? 'block' : 'hidden']"
        id="example-navbar-warning"
      >
        <ul class="py-2 w-full flex px-2 flex-col lg:flex-row list-none mr-auto">
          <li class="flex items-center">
            <propiedades-dropdown />
          </li>
          <li class="flex items-center">
            <a
              class="hover:text-black-500 text-black-700 px-3 py-2 flex items-center text-xs uppercase font-bold"
              href="https://www.creative-tim.com/learning-lab/tailwind/vue/overview/notus?ref=vn-index-navbar"
            >
              <i class="fa fa-solid fa-car-side" style="color:#f55600"></i> {{ $t("nav.vehicles") }}
            </a>
          </li>
          <li class="flex items-center">
            <a
              class="hover:text-black-500 text-black-700 px-3 py-2 flex items-center text-xs uppercase font-bold"
              href="https://www.creative-tim.com/learning-lab/tailwind/vue/overview/notus?ref=vn-index-navbar"
            >
              <i class="fa fa-solid fa-umbrella-beach" style="color:#f55600"></i> {{ $t("nav.atractions") }}
            </a>
          </li>
          <li class="flex items-center">
            <router-link to="/">
              <a
                class="hover:text-black-500 text-black-700 px-3 py-2 flex items-center text-xs uppercase font-bold"
              >
                <i class="fa fa-solid fa-house-damage" style="color:#f55600"></i> {{ $t("nav.home") }}
              </a>
            </router-link>
          </li>
        </ul>
        <ul class="w-2/12 py-2 flex  px-4 flex-col lg:flex-row list-none mr-auto">
          <li class="flex items-center">
            <div class="flex flex-wrap justify-center">
              <div class="w-8/12 sm:w-4/12 px-1">
                <img :src="image" />
              </div>
            </div>
          </li>
        </ul>
        <ul class="w-full py-2 flex flex-col lg:flex-row list-none lg:ml-auto">
          <!-- <li class="flex items-center"> -->
            <!-- <index-dropdown /> -->
          <!-- </li> -->
          <li class="flex items-center">
            <!-- <router-link
              to="/rivieraMaya"
              class="hover:text-black-500 text-black-700 px-3 py-2 font-normal  w-full whitespace-nowrap bg-transparent text-blueGray-700"
            >
              <i class="fa fa-solid fa-map" style="color:#f55600"></i> {{ $t("nav.riviera") }}
            </router-link> -->
            <router-link to="/rivieraMaya" >

              <a
                class="hover:text-black-500 text-black-700 px-3 py-2 flex items-center text-xs uppercase font-bold"
              >
                <i class="fa fa-solid fa-map" style="color:#f55600"></i> {{ $t("nav.riviera") }}
              </a>
            </router-link> 
          </li>
          <li class="flex items-center">
            <a
              class="hover:text-black-500 text-black-700 px-3 py-2 flex items-center text-xs uppercase font-bold"
              href="https://www.creative-tim.com/learning-lab/tailwind/vue/overview/notus?ref=vn-index-navbar"
            >
              <i class="fa fa-solid fa-users" style="color:#f55600"></i> {{ $t("nav.meet") }}
            </a>
          </li>
          <li class="flex items-center">
            <a
              class="hover:text-black-500 text-black-700 px-3 py-2 flex items-center text-xs uppercase font-bold"
              href="https://www.creative-tim.com/learning-lab/tailwind/vue/overview/notus?ref=vn-index-navbar"
            >
              <i class="fa fa-solid fa-handshake" style="color:#f55600"></i> {{ $t("nav.join") }}
            </a>
          </li>
          <li class="flex items-center">
            <a
              class="hover:text-black-500 text-black-700 px-3 py-2 flex items-center text-xs uppercase font-bold"
              href="https://www.creative-tim.com/learning-lab/tailwind/vue/overview/notus?ref=vn-index-navbar"
            >
              <i class="fa fa-solid fa-blog" style="color:#f55600"></i> {{ $t("nav.blog") }}
            </a>
          </li>
          <li>
            <div class="locale-switcher">
              <select class="form-select px-2 py-1 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full" aria-label="Default select example" v-model="$i18n.locale">
                <option value="en"> 
                  <img :src="Usa">English
                </option>
                <option value="es">Español</option>
              </select>
            </div>
          </li>
          <!-- <li class="flex items-center">
            <a
              class="hover:text-blueGray-500 text-blueGray-700 px-3 py-2 flex items-center text-xs uppercase font-bold"
              href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdemos.creative-tim.com%2Fvue-notus%2F%23%2F"
              target="_blank"
            >
              <i class="text-blueGray-400 fab fa-facebook text-lg leading-lg" />
              <span class="lg:hidden inline-block ml-2">Share</span>
            </a>
          </li>

          <li class="flex items-center">
            <a
              class="hover:text-blueGray-500 text-blueGray-700 px-3 py-2 flex items-center text-xs uppercase font-bold"
              href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fdemos.creative-tim.com%2Fvue-notus%2F%23%2F&text=Start%20your%20development%20with%20a%20Free%20Tailwind%20CSS%20and%20VueJS%20UI%20Kit%20and%20Admin.%20Let%20Vue%20Notus%20amaze%20you%20with%20its%20cool%20features%20and%20build%20tools%20and%20get%20your%20project%20to%20a%20whole%20new%20level.%20"
              target="_blank"
            >
              <i class="text-blueGray-400 fab fa-twitter text-lg leading-lg" />
              <span class="lg:hidden inline-block ml-2">Tweet</span>
            </a>
          </li>

          <li class="flex items-center">
            <a
              class="hover:text-blueGray-500 text-blueGray-700 px-3 py-2 flex items-center text-xs uppercase font-bold"
              href="https://github.com/creativetimofficial/vue-notus?ref=vn-index-navbar"
              target="_blank"
            >
              <i class="text-blueGray-400 fab fa-github text-lg leading-lg" />
              <span class="lg:hidden inline-block ml-2">Star</span>
            </a>
          </li>

          <li class="flex items-center">
            <button
              class="bg-emerald-500 text-white active:bg-emerald-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
              type="button"
            >
              <i class="fas fa-arrow-alt-circle-down"></i> Download
            </button>
          </li> -->
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
// import IndexDropdown from "@/components/Dropdowns/IndexDropdown.vue";
import PropiedadesDropdown from "@/components/Dropdowns/PropiedadesDropdown.vue";
import image from "@/assets/imagenes/logoSinFondo.png";
import Usa from "@/assets/imagenes/usa.png";
// import componentMenu from "@/assets/img/component-menu.png";
import $ from 'jquery'

export default {
  data() {
    return {
      navbarOpen: false,
      currentScrollValue: 0,
      extraNavClasses: '',
      position: 'fixed',
      menuClasses: 'ml-auto',
      colorOnScroll:'400', //´p
      type: 'background: #348e91;',
      expand: 'lg',
      isValueScroll: window.scrollY < 600,
      image: image,
      Usa:Usa,
    };
  },
  methods: {
    setLocale(locale) {
      this.$i18n.locale = locale
    },
    setNavbarOpen: function () {
      this.navbarOpen = !this.navbarOpen;
    },
    updateScroll() {
       if(window.scrollY >= 400){
        this.type = 'background: #348e91; opacity: 0.5;';
       }else{
        this.type = 'background: #348e91;'
       }
       if(window.scrollY < 550){
        $( "#nav" ).last().addClass( "top-0 fixed z-50" );
       }else{
        $( "#nav" ).odd().removeClass( "top-0 fixed z-50" );
       }
    }
  },
  components: {
    // IndexDropdown,
    PropiedadesDropdown,
  },
  created () {
    window.addEventListener('scroll', this.updateScroll);
  },
  unmounted () {
    window.removeEventListener('scroll', this.updateScroll);
  },
};
</script>
