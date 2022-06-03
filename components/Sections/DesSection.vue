<template>
  <section class="we-design">
    <div class="mainpage-section-header-wrapper">
      <h1 class="mainpage-section-header">
        Делаем
      </h1>
    </div>
    <app-nav-bar />
    <div v-show="false" class="button-buy-design-wrapper">
      <nuxt-link to="/order" class="button-buy-design button">
        <span class="button-buy-design-sign"> 
          Купить
          <br>дизайн!
        </span>
      </nuxt-link>
    </div>
  </section>
</template>

<script>
import AppNavBar from '../NavBar/AppNavBar.vue'

export default {
  name: 'WeDesign',
  components: {
    AppNavBar,
  },
}
</script>

<style scoped>
.we-design {
  margin-top: 12rem;
}

.we-design .mainpage-section-header-wrapper {
    display: inline-block;
    margin-left: 18%;
    min-height: 43rem;
    vertical-align: top;
}

.we-design .mainpage-section-header {
    color: var(--White100);
    mix-blend-mode: difference;
    position: sticky;
    position: -webkit-sticky;
    top: 20rem;
}
.we-design .mainpage-section-header::after {
    background-color: var(--White100);
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
    margin-top: 20rem;
  }

  .we-design .mainpage-section-header-wrapper {
      margin-left: 0;
      min-height: 30rem;
  }

  .we-design .mainpage-section-header {
      top: 8rem;
  }
}
</style>
