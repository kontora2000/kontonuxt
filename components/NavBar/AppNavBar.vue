<template>
  <div class="nav-main">
    <ul class="nav-main-ul">
      <li class="nav-main-link-wrapper">
        <navbar-link hash="sites" class="nav-main-link-sites">
          Сайты
        </navbar-link>
        <div class="header-bg header-bg-sites"></div>
      </li>
      <li class="nav-main-link-wrapper">
        <navbar-link hash="apps" class="nav-main-link-apps">
          Приложухи
        </navbar-link>
        <div class="header-bg header-bg-apps"></div>
      </li>
      <li class="nav-main-link-wrapper">
        <navbar-link hash="branding" class="nav-main-link-branding">
          Брендинг
        </navbar-link>
        <div class="header-bg header-bg-branding"></div>
      </li>
      <li class="nav-main-link-wrapper">
        <navbar-link hash="adv" class="nav-main-link-adv">
          Рекламу
        </navbar-link>
        <div class="header-bg header-bg-adv"></div>
      </li>
      <li class="nav-main-link-wrapper">
        <navbar-link hash="content" class="nav-main-link-content">
          Контент
        </navbar-link>
        <div class="header-bg header-bg-content"></div>
      </li>
    </ul>
  </div>
</template>

<script>
import NavbarLink from '~/components/NavBar/NavBarLink'

export default {
  name: 'AppNavBar',
  components: {
    NavbarLink,
  },
}
</script>

<style scoped>
.we-design .nav-main {
    display: inline-block;
    position: relative;
    z-index: 1;
}
.nav-main-link-wrapper {
  color: var(--White100);
  font-size: 6.4rem;
  letter-spacing: -0.02em;
  line-height: 6rem;
  list-style: none;
  mix-blend-mode: difference;
}
.nav-main-link-wrapper:not(:last-child) {
  margin-bottom: 2rem;
}

.header-bg {
  background-size: cover;
  background-position: 0 0;
  background-repeat: no-repeat;
  position: absolute;
  width: 800px;
  height: 64vh;
  top: -10%;
  left: -110%;
  transform: scale(1.2);
  opacity: 0;
  transition: opacity .5s cubic-bezier(.23,1,.32,1) .2s, transform .5s cubic-bezier(.23,1,.32,1) .2s,-webkit-transform .5s cubic-bezier(.23,1,.32,1) .2s,-moz-transform .5s cubic-bezier(.23,1,.32,1) .2s,-o-transform .5s cubic-bezier(.23,1,.32,1) .2s;
  z-index: -1;
  will-change: transform;
}

.header-bg-apps { background: rgb(255, 0, 0); }
.header-bg-sites {
  background-image: url('../../static/img/header-bgs/header-bg-websites-denresp.webp');
}
.header-bg-branding {
  background-image: url('../../static/img/header-bgs/header-bg-branding-akbshka.webp');
}
.header-bg-adv { background: #ff0; }
.header-bg-content { background: #0ff; }

.nav-main-link-apps.highlighted + .header-bg-apps,
.nav-main-link-sites.highlighted + .header-bg-sites,
.nav-main-link-branding.highlighted + .header-bg-branding,
.nav-main-link-adv.highlighted + .header-bg-adv,
.nav-main-link-content.highlighted + .header-bg-content {
  opacity: .32;
  transform: scale(1);
}

@media (max-width: 500px) {
  .nav-main-link-wrapper {
      font-size: 3.6rem;
      height: 4rem;
      line-height: 4rem;
  }
}

@media (max-width: 380px) {
  .nav-main-link-wrapper {
    font-size: 3.2rem;
  }
}


@media (max-width: 330px) {
  .nav-main-link-wrapper {
    font-size: 3rem;
    height: 3.6rem;
    line-height: 3.6rem;
  }
}
</style>
