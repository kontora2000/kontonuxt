<template>
  <section class="bg-black-flag" />
</template>



<script>
export default {
  name: 'FlagSection',
}
</script>



<style scoped>
.bg-black-flag {
    background-color: var(--Black100);
    position: absolute;
    top: 0;
    right: 0;
    bottom: -16rem;
    left: 0;
    z-index: -1;
}
.bg-black-flag::after {
    background: linear-gradient(0deg, #FFFFFF 0%, rgba(255, 255, 255, 0.991353) 6.67%, rgba(255, 255, 255, 0.96449) 13.33%, rgba(255, 255, 255, 0.91834) 20%, rgba(255, 255, 255, 0.852589) 26.67%, rgba(255, 255, 255, 0.768225) 33.33%, rgba(255, 255, 255, 0.668116) 40%, rgba(255, 255, 255, 0.557309) 46.67%, rgba(255, 255, 255, 0.442691) 53.33%, rgba(255, 255, 255, 0.331884) 60%, rgba(255, 255, 255, 0.231775) 66.67%, rgba(255, 255, 255, 0.147411) 73.33%, rgba(255, 255, 255, 0.0816599) 80%, rgba(255, 255, 255, 0.03551) 86.67%, rgba(255, 255, 255, 0.0086472) 93.33%, rgba(255, 255, 255, 0) 100%);
    content: '';
    display: block;
    height: 26rem;
    position: absolute;
    bottom: 0;
    width: 100%;
}


@media (min-width: 1340px) {}


@media (max-width: 460px) {
  .bg-black-flag {
    bottom: -8rem;
    margin-left: 0;
    width: 100vw;
  }
}

@media (max-width: 330px) {
  .bg-black-flag {
    bottom: -16rem;
  }
}
</style>