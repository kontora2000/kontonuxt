<template>
  <section class="we-design">
    <div class="mainpage-section-header-wrapper">
      <h1 class="mainpage-section-header">
        Делаем
      </h1>
    </div>
  <AppNavBar />
    <div class="button-buy-design-wrapper">
      <button class="button-buy-design">
        <span class="button-buy-design-sign">
          Купить
          <br>дизайн!
        </span>
      </button>
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
