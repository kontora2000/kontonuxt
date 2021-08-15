import { firestoreAction } from 'vuexfire';

export const state = () => {
  return {
    projects: [],
    currentProject: null,
  };
};

export const mutations = {
  SET_PROJECTS (state, projects) {
    state.projects = [...state.projects, ...projects];
  },
  SET_CURRENT_PROJECT_ID (id) {
    state.currentProject = state.projects[id] || null;
  },
  SET_CURRENT_PROJECT (project) {
    state.currentProject = project;
  },
};

export const actions = {
  bindProjectsRef: firestoreAction(async function ({ bindFirestoreRef, }) {
    const ref = this.$fire.firestore.collection('projects');
    await bindFirestoreRef('projects', ref, { wait: true, });
  }),
};

export const getters = {
  projects () {
    return this.state.projects;
  },
};
