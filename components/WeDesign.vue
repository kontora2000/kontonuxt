<template>
  <div class="we-design">
    <div class="mainpage-section-header-wrapper">
      <h1 class="mainpage-section-header"><!--Делаем приложения, <br />сайты, айдентику, рекламу <br />и&nbsp;контент для&nbsp;соцсетей-->Делаем</h1>
    </div>
    <AppNavBar />
  </div>
</template>

<script>
import AppNavBar from '~/components/NavBar/AppNavBar.vue'

export default {
  name: 'WeDesign',
  components: {
    AppNavBar,
  },
}
</script>

<style scoped>
.we-design {
  margin-top: 4rem;
  display: flex;
}

.we-design .mainpage-section-header-wrapper {
    display: inline-block;
    vertical-align: top;
    z-index: 2;
}

.we-design .mainpage-section-header {
    color: var(--White100);
    line-height: 6rem;
    position: sticky;
    position: -webkit-sticky;
    top: 12rem;
}
.we-design .mainpage-section-header::after {
    background-color: var(--White100);
    width: 12.5rem;
}

.we-design-bg-wrapper {
    width: 68rem;
    position: absolute;
    height: 38rem;
    background: #0000ff44;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
}

@media (min-width: 1340px) {}

@media (max-width: 500px) {
  .we-design {
    height: fit-content;
    min-height: fit-content;
    margin-top: 6rem;
  }

  .we-design .mainpage-section-header-wrapper {
      margin-left: 0;
      min-height: 28rem;
  }

  .we-design .mainpage-section-header {
      line-height: 4rem;
      top: 8rem;
  }

  .we-design .mainpage-section-header::after {
    margin-left: .4rem;
    margin-right: .4rem;
    width: 4.8rem;
  }
}

@media (max-width: 330px) {
  .we-design .mainpage-section-header-wrapper {
    min-height: 26rem;
  }

  .we-design .mainpage-section-header {
    line-height: 3.6rem;
  }
  .we-design .mainpage-section-header::after {
    width: 2rem;
  }
}
</style>
  