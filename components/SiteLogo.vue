<template>
  <div class="logo-wrapper">
    <nuxt-link class="logo" to="/">Контора<sup class="logo-sup">®</sup></nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'SiteLogo',
}
</script>

<style scoped>
.logo-wrapper {
    margin-left: 2.8rem;
  }

@media (max-width: 500px) {
  .logo-wrapper {
    margin-left: .8rem;
  }
}
</style>
