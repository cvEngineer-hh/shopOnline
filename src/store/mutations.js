export default {
    // 购物车商品
    addCart(state, payload) {
        // 根据商品 id 记录商品数量
        let oldPayload = state.cartList.find(item => item.iid == payload.iid)
        if (oldPayload) {
            oldPayload.amount++
        } else {
            payload.checked = false
            payload.amount = 1
            state.cartList.push(payload)
        }
    },
    // 添加复选框状态
    cartRadio(state, iid) {
        let itemActive = state.cartList.find(item => item.iid == iid)
        itemActive.checked = !itemActive.checked
    },
    // 商品数量加一
    amountAdd(state, iid) {
        let itemActive = state.cartList.find(item => item.iid == iid)
        itemActive.amount++
    },
    // 商品数量减一
    amountSub(state, iid) {
        let itemActive = state.cartList.find(item => item.iid == iid)
        // 当商品数量为小与1时，删除该商品
        if (itemActive.amount <= 1) {
            this.commit('delete', iid)
        } else {
            itemActive.amount--
        }
    },
    // 被动删除
    delete(state, iid) {
        // 筛选出当前商品
        let itemActive = state.cartList.find(item => item.iid == iid)
        // 获取当前商品下标
        let index = state.cartList.indexOf(itemActive);
        state.cartList.splice(index, 1)
    },
    // 删除被选中的商品
    deleteSelect(state) {
        let shopSelect = state.cartList.filter(item => item.checked == true);
        
        shopSelect.forEach(item => {
            this.commit('delete', item.iid)
        })
    },
    // 将所有商品的复选框选中
    allTrue(state) {
        state.cartList.forEach(item => item.checked = true)
    },
    // 将所有商品的复选框不选中
    allFalse(state) {
        state.cartList.forEach(item => item.checked = false)
    }
}