<template>
  <section class="we-design">
    <div class="mainpage-section-header-wrapper">
      <h1 class="mainpage-section-header">
        Делаем
      </h1>
    </div>
    <div class="nav-main">
      <ul class="nav-main-ul">
        <navbar-link>Айдентику</navbar-link>
        <navbar-link>Сайты</navbar-link>
        <navbar-link>Приложения</navbar-link>
        <navbar-link>Рекламу</navbar-link>
        <navbar-link>и&nbsp;контент</navbar-link>
      </ul>
    </div>
    <div style="display: none;" class="button-buy-design-wrapper">
      <nuxt-link to="/order" class="button-buy-design button">
        <span class="button-buy-design-sign"> 
          Купить
          <br>дизайн!
        </span>
      </nuxt-link>
    </div>
  </section>
</template>



<script>
import NavbarLink from '~/components/Links/NavBarLink'

export default {
  name: 'WeDesign',
  components: {
    NavbarLink,
  },
}
</script>



<style scoped>
.we-design {
  margin-top: 12rem;
}

.we-design .mainpage-section-header-wrapper {
    display: inline-block;
    margin-left: 18%;
    min-height: 43rem;
    vertical-align: top;
}

.we-design .mainpage-section-header {
    color: var(--White100);
    mix-blend-mode: difference;
    position: sticky;
    position: -webkit-sticky;
    top: 20rem;
}
.we-design .mainpage-section-header::after {
    background-color: var(--White100);
}

.we-design .nav-main {
    display: inline-block;
}

.button-buy-design-wrapper {
    display: inline-block;
    position: absolute;
    top: 18%;
    right: 6%;
}



@media (min-width: 1340px) {}



@media (max-width: 460px) {}
</style>