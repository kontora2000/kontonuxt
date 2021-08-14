<template>
  <header>
    <site-logo />
    <app-nav-bar />
  </header>
</template>

<script>
import AppNavBar from './NavBar/AppNavBar.vue'
import SiteLogo from '@/components/SiteLogo'

export default {
  name: 'Header',
  components: {
    SiteLogo,
    AppNavBar,
  },
}
</script>
