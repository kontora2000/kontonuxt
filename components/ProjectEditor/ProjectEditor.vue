<template>
  <div v-if="isVisible" class="project-editor">
    <form class="project-editor-form" @submit.prevent="updateProject">
      <input v-model="title" type="text" @change="updateCurrentProject">
      <input v-model="slug" type="text" @change="updateCurrentProject">
      <input v-model="url" type="text" @change="updateCurrentProject">
      <input v-model="size" type="text" @change="updateCurrentProject">
      <textarea v-model="content" />
      <button>Сохранить изменения</button>
    </form>
    <div class="close-editor" @click.prevent="close">
      &times;
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectEditor',
  data () {
    return {
      isVisible: false,
      title: '',
      slug: '',
      url: '',
      content: '',
      url_title: '',
      size: '',
    };
  },
  computed: {
    current: ({ $store, }) => $store.state.projects.currentProject,
  },
  watch: {
    current () {
      this.title = this.current.title || '';
      this.content = this.current.content || '';
      this.size = this.current.size || '';
      this.slug = this.current.slug || '';
      this.url_title = this.current.url_title || '';
      if (this.current && this.current.id) { this.isVisible = true; };
    },
  },
  methods: {
    close () {
      this.isVisible = false;
      this.$store.commit('projects/SET_CURRENT_PROJECT', {});
    },
    updateProject () {
      this.$store.dispatch('projects/updateProject', {
      });
    },
    updateCurrentProject () {
      this.$store.commit('projects/SET_CURRENT_PROJECT', {
        title: this.title,
        slug: this.slug,
        size: this.size,
        content: this.content, 
        url: this.url,
      });
    },
  },
};
</script>
<style scoped>
.project-editor {
  position: fixed;
  z-index: 10;
  background-color: var(--Black100);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
}
.close-editor {
  justify-self: flex-end;
  color: var(--White100);
  font-size: 2rem;
  cursor: pointer;
}
.close-editor:hover{
  color: #ccc;
}
button {
  background: radial-gradient(100% 100% at 100% 0%, #00AFFF 0%, #0055FF 100%);
}
input, textarea {
  border-radius: 2.4rem;
  outline: none;
  background: rgba(255, 255, 255, 0.12);
  color: var(--White100);
}
textarea {
  resize: none;
}
</style>
