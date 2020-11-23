<template>
  <main>
    <section class="page-cont-partnership page-cont">
      <NuxtLink to="/" class="link-close-page">
        <svg class="icon-svg icon-close-svg">
            <use xlink:href="sprite.svg#icon-close"></use>
        </svg>
      </NuxtLink>

      <h1 class="page-section-header">Партнёрская программа</h1>

      <p class="section-subheader">По&nbsp;разработке сайтов, веб-сервисов и&nbsp;приложений</p>
    </section>
  </main>
</template>



<script>
import Header from '~/components/Header'
import Footer from '~/components/Footer'

export default {
  name: 'Partnership',
  components: {
    Header,
    Footer
  },
}
</script>



<style scoped>

</style>