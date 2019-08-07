const mutations = {
  HIDENAV(state){
    state.flags = false;
  },
  SHOWNAV(state){
    state.flags = true;
  },
  ADDPRODUCT(state,data){
    console.log(data);
    state.shopData.push(data)
  }
}
export default mutations;