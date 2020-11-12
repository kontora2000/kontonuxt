<template>
  <header>
    <site-logo />
    <navbar />
  </header>
</template>

<script>
import SiteLogo from '@/components/SiteLogo'
import Navbar from '@/components/Navbar'

export default {
  name: 'Header',
  components: {
    SiteLogo,
    Navbar,
  },
}
</script>
