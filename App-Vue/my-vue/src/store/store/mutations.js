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
            console.log(map);
            if (map.findIndex((element)=>{return element==data.product_id}) >= 0) {
                let filter_item = state.shopData.filter(item=> {
                    return item.product_id == data.product_id

                })
                // console.log(filter_item);
                filter_item[0].goods_num++;
            } else {
                state.shopData.push(data);
            }
        }
        state.checkAllState = false;
    },
    GINCREMENT(state, data) {
        let filterItem = state.shopData.filter((item) => {
            return item.product_id == data
        })
        filterItem[0].goods_num++;
    },
    GDECREMENT(state, data) {
        let filterItem = state.shopData.filter((item) => {
            return item.product_id == data
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