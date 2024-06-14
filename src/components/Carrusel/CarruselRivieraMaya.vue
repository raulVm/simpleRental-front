<template>
  <v-carousel v-model="model" :show-arrows="false" :items-to-show="2.5">
    <v-carousel-item
      v-for="(video, i) in videos"
      :key="i"
    >
      <v-sheet
        height="100%"
        tile
      >
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <div class="text-h2">
            <vue-video-section
              :elementId="'video1'"
              :ref="'video1'"
              :mp4Source="video.video"
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
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>
<script>
import Video1 from "@/assets/video/rivieraMaya.mp4";
import Video2 from "@/assets/video/rivieraMaya1.mp4";
import Video3 from "@/assets/video/rivieraMaya2.mp4";
export default {
  data() {
    return {
      Video1,
      model: 0,
      colors: [
        'primary',
        'secondary',
        'yellow darken-2',
        'red',
        'orange',
      ],
      videos: [
        {id: 1, video: Video1},
        {id: 2, video: Video2},
        {id: 3, video: Video3},
      ],
    }
  }
}
</script>
