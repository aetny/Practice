const getters = {
    totalCount(state) {
        let checkData = state.filter((item) => { if (item.check == true) return item });
        let num = checkData.reduce((sum, current) => { sum + current.product_uprice * current.goods_num }, 0);
        return num
    }
}
export default getters;