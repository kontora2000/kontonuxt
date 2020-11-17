<template>
  <div>
    <site-header />
    <nuxt />
  </div>
</template>

<script>
import SiteHeader from '~/components/Header'
export default {
  components: {
    SiteHeader,
  },
}
</script>
