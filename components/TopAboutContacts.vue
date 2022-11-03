<template>
    <div class="top-about-contacts">
        <div class="about-cont">
          <div class="about">Топовая команда дизайнеров и&nbsp;разрабов.
            <br>Разбросаны по&nbsp;всей <span class="red-star">★</span>&hairsp;России, работаем по&nbsp;всему миру
          </div>
          <div class="about-vacancies-partnership">
            Сейчас открыты
            <nuxt-link class="link-underline-solid" to="/job">3&nbsp;вакансии</nuxt-link><span v-show="false"> и&nbsp;работает
            <nuxt-link class="link-underline-solid" to="/partnership">партнёрская программа</nuxt-link></span>
          </div>
        </div>
        <div class="top-about-contacts-contacts-wrapper">
          <div class="social-top-about-contacts">
            <div class="social-top-about-contacts-inner social-link-wrapper">
              <a class="social-link link-underline-solid" href="https://instagram.com/kontoragram/">Instagram</a>
            </div>
            <div class="social-top-about-contacts-inner social-link-wrapper">
              <a class="social-link link-underline-solid" href="https://t.me/kontoragram">Telegram</a>
            </div>
            <div class="social-top-about-contacts-inner social-link-wrapper">
              <a class="social-link link-underline-solid" href="https://wa.me/79886681488">WhatsApp</a>
            </div>
          </div>
  
          <div class="contacts contacts-top-about-contacts">
            <div class="tel contacts-top-about-contacts-inner">
              <a href="tel:+79886681488">+7&thinsp;988&thinsp;668-14-88</a>
            </div>
            <div class="email-cont contacts-top-about-contacts-inner">
              <a class="link-email link-underline-solid" href="mailto:mail@prostokontora.ru">mail@prostokontora.ru</a>
            </div>
          </div>
        </div>
    </div>
</template>



<script>
export default {
    name: 'TopAboutContacts'
}
</script>



<style scoped>
.top-about-contacts {
    color: var(--White32);
    display: flex;
    justify-content: space-between;
    min-height: 0;
    height: 10rem;
    margin-top: 3.6rem;
    mix-blend-mode: difference;
    width: 100%;
    max-width: 1600px;
    z-index: 1;
}

.top-about-contacts>.section-inner {
    display: flex;
    justify-content: space-between;
}

.top-about-contacts a { 
    color: var(--White32);
}
.top-about-contacts a:hover {
    color: var(--White100);
}

.top-about-contacts a.link-underline-solid,
.top-about-contacts a.link-underline-dashed { 
    border-bottom-color: var(--White20);
}
.top-about-contacts a.link-underline-solid:hover,
.top-about-contacts a.link-underline-dashed:hover { 
    border-bottom-color: var(--White100);
}

.about-cont {
    line-height: 1.6rem;
    margin-top: -1px;
}

.about-cont>div:not(:last-child) {
    margin-bottom: .8rem;
}

.red-star {
    color: var(--Red100);
}

.top-about-contacts-contacts-wrapper {
display: flex;
}

  .contacts-top-about-contacts,
  .social-top-about-contacts {
    position: relative;
  }
  
  .contacts-top-about-contacts {
  
  }
  
  .social-top-about-contacts {
    margin-right: 8rem;
  }
  
  .contacts-top-about-contacts>div:not(:last-child),
  .social-top-about-contacts>div:not(:last-child) {
    margin-bottom: 1rem;
  }
  
  
  
  @media (min-width: 1340px) {}
  
  
  
  @media (max-width: 500px) {
    .top-about-contacts {
      display: grid;
      min-height: auto;
      height: auto;
      margin-top: 0;
      width: 100%;
      top: 0;
      left: 0;
      transform: none;
    }
    .top-about-contacts>.section-inner {
      flex-direction: column-reverse;
    }
  
    .about-cont {
      grid-column: 1/3;
      grid-row: 2/3;
      left: 0;
      margin-top: 1.6rem;
      position: relative;
      z-index: 2;
    }
    .about-cont>div:not(:last-child) {
      margin-bottom: 1.2rem;
    }
  
    .top-about-contacts-contacts-wrapper {
      justify-content: flex-end;
      grid-column: 1/3;
    }
  
    .contacts-top-about-contacts {
      display: flex;
      grid-column: 2/3;
      grid-row: 1/2;
      margin: 2rem 0 0;
      width: calc(12rem + 1.2rem + 14rem);
    }
  
    .contacts-top-about-contacts>div {
      display: inline-flex;
    }
    .contacts-top-about-contacts>div:not(:last-child),
    .social-top-about-contacts>div:not(:last-child) {
        margin: 0 1.2rem 0 0;
    }
  
    .social-top-about-contacts {
        grid-row: 2/3;
        grid-column: 1/2;
        margin-right: 0;
        margin-top: .8rem;
  
        display: none;
    }
  }
  
  @media (max-width: 380px) {
      .contacts-top-about-contacts {
        width: calc(11rem + 1.2rem + 13.1rem);
      }
  }
  
  @media (max-width: 330px) {
    .contacts-top-about-contacts {
      width: 16.3rem;
      justify-content: flex-end;
    }
  
    .tel.contacts-top-about-contacts-inner {
      display: none;
    }
  }
  </style>