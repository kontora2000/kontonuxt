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
      duration: 0.001,
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
  .nav-main-link-wrapper {
      color: var(--White100);
      font-size: 6.4rem;
      height: 6.8rem;
      letter-spacing: -.02em;
      line-height: 6rem;
      list-style: none;
      mix-blend-mode: difference;
  }
  .nav-main-link-wrapper:not(:last-child) {
      margin-bottom: 4rem;
  }
  .nav-main-link-wrapper:last-child {
      margin-left: 1.8rem;
  }

  .nav-main-link {
      border-radius: 100px;
      color: var(--White100);
      padding: 0 2rem;
      transition: background-color .1s linear,
                  border-bottom-color .175s linear,
                  color .175s linear;
  }
  .nav-main-link:hover {
      background-color: var(--White100);
      color: var(--Black100);
  }

  .nav-main-link>.link-underline-solid {
      border-bottom-color: var(--White20);
      border-bottom-width: 3px;
  }
  .nav-main-link:hover>.link-underline-solid {
      border-bottom-color: transparent;
  }

   .nav-main-link-grey { 
    color: var(--White32)
  }



  @media (min-width: 1340px) {

  }



  @media (max-width: 460px) {

  }
</style>
