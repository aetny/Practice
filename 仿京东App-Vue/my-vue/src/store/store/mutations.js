const mutations = {
    HIDENAV(state) {
        state.flags = false;
    },
    SHOWNAV(state) {
        state.flags = true;
    },
    ADDPRODUCT(state, data) {
        console.log(data);
        if (state.shopData.length == 0) {
            state.shopData.push(data);
        } else {
            let map = state.shopData.map((item) => item.product_id);
            if (map.findIndex(data.product_id) >= 0) {
                let filter_item = state.shopData.filter((index, item) => {
                    return item.product_id == data.product_id
                })
                filter_item[0].goods_num++;
            } else {
                state.shopData.push(data);
            }
        }
        state.checkAllState = false;
    },
    GINCREMENT(state, data) {
        let filterItem = state.shopData.filter((item) => {
            return item.product_id == data.product_id
        })
        filterItem[0].goods_num++;
    },
    GDECREMENT(state, data) {
        let filterItem = state.shopData.filter((item) => {
            return item.product_id == data.product_id
        })
        filterItem[0].goods_num <= 1 ?
            filterItem[0].goods_num = 1 :
            filterItem[0].goods_num--;
    },
    DELCARTDATA(state, data) {
        delete state.shopData.filter(item => {
            return item.product_id == data
        })[0];
    },
    ALLCHECKSTATUE(state, data) {
        state.checkAllState = !state.checkAllState
        state.shopData.forEach((item) => {
            item.check = state.checkAllState
        })
    },
    CHECKCHANGE(state, data) {
        state.checkAllState = state.shopData.every((item) => { return item.check == true; })
    }
}
export default mutations;