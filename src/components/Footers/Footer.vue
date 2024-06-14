<template>
  <footer class="relative bg-blueGray-200 pt-8 pb-6">
    <div
      class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
      style="transform: translateZ(0);"
    >
      <svg
        class="absolute bottom-0 overflow-hidden"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        version="1.1"
        viewBox="0 0 2560 100"
        x="0"
        y="0"
      >
        <polygon
          class="text-blueGray-200 fill-current"
          points="2560 0 2560 100 0 100"
        ></polygon>
      </svg>
    </div>
    <div class="container mx-auto px-4">
      <div class="flex flex-wrap text-center lg:text-left">
        <div class="w-full lg:w-3/12 px-4">
          <img :src="image" />
          <h4 class="text-3xl font-semibold">{{ $t("location") }}</h4>
          <h5 class="text-lg mt-0 mb-2 text-blueGray-600">
            <i class="fas fa-map-pin" style="color: #015253;"></i> Playa del Carmen, QRoo.
          </h5>
          <h5 class="text-lg mt-0 mb-2 text-blueGray-600">
            <i class="fas fa-map-pin" style="color: #015253;"></i> Xalapa, Enríquez, Ver.
          </h5>
          <button class="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
            <i class="fas fa-globe"></i> {{ $t("button.trips") }}
          </button>
        </div>
        <div class="w-full lg:w-3/12 px-4">
          <h4 class="text-3xl font-semibold">{{ $t("service") }}</h4>
          <ul class="list-unstyled">
            <li class="flex items-center">
              <a
              class="hover:text-black-500 text-black-700 px-3 py-2 flex items-center text-xs uppercase font-bold"
              href="https://www.creative-tim.com/learning-lab/tailwind/vue/overview/notus?ref=vn-index-navbar"
            ><i class="fa fa-solid fa-city" style="color:#f55600"></i> {{ $t("nav.propiedades") }}</a>
            </li>
            <li class="flex items-center">
              <a
              class="hover:text-black-500 text-black-700 px-3 py-2 flex items-center text-xs uppercase font-bold"
              href="https://www.creative-tim.com/learning-lab/tailwind/vue/overview/notus?ref=vn-index-navbar"
            ><i class="fa fa-solid fa-car-side" style="color:#f55600"></i> {{ $t("nav.vehicles") }}</a>
            </li>
            <li class="flex items-center">
              <a
              class="hover:text-black-500 text-black-700 px-3 py-2 flex items-center text-xs uppercase font-bold"
              href="https://www.creative-tim.com/learning-lab/tailwind/vue/overview/notus?ref=vn-index-navbar"
            ><i class="fa fa-solid fa-umbrella-beach" style="color:#f55600"></i> {{ $t("nav.atractions") }}</a>
            </li>
            <li class="flex items-center">
              <a
              class="hover:text-black-500 text-black-700 px-3 py-2 flex items-center text-xs uppercase font-bold"
              href="https://www.creative-tim.com/learning-lab/tailwind/vue/overview/notus?ref=vn-index-navbar"
            ><i class="fa fa-solid fa-house-damage" style="color:#f55600"></i> {{ $t("nav.home") }}</a>
            </li>
            <li class="flex items-center">
              <a
              class="hover:text-black-500 text-black-700 px-3 py-2 flex items-center text-xs uppercase font-bold"
              href="https://www.creative-tim.com/learning-lab/tailwind/vue/overview/notus?ref=vn-index-navbar"
            ><i class="fa fa-solid fa-map" style="color:#f55600"></i> {{ $t("nav.riviera") }}</a>
            </li>
            <li class="flex items-center">
              <a
              class="hover:text-black-500 text-black-700 px-3 py-2 flex items-center text-xs uppercase font-bold"
              href="https://www.creative-tim.com/learning-lab/tailwind/vue/overview/notus?ref=vn-index-navbar"
            ><i class="fa fa-solid fa-users" style="color:#f55600"></i> {{ $t("nav.meet") }}</a>
            </li>
            <li class="flex items-center">
              <a
              class="hover:text-black-500 text-black-700 px-3 py-2 flex items-center text-xs uppercase font-bold"
              href="https://www.creative-tim.com/learning-lab/tailwind/vue/overview/notus?ref=vn-index-navbar"
            ><i class="fa fa-solid fa-handshake" style="color:#f55600"></i> {{ $t("nav.join") }}</a>
            </li>
            <li class="flex items-center">
              <a
              class="hover:text-black-500 text-black-700 px-3 py-2 flex items-center text-xs uppercase font-bold"
              href="https://www.creative-tim.com/learning-lab/tailwind/vue/overview/notus?ref=vn-index-navbar"
            ><i class="fa fa-solid fa-blog" style="color:#f55600"></i> {{ $t("nav.blog") }}</a>
            </li>
          </ul>
        </div>
        <div class="w-full lg:w-4/12 px-4">
          <h4 class="text-3xl font-semibold">{{ $t("contac") }}</h4>
          <div class="flex flex-wrap items-top mb-6">
            <div class="w-full lg:w-12/12 px-4 ml-auto text-center">
              <button
                class="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <i class="fab fa-facebook-square"></i>
              </button>
              <button
                class="bg-white text-red-500 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <i class="fab fa-youtube"></i>
              </button>
              <button
                class="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <i class="fab fa-instagram"></i>
              </button>
              <button
                class="bg-white text-emerald-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <i class="fab fa-whatsapp"></i>
              </button>
              <span
                class="block uppercase text-blueGray-500 text-sm font-semibold mb-2"
              >
                <i class="fas fa-envelope text-lightBlue-400"></i> reserva@simplerental.mx 
              </span>
            </div>
          </div>
          <div class="flex flex-wrap items-top mb-6">
            <div class="w-full lg:w-6/12 px-4 ml-auto">
              <div class="relative flex w-full flex-wrap items-stretch mb-3">
                <label>{{ $t('form.name') }} *</label>
                <span class="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-2 py-1">
                  <i class="fas fa-pen"></i>
                </span>
                <input type="text" class="px-2 py-1 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pr-10"/>
              </div>
              <div class="relative flex w-full flex-wrap items-stretch mb-3">
                <label>{{ $t('form.secondLast') }} </label>
                <span class="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-2 py-1">
                  <i class="fas fa-pen"></i>
                </span>
                <input type="text" class="px-2 py-1 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pr-10"/>
              </div>
              <div class="relative flex w-full flex-wrap items-stretch mb-3">
                <label>{{ $t('form.phone') }} *</label>
                <span class="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-2 py-1">
                  <i class="fas fa-phone"></i>
                </span>
                <input type="text"  class="px-2 py-1 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pr-10"/>
              </div>
            </div>
            <div class="w-full lg:w-6/12 px-4">
              <div class="relative flex w-full flex-wrap items-stretch mb-3">
                <label>{{ $t('form.firstLast') }} *</label>
                <span class="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-2 py-1">
                  <i class="fas fa-pen"></i>
                </span>
                <input type="text"  class="px-2 py-1 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pr-10"/>
              </div>
              <div class="relative flex w-full flex-wrap items-stretch mb-3">
                <label>{{ $t('form.mail') }} </label>
                <span class="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-2 py-1">
                  <i class="fas fa-envelope"></i>
                </span>
                <input type="text"  class="px-2 py-1 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pr-10"/>
              </div>
              <div class="relative flex w-full flex-wrap items-stretch mb-3">
                <label>{{ $t('form.subject') }} *</label>
                <span class="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-2 py-1">
                  <i class="fas fa-pen"></i>
                </span>
                <input type="text" class="px-2 py-1 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pr-10"/>
              </div>
            </div>
            <div class="w-full lg:w-12/12 px-4">
              <div class="relative flex w-full flex-wrap items-stretch mb-3">
                <label>{{ $t('form.message') }} *</label>
                <span class="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-2 py-1">
                  <i class="fas fa-comment"></i>
                </span>
                <input type="text"  class="px-2 py-1 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pr-10"/>
                <br>
                <button class="text-emerald-500 bg-transparent border border-solid border-emerald-500 hover:bg-emerald-500 hover:text-white active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                  <i class="fas fa-paper-plane"></i> {{ $t("button.send") }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr class="my-6 border-blueGray-300" />
      <div
        class="flex flex-wrap items-center md:justify-between justify-center"
      >
        <div class="w-full md:w-4/12 px-4 mx-auto text-center">
          <div class="text-sm text-blueGray-500 font-semibold py-1">
            Copyright © {{ date }} SIMPLE RENTAL
            <a
              href="https://www.creative-tim.com?ref=vn-footer"
              class="text-blueGray-500 hover:text-blueGray-800"
            >
              Creative Baxin
            </a>
            .
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
import image from "@/assets/imagenes/logoLetras.png";
export default {
  data() {
    return {
      date: new Date().getFullYear(),
      image:image
    };
  },
};
</script>
