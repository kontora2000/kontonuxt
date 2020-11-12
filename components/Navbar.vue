<template>
  <nav class="nav-header">
    <ul class="nav-header-ul">
      <navbar-link>Айдентику</navbar-link>
      <li class="nav-header-link-wrapper">
        <a class="nav-header-link link-undeline-solid nav-header-link-grey " href="#">Сайты</a>
      </li>
      <li class="nav-header-link-wrapper">
        <a class="nav-header-link link-undeline-solid nav-header-link-grey " href="#">Приложухи</a>
      </li>
      <li class="nav-header-link-wrapper">
        <a class="nav-header-link link-undeline-solid nav-header-link-grey " href="#">Реклама</a>
      </li>
      <li class="nav-header-link-wrapper">
        <a class="nav-header-link link-undeline-solid nav-header-link-grey " href="#">Контент</a>
      </li>
    </ul>
  </nav>
</template>

<script>
import NavbarLink from '~/components/Links/NavBarLink'

export default {
  name: 'Navbar',
  components: {
    NavbarLink,
  },
}
</script>
