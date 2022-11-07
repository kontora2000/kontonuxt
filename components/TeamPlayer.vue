<template>
  <div class="player-cont">
    <picture
      class="player-photo"
      :style="{
        opacity: opacity,
      }"
    >
      <img ref="image" class="player-photo-img" :src="image">
    </picture>
    <div
      class="player-name-cont"
      @mouseover.stop="onMouseEnter"
      @mouseleave.stop="onMouseLeave"
    >
      <div class="player-name">
        <a
          class="link-underline-solid"
          :href="`https:instagram.com/` + instagramProfile"
          target="_blank"
        ><slot /></a>
      </div>
      <sup class="player-job-title">{{ position }}</sup>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TeamPlayer',
  props: {
    position: {
      type: String,
      default: 'Дизайнер',
      required: true,
    },
    instagramProfile: {
      type: String,
      required: true,
      default: '',
    },
    image: {
      type: String,
      required: true,
    },
  },
  data () {
    return {
      timerID: 0,
      opacity: 1,
    };
  },
  methods: {
    onMouseEnter (e) {
      if (this.timrID && window) {
        clearTimeout(this.timerID);
      }
      this.$store.commit('app/SET_IMAGE_ON_CURSOR', this.$refs.image.src);
      this.opacity = 0;
    },
    onMouseLeave (e) {
      if (window) {
        this.$store.commit('app/SET_IMAGE_ON_CURSOR', '');
        this.opacity = 1;
      }
    },
  },
};
</script>

<style scoped>
.player-photo-img {
  transition: all .16s var(--transition-color-link-button);
}

.player-name-cont {
  position: relative;
}
.player-name-cont:hover {
  z-index: 2;
}
.player-name .link-underline-solid {
  border-bottom-width: 1.5px;
}
</style>
