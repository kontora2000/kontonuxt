<template>
  <main>
    <section class="page-cont-vacancies page-cont">
      <NuxtLink to="/" class="link-close-page">
        <svg class="icon-svg icon-close-svg">
            <use xlink:href="sprite.svg#icon-close"></use>
        </svg>
      </NuxtLink>

      <h1 class="page-section-header">3 вакансии<sup class="page-section-header-sup section-header-sup">Работаем&nbsp;удалённо, помогаем и&nbsp;обучаем, <br class="only-desktop">ценим&nbsp;результат</sup></h1>

      <div class="vacancies-wrapper">
        <div class="vacancy-cont">
            <h4>Амбициозный дизайнер интерфейсов</h4>
            <p>Создание и развитие CMS для небольших проектов студии. Умение писать понятный код. Понимание оптимизации производительности фреймворка.</p>
            <p>Вы легко работаете с:<br> PHP, Laravel, Eloquent CMS, Nginx и Apache</p>
            <a class="vacancy-cont-button-send button" href="mailto:job@kontora.cc?subject=Амбициозный дизайнер интерфейсов">Заявить о себе</a>
        </div>
        <div class="vacancy-cont">
            <h4>Педантичный разработчик</h4>
            <p>Создание и развитие CMS для небольших проектов студии. Умение писать понятный код. Понимание оптимизации производительности фреймворка.</p>
            <p>Вы легко работаете с:<br> PHP, Laravel, Eloquent CMS, Nginx и Apache</p>
            <a class="vacancy-cont-button-send button" href="mailto:job@kontora.cc?subject=Педантичный разработчик">Откликнуться</a>
        </div>
        <div class="vacancy-cont">
            <h4>Офигенный СММщик</h4>
            <p>Создание и развитие CMS для небольших проектов студии. Умение писать понятный код. Понимание оптимизации производительности фреймворка.</p>
            <p>Вы легко работаете с:<br> PHP, Laravel, Eloquent CMS, Nginx и Apache</p>
            <a class="vacancy-cont-button-send button" href="mailto:job@kontora.cc?subject=Офигенный СММщик">Отправить резюме</a>
        </div>
      </div>
    </section>
    <section class="page-cont-vacancies page-cont">
      <h2>Если вы делаете крутые штуки и&nbsp;хотите вместе с&nbsp;нами работать, но&nbsp;тут нет вашей вакансии&nbsp;— напишите нам на&nbsp;<a class="link-underline-solid" href="mailto:job@kontora.cc?subject=Хочу с вами работать">job@kontora.cc</a></h2>
    </section>
  </main>
</template>



<script>
import Header from '~/components/Header'
import Footer from '~/components/Footer'

export default {
  name: 'Job',
  components: {
    Header,
    Footer
  },
}
</script>



<style scoped>
.page-cont-vacancies {}

.page-cont-vacancies>h2 {
    max-width: 80rem;
    line-height: 6rem;
}

.page-cont-vacancies>.page-section-header::after {
    display: none;
}

.vacancies-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 4rem;
    grid-row-gap: 10rem;
    margin-top: 8rem;
}

.vacancy-cont {
    grid-column: span 1;
    grid-row: span 1;
    max-width: 40rem;
}

.vacancy-cont h4 {
    font-family: var(--font-serif);
}

.vacancy-cont-button-send {
    font-size: 2rem;
    margin-top: 1.8rem;
}
</style>