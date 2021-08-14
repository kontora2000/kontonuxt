<template>
  <section class="top-section">
    <div class="about-cont">
      <div class="about">
        Независимая команда дизайнеров и&nbsp;разработчиков.
        <br />Разбросаны по&nbsp;всей
        <span class="red-star">★</span>&hairsp;России, работаем по&nbsp;всему миру
      </div>
      <div class="about-vacancies-partnership" v-show="false">
        Сейчас открыты
        <nuxt-link class="link-underline-dashed" to="/job">3&nbsp;вакансии</nuxt-link> и&nbsp;работает
        <nuxt-link class="link-underline-dashed" to="/partnership">партнёрская программа</nuxt-link>
      </div>
    </div>
    <div class="contacts contacts-top-section">
      <div class="tel contacts-top-section-inner">+7&thinsp;988&thinsp;668-14-88</div>
      <div class="email-cont contacts-top-section-inner">
        <a class="link-email link-underline-solid" href="mailto:mail@kontora.cc">mail@kontora.cc</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'top-section'
}
</script>
