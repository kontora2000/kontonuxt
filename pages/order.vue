<template>
  <main>
    <section class="page-cont-partnership page-cont">
      <NuxtLink to="/" class="link-close-page">
        <svg class="icon-svg icon-close-svg">
            <use xlink:href="sprite.svg#icon-close"></use>
        </svg>
      </NuxtLink>

      <h1 class="page-section-header">Заказ разработки</h1>

      <p class="section-subheader">Стандартный формат работы / Без согласований</p>
    </section>
  </main>
</template>



<script>
import Header from '~/components/Header'
import Footer from '~/components/Footer'

export default {
  name: 'Order',
  components: {
    Header,
    Footer
  },
}
</script>



<style scoped>

</style>