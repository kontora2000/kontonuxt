<template>
  <form @submit.prevent="onSubmit">
    <input v-model="email" name="email" type="email" required>
    <input v-model="pass" name="password" type="password" required>
    <button>
      Авторизоваться
    </button>
  </form>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      pass: '',
    };
  },
  methods: {
    async onSubmit () {
      try {
        await this.$store.dispatch('auth/login', { email: this.email, password: this.pass, });
        if (this.$store.getters['auth/isLoggedIn']) {
          if (localStorage) {
            localStorage.setItem('loggedIn', true);
          }
        }
      } catch (e) {
        console.error(e);
      }
    },
  },
};
</script>
