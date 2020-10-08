import {
    request
} from './request'

export function getDetail(iid) {
    return request({
        url: '/detail',
        params: {
            iid
        }
    })
}

export function getRecommend() {
    return request({
        url: '/recommend'
    })
}

// this 指向该class
// 详情数据
export class Goods {
    constructor(itemInfo, services, columns) {
        this.title = itemInfo.title
        this.desc = itemInfo.desc
        this.lowNowPrice = itemInfo.lowNowPrice
        this.newPrice = itemInfo.price
        this.oldPrice = itemInfo.oldPrice
        this.realPrice = itemInfo.lowNowPrice
        this.discount = itemInfo.discountDesc
        this.columns = columns
        this.services = services

    }
}
// 店铺数据
export class Shop {
    constructor(shopInfo) {
        this.shopLogo = shopInfo.shopLogo
        this.shopName = shopInfo.name
        this.shopScore = shopInfo.score
        this.shopFans = shopInfo.cFans
        this.shopGoods = shopInfo.cGoods
        this.shopSells = shopInfo.cSells
    }
}

// 尺寸参数
export class Params {
    constructor(info, rule) {
        this.goodsRule = rule.tables[0]
        this.goodsDisclaimer = rule.disclaimer
        this.goodsInfo = info.set
    }
}

// 用户评论
export class Rate {
    constructor(rate) {
        this.cRate = rate.cRate
        this.style = rate.list[0].style
        this.rateTime = rate.list[0].created
        this.rateContent = rate.list[0].content
        this.userPhoto = rate.list[0].user.avatar
        this.userName = rate.list[0].user.uname
        this.rateImages = rate.list[0].images
    }
}