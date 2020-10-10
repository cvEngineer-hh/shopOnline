export const imagesLoad = {
    mounted() {
        // 监听商品图片的加载
        this.$bus.$on("goodsImgLoad", () => {
          this.isImageLoad++;
          // 当图片加载完毕时
          if (this.isImageLoad == this.recommend.length) {
            // 重新计算 content 区的高度
            this.$refs.detailScroll.scroll.refresh();
            // 评论区到顶部的距离
            this.childCompTops.push(this.$refs.DetailRate.$el.offsetTop - 44);
            // 获取详情页到顶部的距离
            this.childCompTops.push(this.$refs.DetailImages.$el.offsetTop - 44);
            // 获取详情到顶部的距离
            this.childCompTops.push(this.$refs.GoodsList.$el.offsetTop - 44);
          }
        });
      },
}