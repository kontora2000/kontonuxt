
export const state = () => {
  return {
    imageOnCursor: '',
    status: 'online',
  };
};

export const mutations = {
  SET_IMAGE_ON_CURSOR (state, src) {
    state.imageOnCursor = src;
  },
};
