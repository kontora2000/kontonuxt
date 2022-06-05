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
        left: `${e?.pageX - 40}px`, 
        top: `${e?.pageY - 40}px`, 
      };
    },
  },
};
</script>

<style scoped>
.img-on-cursor {
   position: absolute;
   transition: all .06s cubic-bezier(0.42, 0.43, 0.46, 0.87);
   z-index: -1;
   tabindex:0;
}

.img-on-cursor img {
  border-radius: 300px;
  position: relative;
  max-height: 8rem;
  height: 100%;
  max-width: 8rem;
  width: 100%;
  transform: scale(2);
}

</style>
