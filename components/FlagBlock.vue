<template>
  <div class="bg-black-flag">
    <video autoplay loop class="bg-black-flag-video">
      <source type="video/mp4" src="/img/bg-flag.mp4">
    </video>
  </div>
</template>

<script>
export default {
  name: 'FlagBlock',
};
</script>

<style scoped>
.bg-black-flag {
  max-width: 100vw;
  margin: 0;
  min-height: 54rem;
  height: 100%;
  max-height: 76rem;
  position: absolute;
  top: 0;
  right: 0;
  bottom: -4rem;
  left: 0;
  z-index: -1;
}
/*.bg-black-flag::after {
    background: linear-gradient(0deg, #FFFFFF 0%, rgba(255, 255, 255, 0.991353) 6.67%, rgba(255, 255, 255, 0.96449) 13.33%, rgba(255, 255, 255, 0.91834) 20%, rgba(255, 255, 255, 0.852589) 26.67%, rgba(255, 255, 255, 0.768225) 33.33%, rgba(255, 255, 255, 0.668116) 40%, rgba(255, 255, 255, 0.557309) 46.67%, rgba(255, 255, 255, 0.442691) 53.33%, rgba(255, 255, 255, 0.331884) 60%, rgba(255, 255, 255, 0.231775) 66.67%, rgba(255, 255, 255, 0.147411) 73.33%, rgba(255, 255, 255, 0.0816599) 80%, rgba(255, 255, 255, 0.03551) 86.67%, rgba(255, 255, 255, 0.0086472) 93.33%, rgba(255, 255, 255, 0) 100%);
    content: '';
    display: block;
    height: 20rem;
    position: absolute;
    bottom: -2px;
    width: 100%;
}*/

.bg-black-flag-video {
  object-fit: cover;
  position: absolute;
  width: 100%;
  z-index: -1;
}

@media (min-width: 1400px) {
  .bg-black-flag {
    height: 80vh;
    max-height: 80vh;
  }
  .bg-black-flag::after {
    background: linear-gradient(0deg, #FFFFFF 0%, rgba(255, 255, 255, 0.991353) 6.67%, rgba(255, 255, 255, 0.96449) 13.33%, rgba(255, 255, 255, 0.91834) 20%, rgba(255, 255, 255, 0.852589) 26.67%, rgba(255, 255, 255, 0.768225) 33.33%, rgba(255, 255, 255, 0.668116) 40%, rgba(255, 255, 255, 0.557309) 46.67%, rgba(255, 255, 255, 0.442691) 53.33%, rgba(255, 255, 255, 0.331884) 60%, rgba(255, 255, 255, 0.231775) 66.67%, rgba(255, 255, 255, 0.147411) 73.33%, rgba(255, 255, 255, 0.0816599) 80%, rgba(255, 255, 255, 0.03551) 86.67%, rgba(255, 255, 255, 0.0086472) 93.33%, rgba(255, 255, 255, 0) 100%);
    content: '';
    display: block;
    height: 20rem;
    position: absolute;
    bottom: -2px;
    width: 100%;
  }
}

@media (min-height: 740px) {
  .bg-black-flag {
    height: 80vh;
    max-height: 88vh;
  }
}

@media (max-width: 1080px) {
  .bg-black-flag-video {
    height: 80vh;
    max-height: 100vh;
  }
}

@media (max-width: 500px) {
  .bg-black-flag {
    bottom: 0;
    margin-left: 0;
    width: 100vw;
  }

  .bg-black-flag-video {
    height: 92vh;
    max-height: 100vh;
  }
}

@media (max-width: 330px) {
  .bg-black-flag {
    bottom: -6rem;
  }
}
</style>
