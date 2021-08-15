<template>
  <form @submit.prevent="onSubmit">
    <input v-model="login" name="login" type="text">
    <input v-model="pass" name="password" type="password">
    <button>
      Авторизоваться
    </button>
  </form>
</template>

<script>
export default {
  data () {
    return {
      login: '',
      pass: '',
    };
  },
  methods: {
    async onSubmit () {
      try {
        await this.store.dispatch('auth/login');
      } catch (e) {
        console.error(e);
      }
    },
  },
};
</script>
