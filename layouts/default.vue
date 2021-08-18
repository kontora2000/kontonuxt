<template>
  <div>
    <site-header />
    <nuxt />
    <site-footer />
  </div>
</template>

<script>
import SiteHeader from '~/components/Header';
import SiteFooter from '~/components/Footer';
export default {
  components: {
    SiteHeader,
    SiteFooter,
  },
};
</script>
