<template>
  <section class="top-section">
    <div class="about-cont">
      <div class="about">Топовая команда дизайнеров и&nbsp;разрабов.
        <br>Разбросаны по&nbsp;всей <span class="red-star">★</span>&hairsp;России, работаем по&nbsp;всему миру
      </div>
      <div class="about-vacancies-partnership">
        Сейчас открыты
        <nuxt-link class="link-underline-dashed" to="/job">3&nbsp;вакансии</nuxt-link><span v-show="false"> и&nbsp;работает
        <nuxt-link class="link-underline-dashed" to="/partnership">партнёрская программа</nuxt-link></span>
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
    padding: 0 2.8rem;
    position: absolute;
    width: 100%;
    top: 3.6rem;
    mix-blend-mode: difference;
    z-index: 2;
}

.top-section a { 
    color: var(--White32);
}
.top-section a:hover {
    color: var(--White100);
}

.top-section a.link-underline-solid,
.top-section a.link-underline-dashed { 
    border-bottom-color: var(--White20);
}
.top-section a.link-underline-solid:hover,
.top-section a.link-underline-dashed:hover { 
    border-bottom-color: var(--White100);
}

.about-cont {
    line-height: 1.6rem;
    margin-top: -1px;
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

}

.social-top-section {
  margin-right: 8rem;
}

.contacts-top-section>div:not(:last-child),
.social-top-section>div:not(:last-child) {
  margin-bottom: 1rem;
}



@media (min-width: 1340px) {}



@media (max-width: 460px) {
  .top-section {
    display: grid;
    margin-left: .8rem;
    width: calc(100vw - 1.6rem);
    top: 0;
    justify-content: space-between;
  }

  .about-cont {
    grid-column: 1/3;
    grid-row: 2/3;
    left: 0;
    margin-top: 1.6rem;
    position: relative;
    z-index: 2;
  }

  .contacts-top-section {
    display: flex;
    grid-column: 2/3;
    grid-row: 1/2;
    margin: 2.4rem 0 0 0;
    width: calc(12rem + 1.2rem + 14rem);
  }

  .contacts-top-section>div {
    display: inline-flex;
  }
  .contacts-top-section>div:not(:last-child),
  .social-top-section>div:not(:last-child) {
      margin: 0 1.2rem 0 0;
  }

  .social-top-section {
      grid-row: 2/3;
      grid-column: 1/2;
      margin-right: 0;
      margin-top: .8rem;

      display: none;
  }
}

@media (max-width: 380px) {
    .contacts-top-section {
      width: calc(11rem + 1.2rem + 13.1rem);
    }
}

@media (max-width: 330px) {
  .contacts-top-section {
    width: 16.3rem;
  }

  .tel.contacts-top-section-inner {
    display: none;
  }
}
</style>