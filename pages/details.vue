<template>
  <main>
    <section class="page-cont-details page-cont">
      <NuxtLink to="/" class="link-close-page">
        <svg class="icon-svg icon-close-svg">
            <use xlink:href="sprite.svg#icon-close"></use>
        </svg>
      </NuxtLink>

      <h1 class="page-section-header">Реквизиты</h1>

      <div class="details-wrapper">
        <div class="details-cont">
            <h4>ООО&thinsp;«Просто контора»</h4>
            <div class="details-cont-row">
              <p>
                <span>ИНН</span><br>
                <span>2311323463</span>
              </p>
              <p>
                <span>КПП</span><br>
                <span>231101001</span>
              </p>
            </div>
            <p>
              <span>Расчётный счёт (₽)</span><br>
              <span>40702810101500102474</span>
            </p>
            <p>
              <span>Название банка</span><br>
              <span>ТОЧКА ПАО БАНКА «ФК ОТКРЫТИЕ»</span>
            </p>
            <div class="details-cont-row">
              <p>
                <span>Город</span><br>
                <span>г. Москва</span>
              </p>
              <p>
                <span>БИК</span><br>
                <span>044525999</span>
              </p>
            </div>
            <p>
              <span>Корр.&nbsp;счёт</span><br>
              <span>30101810845250000999</span>
            </p>
        </div>
      </div>
    </section>
  </main>
</template>



<script>
import Header from '~/components/Header'
import Footer from '~/components/Footer'

export default {
  name: 'Details',
  components: {
    Header,
    Footer
  },
}
</script>



<style scoped>
.page-cont-details {}

.page-cont-details>h2 {
    max-width: 80rem;
    line-height: 6rem;
}

.page-cont-details>.page-section-header::after {
    display: none;
}

.details-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 4rem;
    grid-row-gap: 10rem;
    margin-top: 8rem;
}

.details-cont {
    grid-column: span 1;
    grid-row: span 1;
    max-width: 40rem;
}

.details-cont h4 {
    font-family: var(--font-serif);
}

.details-cont-row {
    display: flex;
}

.details-cont p {
    margin-top: 2.4rem;
}

.details-cont-row>p:last-child {
    position: absolute;
    left: 30%;
}

@media (max-width: 460px) {
  .details-wrapper {
    grid-template-columns: 100%;
    margin-top: 3.2rem;
  }
}
</style>