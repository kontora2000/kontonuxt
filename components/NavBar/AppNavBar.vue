<template>
  <div class="nav-main">
    <ul class="nav-main-ul">
      <navbar-link hash="ident">
        Айдентику
      </navbar-link>
      <navbar-link hash="sites">
        Сайты
      </navbar-link>
      <navbar-link hash="apps">
        Приложухи
      </navbar-link>
      <navbar-link hash="adv">
        Рекламу
      </navbar-link>
      <navbar-link hash="content">
        Контент
      </navbar-link>
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
      position: relative;
  }
</style>
