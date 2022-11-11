<template>
  <header>
    <site-logo />
  </header>
</template>

<script>
import SiteLogo from '@/components/SiteLogo'

export default {
  name: 'Header',
  components: {
    SiteLogo,
  },
}
</script>

<style scoped>
header {
    color: var(--White32);
    mix-blend-mode: exclusion;
    padding: 3.2rem 0;
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    top: 0;
    width: 100%;
    max-width: 1600px;
    z-index: 0;
}

header>div {
    display: inline-block;
}

header a { 
    color: var(--White32);
}
header a:hover {
    color: var(--White100);
}

header a.link-underline-solid,
header a.link-underline-dashed { 
    border-bottom-color: var(--White16);
}
header a.link-underline-solid:hover,
header a.link-underline-dashed:hover { 
    border-bottom-color: var(--White100);
}

.nav-header {
    display: none;
}

@media (max-width: 500px) {
  header {
    padding: 1.2rem 0;
    position: fixed;
    left: 0;
    top: 0;
    transform: none;
  }
}
@media (max-width: 380px) {
  
}
</style>