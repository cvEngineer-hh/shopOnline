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
        itemActive.amount--
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