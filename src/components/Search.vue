<template>
  <div id="search">
    <!-- 搜索页面 -->
    <header class="search_header header">
      <div class="title">
        <input class="search" type="text" />
      </div>
    </header>

    <div class="search_content">
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
      <p>购物车</p>
    </div>
  </div>
</template>

<script>
import urlnav from "../assets/images/navigation.png"; //底部三按钮
import urlmenu from "../assets/images/menu.png";
import urlcart from "../assets/images/cart.png";

export default {
    name:'search',
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
#search{
    /*@charset "utf-8";*/

.search_header{

    width: 100%;
    height: 4rem;
    // background: #bababa;
    background-image: -webkit-linear-gradient(top,#e9e9e9, #bababa, #a9a9a9);/*chorome 和 ie Edge浏览器*/
    background-image: linear-gradient(top,#e9e9e9, #bababa, #a9a9a9);

    line-height: 5.5rem;

    .title{

        width: 100%;
        height: 100%;
        text-align: center;

        .search{
            
            
            font-size: 4rem;
            line-height: 4rem;
            height: 2.5rem;
            width: 80%;

            border-radius: .25rem;
            border: none;

            /* 去掉焦点边框*/
            outline: none;
        }
    }
    
}

.search_content{

    .item_list{

        background: rgb(255, 255, 255);
        padding: 0.5rem 0rem 0.5rem 0rem;

        li{

            display: flex;
            padding: 0.5rem 0rem 0.5rem .5rem;
            border-bottom: solid 1px #999;

            img{
                width: 8rem;
                height: 8rem;
            }

            .inner{
                flex: 1;
                margin-left: 1rem;

                //.title{
                    // font-size: .5rem;
                    // line-height: .8rem;
                //}

                .price{

                    // font-size: .4rem;
                    // line-height: .6rem;
                    color: red;
                }

                span{
                    font-size: 1.5rem;
                    line-height: 2.5rem;
                }
            }
        }

    }
}

}
</style>