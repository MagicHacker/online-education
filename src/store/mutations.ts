/**
 * mutations管理
 */
const mutations = {
  GET_USER_INFO(state, payload) {
    const { username } = payload;
    state.username = username;
  },
};

export default mutations;
