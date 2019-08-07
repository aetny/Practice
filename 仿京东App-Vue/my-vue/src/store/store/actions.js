const actions = {
  hideNav(content){
    content.commit('HIDENAV');
  },
  showNav(content){
    content.commit('SHOWNAV');
  },
  addProduct({commit},data){
    commit('ADDPRODUCT',data);
  },
  delProduct({commit}){
    commit('DELPRODUCT');
  },
}
export default actions;