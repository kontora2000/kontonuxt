<template>
  <section class="top-section">
    <div class="about-cont">
      <div class="about">Независимая команда дизайнеров и&nbsp;разработчиков.
        <br>Разбросаны по&nbsp;всей <span class="red-star">★</span>&hairsp;России, работаем по&nbsp;всему миру
      </div>
      <div class="about-vacancies-partnership" v-show="false">
        Сейчас открыты
        <nuxt-link class="link-underline-dashed" to="/job">3&nbsp;вакансии</nuxt-link> и&nbsp;работает
        <nuxt-link class="link-underline-dashed" to="/partnership">партнёрская программа</nuxt-link>
      </div>
    </div>
    <div class="contacts contacts-top-section">
      <div class="tel contacts-top-section-inner">
        <a href="tel:+79886681488">+7&thinsp;988&thinsp;668-14-88</a>
      </div>
      <div class="email-cont contacts-top-section-inner">
        <a class="link-email link-underline-solid" href="mailto:mail@prostokontora.ru">mail@prostokontora.ru</a>
      </div>
    </div>
    <div class="social-top-section">
      <div class="social-top-section-inner social-link-wrapper">
        <a class="social-link link-underline-solid" href="https://instagram.com/kontoragram/">Instagram</a>
      </div>
      <div class="social-top-section-inner social-link-wrapper">
        <a class="social-link link-underline-solid" href="https://t.me/kontoragram">Telegram</a>
      </div>
      <div class="social-top-section-inner social-link-wrapper">
        <a class="social-link link-underline-solid" href="https://wa.me/79886681488">WhatsApp</a>
      </div>
    </div>
  </section>
</template>



<script>
export default {
  name: 'top-section'
}
</script>



<style scoped>
.top-section {
    color: var(--White32);
    min-height: 0;
    height: 10rem;
    position: absolute;
    width: 100%;
    top: 3.6rem;
}

.top-section a { 
    color: var(--White32);
}
.top-section a:hover {
    color: var(--White100);
}

.top-section a.link-underline-solid,
.top-section a.link-underline-dashed { 
    border-bottom-color: var(--White16);
}
.top-section a.link-underline-solid:hover,
.top-section a.link-underline-dashed:hover { 
    border-bottom-color: var(--White100);
}

.about-cont {
    position: absolute;
    left: 18%;
    z-index: 2;
}

.about-cont>div:not(:last-child) {
    margin-bottom: .8rem;
}

.red-star {
    color: var(--Red100);
}

.contacts-top-section,
.social-top-section {
  float: right;
  position: relative;
  z-index: 2;
}

.contacts-top-section {
  margin-right: 2.8rem;
}

.social-top-section {
  margin-right: 8rem;
}

.contacts-top-section>div:not(:last-child),
.social-top-section>div:not(:last-child) {
  margin-bottom: 1rem;
}



@media (min-width: 1340px) {}



@media (max-width: 460px) {}
</style>