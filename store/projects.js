
import { firestoreAction } from 'vuexfire';

export const state = () => {
  return {
    projects: [],
    currentProject: null,
    isLoading: false,
  };
};

export const mutations = {
  SET_PROJECTS (state, projects) {
    state.projects = [...state.projects, ...projects];
  },
  SET_CURRENT_PROJECT_ID (state, id) {
    state.currentProject = state.projects[id];
  },
  SET_CURRENT_PROJECT (state, project) {
    state.currentProject = project;
  },
  SET_IS_LOADING (state, isLoading) {
    state.isLoading = isLoading;
  },
};

export const actions = {
  bindProjectsRef: firestoreAction(async function ({ bindFirestoreRef, }) {
    const ref = this.$fire.firestore.collection('projects');
    await bindFirestoreRef('projects', ref, { wait: true, });
  }),
  // updateProject ({ state, commit, }, project) {
  //   commit('projects/SET_IS_LOADING', true);
  //   return db
  //     .collection('projects')
  //     .doc(this.state.currentProject.id)
  //     .set(state.currentProject)
  //     .then(() => {
  //       commit('projects/SET_IS_LOADING', false);
  //     });
  // },
};

export const getters = {
  projects () {
    return this.state.projects;
  },
};
