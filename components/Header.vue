<template>
    <header>
        <Logo />
        <Navbar />
    </header>
</template>

<script>
import Logo from '@/components/Logo'
import Navbar from '@/components/Navbar'



export default {
  name: 'Header',
  components: {
    Logo,
    Navbar
  }
}
</script>
