export default {
    // 获取购物车总数
    cartLength(state) {
        return state.cartList.length
    },
    shopAmount(state) {
        return state.cartList
    },
    // 选中的商品
    totalLength(state) {
        return state.cartList.filter(item => item.checked == true).length
    },
    // 选中商品价格之和
    totalAmount(state) {
        let totalShop = state.cartList.filter(item => {
            return item.checked == true
        })
        let totalAmount = 0;
        for (let item of totalShop) {
            totalAmount += item.price * item.amount
        }
        return totalAmount
    },
    // 判断是否有 商品未选中
    youChecked(state) {
        return state.cartList.filter(item => {
            item.checked == true
        })
    }
}