<template>
  <div>
    <index-navbar />
    <Portada :img="Bienvenido" :textoBanner="textoBanner" />
    
    <section class="relative py-16 bg-blueGray-200">
        <div class="container mx-auto px-4">
          <div
            class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64"
          >
            <BarraRedes/>
            <div class="text-center mt-12">
              <h3
                class="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2"
              >
                {{ $t("service") }}
              </h3>
            </div>
            <div class="px-6">
              <div class="flex flex-wrap text-center justify-center">
                <div
                  class="w-full lg:w-3/12 px-4 lg:order-3 lg:text-center lg:self-center"
                >
                  <div class="py-3 px-3 mt-32 sm:mt-0">
                    <div
                      class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white"
                    >
                      <!-- <i class="fas fa-car" style="color: #015253;"></i> -->
                      <img
                        alt="..."
                        :src="AlquilerV"
                        class="shadow-lg rounded-full mx-auto max-w-120-px"
                      />
                    </div>
                    <h6 class="text-xl mb-1 font-semibold">
                      {{ $t("optionService.car") }}
                    </h6>
                  </div>
                </div>
                <div
                  class="w-full lg:w-3/12 px-4 lg:order-3 lg:text-center lg:self-center"
                >
                  <div class="py-3 px-3 mt-32 sm:mt-0">
                    <div
                      class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white"
                    >
                      <!-- <i class="fas fa-city" style="color: #015253;"></i> -->
                      <img
                        alt="..."
                        :src="AlquilerI"
                        class="shadow-lg rounded-full mx-auto max-w-120-px"
                      />
                    </div>
                    <h6 class="text-xl mb-1 font-semibold">
                      {{ $t("optionService.estate") }}
                    </h6>
                  </div>
                </div>
                <div
                  class="w-full lg:w-3/12 px-4 lg:order-3 lg:text-center lg:self-center"
                >
                  <div class="py-3 px-3 mt-32 sm:mt-0">
                    <div
                      class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white"
                    >
                      <!-- <i class="fas fa-map" style="color: #015253;"></i> -->
                      <img
                        alt="..."
                        :src="AtraccionesT"
                        class="shadow-lg rounded-full mx-auto max-w-120-px"
                      />
                    </div>
                    <h6 class="text-xl mb-1 font-semibold">
                      {{ $t("optionService.tourist") }}
                    </h6>
                  </div>
                </div>
                <div
                  class="w-full lg:w-3/12 px-4 lg:order-3 lg:text-center lg:self-center"
                >
                  <div class="py-3 px-3 mt-32 sm:mt-0">
                    <div
                      class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white"
                    >
                      <!-- <i class="fas fa-comments-dollar" style="color: #015253;"></i> -->
                      <img
                        alt="..."
                        :src="PropiedadesV"
                        class="shadow-lg rounded-full mx-auto max-w-120-px"
                      />
                    </div>
                    <h6 class="text-xl mb-1 font-semibold">
                      {{ $t("optionService.properties") }}
                    </h6>
                  </div>
                </div>
                <div
                  class="w-full lg:w-3/12 px-4 lg:order-3 lg:text-center lg:self-center"
                >
                  <div class="py-3 px-3 mt-32 sm:mt-0">
                    <div
                      class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white"
                    >
                      <!-- <i class="fas fa-paw" style="color: #015253;"></i> -->
                      <img
                        alt="..."
                        :src="reciclaA"
                        class="shadow-lg rounded-full mx-auto max-w-120-px"
                      />
                    </div>
                    <h6 class="text-xl mb-1 font-semibold">
                      {{ $t("optionService.recycle") }}
                    </h6>
                  </div>
                </div>
              </div>
              <div class="mt-10 py-10 border-t border-blueGray-200 text-center">
                <div
                  class="w-full lg:w-12/12 px-8 lg:order-3 lg:text-center lg:self-left"
                >
                  <v-carousel
                    cycle
                    :items-to-show="2.5"
                    :show-arrows="false"
                  >
                    <v-carousel-item
                      v-for="(video1, i) in videos"
                      :key="i"
                    >
                        <v-row
                          class="fill-height"
                          align="center"
                          justify="center"
                        >
                        <div class="text-h2">
                          <!-- <video  autoplay loop muted>
                            <source
                              :src="video1.video"
                              type="video/mp4"
                            />
                          </video> -->
                          <vue-video-section
                            :elementId="'video1'"
                            :ref="'video1'"
                            :mp4Source="video1.video"
                            :mobileBreakpoint="992"
                            :desktopHeight="450"
                            :mobileHeight="450"
                            :playsinline="true"
                            :loop="true"
                            :autoplay="true"
                            :autobuffer="true"
                            :muted="true"
                          >
                          </vue-video-section>
                        </div>
                      </v-row>
                      
                    </v-carousel-item>
                  </v-carousel>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    <footer-component />
  </div>
</template>
<script>
import IndexNavbar from "@/components/Navbars/IndexNavbar.vue";
import FooterComponent from "@/components/Footers/Footer.vue";
import Bienvenido from "@/assets/imagenes/bienvenido.jpeg";
import patternVue from "@/assets/img/pattern_vue.png";
import componentBtn from "@/assets/img/component-btn.png";
import componentProfileCard from "@/assets/img/component-profile-card.png";
import componentInfoCard from "@/assets/img/component-info-card.png";
import componentInfo2 from "@/assets/img/component-info-2.png";
import componentMenu from "@/assets/img/component-menu.png";
import componentBtnPink from "@/assets/img/component-btn-pink.png";
import documentation from "@/assets/img/documentation.png";
import login from "@/assets/img/login.jpg";
import profile from "@/assets/img/profile.jpg";
import landing from "@/assets/img/landing.jpg";
import Portada from "@/views/Portada.vue";
import Video1 from "@/assets/video/video-1.mp4";
import Video2 from "@/assets/video/video-2.mp4";
import Video3 from "@/assets/video/video-3.mp4";
import Video4 from "@/assets/video/video-4.mp4";
// import 'vue3-carousel/dist/carousel.css'
// import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import AlquilerV from "@/assets/imagenes/alquiler_coches.jpg";
import AlquilerI from "@/assets/imagenes/alquiler_inmuebles.jpg";
import AtraccionesT from "@/assets/imagenes/atracciones_turisticas.jpg";
import PropiedadesV from "@/assets/imagenes/propiedades_venta.jpg";
import reciclaA from "@/assets/imagenes/recicla_ayuda.png";
import BarraRedes from "@/views/BarraRedes.vue";

// const { t } = useI18n();
export default {
  data() {
    return {
      patternVue,
      componentBtn,
      componentProfileCard,
      componentInfoCard,
      componentInfo2,
      componentMenu,
      componentBtnPink,
      documentation,
      login,
      profile,
      landing,
      Bienvenido:Bienvenido,
      videos: [
        {id: 1, video: Video1},
        {id: 2, video: Video2},
        {id: 3, video: Video3},
        {id: 4, video: Video4},
      ],
      AlquilerV,
      AlquilerI,
      AtraccionesT,
      PropiedadesV,
      reciclaA,
      textoBanner: '¡TE AYUDAMOS EN TODO MOMENTO!'
    };
  },
  components: {
    IndexNavbar,
    FooterComponent,
    Portada,
    BarraRedes,
  },
  watch:{

  },
};
</script>
