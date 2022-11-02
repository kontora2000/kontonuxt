<template>
  <li class="nav-main-link-wrapper">
    <nuxt-link
      ref="link"
      :to="hash"
      :class="{ 'hightlighted': isHightlighted, }"
      class="nav-main-link nav-main-link-grey"
    >
      <span class="link-underline-solid">
        <slot />
      </span>
    </nuxt-link>
  </li>
</template>

<script>
export default {
  name: 'NavBarLink',
  props: {
    hash: {
      type: String,
      default: '',
      required: true,
    },
  },
  data () {
    return {
      isHightlighted: false,
    }
  },
  mounted () {
    if (this.hash === 'ident') {
      this.isHightlighted = true
    }
    if (process.client) {
      this.checkIfWhite()
      document.addEventListener('scroll', () => {
        this.checkIfWhite()
      }, { passive: true, })
      window.addEventListener('resize', () => {
        this.checkIfWhite()
      })
    }
  },
  methods: {
    checkIfWhite () {
      if (process.client) {
        const pointer = document.querySelector('.mainpage-section-header')
        if (pointer) {
          const pointerTop = pointer.getBoundingClientRect().top + (pointer.offsetHeight / 2)
          const el = this.$refs.link.$el
          const linkTop = el.getBoundingClientRect().top
          const linkBottom = this.$el.getBoundingClientRect().top + this.$el.offsetHeight
          this.isHightlighted = (pointerTop > linkTop) && (pointerTop < linkBottom)
        }
      }
    },
  },
}
</script>

<style scoped>
.hightlighted {
  color: #fff !important;
}

.nav-main-link-wrapper {
  color: var(--White100);
  font-size: 6.4rem;
  height: 6.8rem;
  letter-spacing: -0.02em;
  line-height: 6rem;
  list-style: none;
  mix-blend-mode: difference;
}
.nav-main-link-wrapper:not(:last-child) {
  margin-bottom: 2.4rem;
}

.nav-main-link {
  color: var(--White100);
  cursor: pointer;
  transition: background-color 0.1s linear, border-bottom-color 0.175s linear,
    color 0.175s linear;
}
.nav-main-link:hover {
  color: var(--White100);
}

.nav-main-link > .link-underline-solid {
  border-bottom-color: var(--White20);
  border-bottom-width: 4px;
}
.nav-main-link:hover > .link-underline-solid {
  border-bottom-color: var(--White100);
  color: var(--White100);
}

.nav-main-link-grey {
  color: var(--White32);
}

@media (min-width: 1340px) {
}

@media (max-width: 500px) {
  .nav-main-link-wrapper {
      font-size: 3.6rem;
      height: 4rem;
      line-height: 4rem;
  }

  .nav-main-link-wrapper:not(:last-child) {
    margin-bottom: 2rem;
  }

  .nav-main-link > .link-underline-solid {
    border-bottom-width: 2.5px;
  }
}

@media (max-width: 380px) {
  .nav-main-link-wrapper {
    font-size: 3.2rem;
  }
}

@media (max-width: 330px) {
  .nav-main-link-wrapper {
    font-size: 3rem;
    height: 3.6rem;
    line-height: 3.6rem;
  }
}
</style>
