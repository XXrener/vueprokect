<template>
  <div id="order">
    <!-- 下单页面 -->
    <div class="order_content">
      <!-- 头部等待信息 -->
      <div class="order_info">
        <div class="order_top">
          <img :src="urltimer" alt />

          <div class="order_info_right">
            <h2>118号桌待门店接单</h2>
            <p>请及时联系服务员确认一点菜品信息!</p>
          </div>
        </div>

        <h3>
          已点菜品28份,合计 :
          <span>222元</span>
        </h3>
      </div>

      <!-- 菜品详情列表 -->
      <div class="order_list">
        <h3>商品详情</h3>

        <ul>
          <li>
            <div class="title">手脚乱伸鱿</div>
            <div class="num">6份</div>
            <div class="price">60元</div>
          </li>
          <li>
            <div class="title">肉色清凉</div>
            <div class="num">6份</div>
            <div class="price">60元</div>
          </li>
          <li>
            <div class="title">手脚乱伸鱿</div>
            <div class="num">6份</div>
            <div class="price">42元</div>
          </li>
          <li>
            <div class="title">椒盐小河侠</div>
            <div class="num">10份</div>
            <div class="price">60元</div>
          </li>
        </ul>
      </div>
    </div>
    <v-navfooter></v-navfooter>
  </div>
</template>

<script>
import navfooter from './public/NavFooter'
export default {
  name: "order",
  data() {
    return {
        urltimer: require('../assets/images/timer.png'),
      msg: "开始组件挂载",
    };
  },
  components:{
    'v-navfooter':navfooter
  }
};
</script>

<style lang="scss" scoped>
#order{
    /*@charset "utf-8";*/

.order_content{

    margin: .5rem;
    
    /*头部客户信息*/
    .order_info{

        background: #fff;
        border-radius: .5rem;
        padding: .5rem;
        .order_top{

            display: flex;
            // flex-wrap: wrap;
            img{
                
                width: 5rem;
                height: 5rem;
            }

            .order_info_right{
                flex: 1;
                
                
                h2,p{
                    padding-left: .5rem;
                }
                h2{
                    font-size: 2rem;
                    line-height: 3rem;
                }
                p{
                    font-size: 1.5rem;
                }
                
            }
        }

        h3{
            padding: 1rem 0rem .5rem 0rem;

            font-size: 1.6rem;
            text-indent: .5rem;
            
            span{
                color: #ff0000;
                font-size: 2rem;
            }
        }
    }

    /* 菜品详情*/
    .order_list{
        
        margin: .5rem 0rem;

        background: #fff;
        padding: .5rem;
        border-radius: .5rem;

        h3{
            line-height: 3rem;
        }
        ul{
            
            li{
                display: flex;
                padding: .5rem .5rem;

                font-size: 1.5rem;
                .title{
                    flex: 2;
                }
                .num,.price{
                    flex: 1;
                }
            }
        }
    }

    /*菜品详情支付页面*/ 

    .order_pay{

        background: #fff;
        border-radius: .5rem;
        padding: .5rem;

        

        h3{
            line-height: 1.5rem;
            // display: inline;
            text-align: center;
            font-size: .6rem;

        }

        .order_pay_detail{

            display: flex;

            font-size: .4rem;
            line-height: 1rem;

            border-bottom: 1px solid #e2e2e2;

            .desk_num,.people_num,.order_timer{
                flex: 1;
            }

            
        }

        .order_pay_info{

            display: flex;
            margin: .4rem 0rem;
            padding-top: .5rem;

            .price_list{

                flex: 1;
                font-size: .4rem;

                span{
                    color: #ff0000;
                    font-size: .7rem;
                }
            }

            .pay_button{
                
                font-size: .5rem;
                background: #ff0000;
                border-radius: .5rem;

                text-align: center;
                line-height: 1rem;
                width: 3rem;
            }
        }

    }
}
}
</style>