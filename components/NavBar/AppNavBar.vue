<template>
  <nav class="nav-header">
    <ul class="nav-main-ul">
      <navbar-link hash="ident">Айдентику</navbar-link>
      <navbar-link hash="sites">Сайты</navbar-link>
      <navbar-link hash="apps">Приложухи</navbar-link>
      <navbar-link hash="adv">Реклама</navbar-link>
      <navbar-link hash="content">Контент</navbar-link>
    </ul>
  </nav>
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
