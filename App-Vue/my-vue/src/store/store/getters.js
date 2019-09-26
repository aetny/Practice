const getters = {
    totalCount(state) {
        let checkData = state.shopData.filter((item) => {return item.check == true});
        let num = checkData.reduce((sum, current) => {return sum + current.product_uprice * current.goods_num }, 0);
        return num
    },
    checkAllState(state) {
        return state.checkAllState
    }
}
export default getters;