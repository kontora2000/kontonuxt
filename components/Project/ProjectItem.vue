<template>
  <div
    v-if="project"
    class="work-cont"
    :class="[`work-cont-${project.size}`, { selected: isSelected }]"
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
    index: {
      type: [Number, String],
      default: 0,
    },
  },
  data () {
    return {
      isCurrent: false,
    };
  },
  computed: {
    content () {
      return `${this.project.content}
        <style>${this.project.style}</style>`;
    },
    isSelected () {
      return this?.project?.slug === this.$store.state.projects?.currentProject?.slug;
    },
    project () {
      return this.isCurrent ? this.$store.state?.projects.projects?.currentProject : this.$store.state?.projects.projects[this.index];
    },
  },
  watch: {
    isSelected () {
      this.isCurrent = this.isSelected;
    }, 
  },
  methods: {
    selectProject () {
      this.$store.commit('projects/SET_CURRENT_PROJECT_ID', this.index);
    },
  },
};
</script>

<style scoped>
 .selected {
   outline: var(--Red100) .5rem dashed ;
 }
</style>
