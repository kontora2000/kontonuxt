<template>
  <div
    v-if="project"
    class="work-cont"
    :class="`work-cont-${project.size}`"
  >
    <div class="work-pic-cont" v-html="content" />
    <div class="work-name-cont">
      <div class="work-name">
        {{ project.title }}
      </div>
      <div class="work-site-link-cont">
        <a class="work-site-link" :href="`https://${project.url}`" target="_blank">
          <span class="link-underline-solid">{{ project.url_title }}</span>
        </a>
      </div>
    </div>
    <button @click="selectProject">
      Редактировать
    </button>
  </div>
</template>

<script>
export default {
  name: 'ProjectItem',
  props: {
    project: {
      type: Object,
      default: null,
      required: true,
    },
    index: {
      type: [Number, String],
      default: 0,
    },
  },
  computed: {
    content () {
      return `${this.project.content}
        <style>${this.project.style}</style>`;
    },
  },
  methods: {
    selectProject () {
      this.$store.commit('projects/SET_CURRENT_PROJECT_ID', this.index);
    },
  },
};
</script>
