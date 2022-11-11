<template>
  <div class="player-cont">
    <div class="player-name-cont">
      <div class="player-name">
        <a
          class="link-underline-solid"
          :href="`https:instagram.com/` + instagramProfile"
          target="_blank"
        ><slot /></a>
      </div>
      <sup class="player-job-title">{{ position }}</sup>
    </div>
    <picture
      class="player-photo"
      :style="imagePosition"
    >
      <img :src="image" class="player-photo-img" :style="imagePosition" ref="image">
    </picture>
  </div>
</template>
<!--:style="{
  opacity: opacity,
}"-->
<!--@mouseover.stop="onMouseEnter"
      @mouseleave.stop="onMouseLeave"-->
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
      imagePosition: null,
      isListenerAdded: false,
    };
  },
  computed: {
    src () {
      return this.$store.state.app.imageOnCursor; 
    },
  },
  watch: {
    src (newVal) {
      var ImgHover = document.querySelectorAll('.player-photo-img');

      if (newVal === '' && document) {
        ImgHover.removeEventListener('mousemove', this.setImagePosition);
        this.isListenerAdded = false;
        return;
      }
      if (newVal !== '' && !this.isListenerAdded) {
        ImgHover.addEventListener('mousemove', this.setImagePosition);
      }
    },
  },
  methods: {
    /*onMouseEnter (e) {
      if (this.timrID && window) {
        clearTimeout(this.timerID);
      }
      this.$store.commit('app/SET_IMAGE_ON_CURSOR', this.$refs.image.src);
      this.opacity = 1;
    },
    onMouseLeave (e) {
      if (window) {
        this.$store.commit('app/SET_IMAGE_ON_CURSOR', '');
        this.opacity = 1;
      }
    },*/
    /*setImagePosition (e) {
      this.imagePosition = { 
        left: `${e?.pageX - 200}px`, 
        top: `${e?.pageY - 40}px`, 
      };
    },
    var cursor = document.querySelector(".follow-img");

    document.addEventListener("mousemove", (e) => {

      var x = e.clientX;
      var y = e.clientY;

      cursor.style.left = `${x}px`;
      cursor.style.top = `${y}px`;
      
    })*/
  },
};
</script>

<style scoped>
.player-cont {
  display: inline-flex;
  flex-direction: row-reverse;
  margin-right: 2rem;
  position: relative;
}
.player-cont:not(:first-child) {
  margin-top: 4rem;
}
.player-cont:hover {
  z-index: 2;
}

.player-photo,
.player-name-cont,
.player-name,
.player-job-title {
  display: inline-block;
}

.player-photo {
  position: absolute;
  left: 0;
  top: -0.8rem;
  transition: all .2s ease-in-out;
  tabindex: 0;
}

.player-photo-img {
  background: var(--Black4);
  border: none;
  border-radius: 100px;
  height: 8rem;
  width: 8rem;
  transition: all .16s var(--transition-color-link-button);
}
.player-name-cont:hover + .player-photo {
  transform: scale(3);
}
.player-name-cont:hover + .player-photo>.player-photo-img {
  /*border-radius: 0;*/
}

.player-name-cont {
  font-size: 5.2rem;
  line-height: 5.8rem;
  margin-left: 9.2rem;
  position: relative;
}
.player-name-cont:hover {
  z-index: 2;
}

.player-name {
  font-family: var(--font-serif);
  font-size: 5.2rem;
}
.player-cont:not(:last-child) .player-name::after {
  content: ",";
  font-size: 5.2rem;
  font-family: var(--font-serif);
  margin-left: 0.4rem;
}

.player-name > a {
  border-color: var(--Black16);
  color: var(--Black100);
}
.player-name > a:hover {
  border-color: var(--Blue32);
  color: var(--Blue100);
}
.player-name .link-underline-solid {
  border-bottom-width: 1.5px;
}

.player-job-title {
  color: var(--Gray100);
  margin-left: -2.8rem;
  top: -0.8rem;
  position: relative;
}
.player-cont:last-child .player-job-title {
  margin-left: -1.2rem;
}


@media (max-width: 500px) {
  .player-cont {
    display: block;
    margin-top: 3.2rem;
    margin-right: 0;
  }

  .player-cont:not(:first-child) {
    margin-top: 3.2rem;
  }

  .player-photo {
    top: -1.2rem;
    vertical-align: middle;
  }

  .player-name-cont {
    font-size: 2.8rem;
    line-height: 2.8rem;
  }

  .player-name {
    font-size: 2.8rem;
    line-height: 2.8rem;
  }

  .player-cont:not(:last-child) .player-name::after {
    display: none;
  }

  .player-job-title {
    display: block;
    font-size: 1.4rem;
    margin-left: 0;
    margin-top: .8rem;
    top: 0;
    vertical-align: text-bottom;
  }
  .player-cont:last-child .player-job-title {
    margin-left: 0;
  }
}
</style>
