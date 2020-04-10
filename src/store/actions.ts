/**
 * actions管理
 */
const actions = {
  getUserInfo(context, payload) {
    context.commit("GET_USER_INFO", payload);
  },
};

export default actions;
