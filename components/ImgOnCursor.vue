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
}

.img-on-cursor img {
  position: relative;
   max-height: 8rem;
   max-width: 8rem;
   border-radius: 100px;
   transform: scale(2);
}

</style>
