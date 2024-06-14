<template>
    <main class="profile-page">
      <section class="relative block h-500-px">
        <div
          class="absolute top-0 w-full h-full bg-center bg-cover"
          v-bind:style="{
           'background-image': 'url('+ img +')'}
          "
        >
          <span
            id="blackOverlay"
            class="w-full h-full absolute opacity-50 bg-black"
          ></span>
          <h1 class="font-semibold TextBanner">{{ textoBanner }}</h1>
        </div>
        <div
          class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
          style="transform: translateZ(0);"
        >
          <svg
            class="absolute bottom-0 overflow-hidden"
            :xmlns='img'
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
      </section>
    </main>
</template>
<script>
export default {
    props: {
        img: {
            type: String,
        },
        textoBanner:{
          type: String
        }
    },
    data(){
        return {
        }
    }
}
</script>
<style>
  .TextBanner {
    text-align: center;
    color: aquamarine;
    margin: 0;
    text-shadow: 2px 2px 6px #000;
    letter-spacing: 4px;
    font-size: 80px;
  }
</style>