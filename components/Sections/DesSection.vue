<template>
  <section class="we-design">
    <div class="mainpage-section-header-wrapper">
      <h1 class="mainpage-section-header">
        Делаем приложения, <br />сайты, айдентику, рекламу <br />и&nbsp;контент для&nbsp;соцсетей
      </h1>
    </div>
    <app-nav-bar />
  </section>
</template>

<script>
/*import AppNavBar from '../NavBar/AppNavBar.vue'

export default {
  name: 'WeDesign',
  components: {
    AppNavBar,
  },
}*/
</script>

<style scoped>
.we-design {
  margin-top: 9.2rem;
  margin-left: 18%;
  margin-right: 2.8rem;
}

.we-design .mainpage-section-header-wrapper {
    display: inline-block;
    min-height: 43rem;
    vertical-align: top;
}

.we-design .mainpage-section-header {
    color: var(--White100);
    mix-blend-mode: difference;
    /*position: sticky;
    position: -webkit-sticky;
    top: 18rem;*/
}
.we-design .mainpage-section-header::after {
    background-color: var(--White100);
    margin-left: 0;
    width: 15.5rem;
    display: none;
}

.we-design .nav-main {
    display: inline-block;
}

.button-buy-design-wrapper {
    display: inline-block;
    position: absolute;
    top: 18%;
    right: 6%;
}

@media (min-width: 1340px) {}

@media (max-width: 460px) {
  .we-design {
    height: fit-content;
    min-height: fit-content;
    margin-top: 12rem;
  }

  .we-design .mainpage-section-header-wrapper {
      margin-left: 0;
      min-height: 29.6rem;
  }

  .we-design .mainpage-section-header {
      top: 8rem;
  }

  .we-design .mainpage-section-header::after {
    width: 4.8rem;
  }
}

@media (max-width: 330px) {
  .we-design .mainpage-section-header-wrapper {
    min-height: 27.6rem;
  }
  .we-design .mainpage-section-header::after {
    margin: 0;
    width: 1.6rem;
  }
}
</style>
