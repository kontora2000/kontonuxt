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
        <navbar-link>контент в&nbsp;соцсети</navbar-link>
      </ul>
    </div>
    <div class="button-buy-design-wrapper">
      <button class="button-buy-design">
        <span class="button-buy-design-sign">
          Купить
          <br>дизайн!
        </span>
      </button>
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
