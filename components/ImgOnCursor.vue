<template>
  <div :style="imagePosition" class="img-on-cursor">
    <img v-if="src && imagePosition" :src="src" alt="Фото сотрудника">
  </div>
</template>

<script>
export default {
  name: 'ImageOnCursor',
  data () {
    return {
      imagePosition: null,
      isListenerAdded: false,
    };
  },
  computed: {
    src () {
      return this.$store.state.app.imageOnCursor; 
    },
  },
  // TODO remove watch cuz shit
  watch: {
    src (newVal) {
      if (newVal === '' && document) {
        document.removeEventListener('mousemove', this.setImagePosition);
        this.isListenerAdded = false;
        return;
      }
      if (newVal !== '' && !this.isListenerAdded) {
        document.addEventListener('mousemove', this.setImagePosition);
      }
    },
  },
  methods: {
    setImagePosition (e) {
      this.imagePosition = { 
        left: `${e?.pageX - 200}px`, 
        top: `${e?.pageY - 40}px`, 
      };
    },
  },
};
</script>

<style scoped>
.img-on-cursor {
   position: absolute;
   transition: all .24s cubic-bezier(0.82, 0.82, 0.04, 1.76);
   z-index: 1;
   tabindex: 0;
}

.img-on-cursor img {
  border-radius: 1000px;
  position: relative;
  max-height: 10rem;
  height: 100%;
  max-width: 10rem;
  width: 100%;
  transform: scale(3);
  transition: all .24s ease-in-out;
}

</style>
