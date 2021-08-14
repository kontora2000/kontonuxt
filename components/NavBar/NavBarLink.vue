<template>
  <li class="nav-main-link-wrapper">
    <nuxt-link ref="link" :to="`#${hash}`" class="nav-main-link nav-main-link-grey">
      <span class="link-underline-solid">
        <slot />
      </span>
    </nuxt-link>
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
  props: {
    hash: {
      type: String,
      default: '',
      required: true,
    },
  },
  mounted () {
    const h = this.props.hash;
    const ulOffsetTop = `${document.querySelector('.nav-main-ul').offsetTop + 50}px`
    
    gsap.to(this.$refs.link, {
      css: {
        color: 'red',
      },
      duration: 0.2,
      scrollTrigger: {
        trigger: this.$el,
        toggleActions: 'play reverse reverse reverse',
        start: `top ${ulOffsetTop}`,
        markers: true,
      },
      onStart: () => {
         
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
