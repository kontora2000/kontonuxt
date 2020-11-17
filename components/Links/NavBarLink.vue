<template>
  <li class="nav-main-link-wrapper">
    <a ref="link" class="nav-main-link nav-main-link-grey">
      <span class="link-underline-solid">
        <slot />
      </span>
    </a>
  </li>
</template>

<script>
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (process.client) {
  gsap.registerPlugin(ScrollTrigger)
}

export default {
  name: 'NavBarLink',
  mounted () {
    const ulOffsetTop = document.querySelector('.nav-main-ul').offsetTop + 50 + 'px'
    gsap.to(this.$refs.link, {
      css: {
        color: '#fff',
      },
      duration: 0.2,
      scrollTrigger: {
        trigger: this.$el,
        toggleActions: 'play reverse reverse reverse',
        start: `top ${ulOffsetTop}`,
        markers: true,
      },
    })
  },
}
</script>

<style scoped>
   .nav-main-link-grey {
    color: var(--White32)
  }
</style>
