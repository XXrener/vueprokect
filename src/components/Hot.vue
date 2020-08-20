<template>
  <div id="hot">
    <!-- 热门 -->
    <header class="hot_header header">
      <div class="title">本店热销榜</div>
    </header>

    <div class="hot_content">
      <ul class="item_list clearfix">
        <li>
          <img class="item_img" src="../assets/images/imgz/z6.jpg" />
          <div class="inner">
            <h3 class="title">生滚鲍鱼粥</h3>
            <p class="price">¥168</p>
            <span>已售:988份</span>
          </div>
        </li>
        <li>
          <img class="item_img" src="../assets/images/imgz/z8.jpg" />
          <div class="inner">
            <h3 class="title">特补海鲜粥</h3>
            <p class="price">¥138</p>
            <span>已售:625份</span>
          </div>
        </li>
        <li>
          <img class="item_img" src="../assets/images/imgc/c2.jpg" />
          <div class="inner">
            <h3 class="title">特色酱香鸡煲</h3>
            <p class="price">¥78</p>
            <span>已售:586份</span>
          </div>
        </li>
        <li>
          <img class="item_img" src="../assets/images/imgc/c8.jpg" />
          <div class="inner">
            <h3 class="title">酱爆小龙虾</h3>
            <p class="price">¥128</p>
            <span>已售:564份</span>
          </div>
        </li>
        <li>
          <img class="item_img" src="../assets/images/imgc/c11.jpg" />
          <div class="inner">
            <h3 class="title">黑椒骑士扒</h3>
            <p class="price">¥229</p>
            <span>已售:465份</span>
          </div>
        </li>
        <li>
          <img class="item_img" src="../assets/images/imgj/j1.jpg" />
          <div class="inner">
            <h3 class="title">丹顶鹤啤酒</h3>
            <p class="price">¥12/扎</p>
            <span>已售:351份</span>
          </div>
        </li>
      </ul>
    </div>  

    
    <!-- 底部按钮 -->
    <div class="footer_nav">
      <img :src="urlnavigation" alt />
      <p>导航</p>
    </div>

    <div class="footer_books">
      <img :src="urlmenu" alt />
      <p>续单</p>
    </div>

    <div class="footer_cart">
      <img :src="urlcart" alt />
      <p>下单</p>
    </div>
  </div>
</template>

<script>
import urlnav from "../assets/images/navigation.png"; //底部三按钮
import urlmenu from "../assets/images/menu.png";
import urlcart from "../assets/images/cart.png";

export default {
  name: "hot",
  data() {
    return {
      urlnavigation,
      urlmenu,
      urlcart,
      msg: "开始组件挂载",
    };
  },
};
</script>

<style lang="scss" scoped>
#hot{
    /*@charset "utf-8";*/

.hot_header{

    width: 100%;
    height: 4rem;
    // background: #bababa;
    background-image: -webkit-linear-gradient(top,#e9e9e9, #bababa, #a9a9a9);/*chorome 和 ie Edge浏览器*/
    background-image: linear-gradient(top,#e9e9e9, #bababa, #a9a9a9);

    .title{
        font-size: 2rem;
        text-align: center;
        line-height: 4rem;
        font-weight: bold;
        letter-spacing: .1rem;
    }
}

.hot_content{
    
    // margin-top: .5rem;
    background: #fff;
    width: 100%;
    height: 100%;
    .item_list{
        // background: yellow;
        padding: 0rem 1rem 0rem 1rem ;

        
        li{  
            
            padding:1rem 0rem 1rem 1rem ;
            display: flex;
            border-bottom: 1px solid #999999;

            img{
                width: 5rem;
                height: 5rem;
            }

            .inner{
                flex: 1;
                background: #fff;
                padding-left: .5rem;

                .title{
                    font-size: 1.6rem;
                    // line-height: .8rem;
                }

                .price{

                    // font-size: .4rem;
                    // line-height: .6rem;
                    color: red;
                }

                span{
                    font-size: .4rem;
                    line-height: .5rem;
                }
            }
        }
    }
}
}
</style>