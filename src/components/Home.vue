<template>
  <div id="home">
    <header class="index_header">
      <nav>
        <ul class="index_list">
          <li>
            <img :src="urlreshou" alt />
            <p>热销榜</p>
          </li>
          <li>
            <img :src="urlcaidan" alt />
            <P>你点过的菜</P>
          </li>
          <li>
            <img :src="urlsousou" alt />
            <p>猜你喜欢</p>
          </li>
        </ul>
      </nav>
    </header>
    <!-- 侧边栏分类菜单 -->
    <aside class="left_cate" id="left_cate">
      <ul>
        <li>精品粥类</li>
        <li>精品小炒</li>
        <li>精品烧烤</li>
        <li>精品酒水</li>
        <li>特色推荐</li>
        <li>厨师长推荐</li>
      </ul>

      <!-- 菜单按钮 -->
      <div class="nav_cate" id="nav_cate" @click="asideDomInit()">
        <img :src="urlnav" />
        <p>菜单</p>
      </div>
    </aside>

    <!-- 内容区 -->
    <div class="content">
      <div class="item">
        <h3 class="item_cate">特色粥类</h3>

        <ul class="item_list">
          <li>
            <router-link to="pcontent">
              <div class="inner">
                <img src="../assets/images/imgz/z1.jpg" alt />
                <p class="title">精制虾仁粥</p>
                <p class="price">
                  <span>￥</span>24
                </p>
              </div>
            </router-link>
          </li>

          <li>
            <router-link to="pcontent">
              <div class="inner">
                <img src="../assets/images/imgz/z2.jpg" alt />
                <p class="title">咸菜皮蛋粥</p>
                <p class="price">
                  <span>￥</span>12
                </p>
              </div>
            </router-link>
          </li>
          <li>
            <router-link to="pcontent">
              <div class="inner">
                <img src="../assets/images/imgz/z3.jpg" alt />
                <p class="title">秘制八宝粥</p>
                <p class="price">
                  <span>￥</span> 16
                </p>
              </div>
            </router-link>
          </li>
          <li>
            <div class="inner">
              <img src="../assets/images/imgz/z4.jpg" alt />
              <p class="title">青菜瘦肉粥</p>
              <p class="price">
                <span>￥</span>21
              </p>
            </div>
          </li>
          <li>
            <div class="inner">
              <img src="../assets/images/imgz/z5.jpg" alt />
              <p class="title">特制小米粥</p>
              <p class="price">
                <span>￥</span>15
              </p>
            </div>
          </li>
          <li>
            <div class="inner">
              <img src="../assets/images/imgz/z6.jpg" alt />
              <p class="title">生滚鲍鱼粥</p>
              <p class="price">
                <span>￥</span>168
              </p>
            </div>
          </li>
          <li>
            <div class="inner">
              <img src="../assets/images/imgz/z7.jpg" alt />
              <p class="title">上等紫薯粥</p>
              <p class="price">
                <span>￥</span>17
              </p>
            </div>
          </li>
          <li>
            <div class="inner">
              <img src="../assets/images/imgz/z8.jpg" alt />
              <p class="title">特补海鲜粥</p>
              <p class="price">
                <span>￥</span>138
              </p>
            </div>
          </li>
        </ul>
      </div>

      <div class="item">
        <h3 class="item_cate">各色小炒</h3>

        <ul class="item_list">
          <li>
            <div class="inner">
              <img src="../assets/images/imgc/c1.jpg" alt />
              <p class="title">秘制五花肉</p>
              <p class="price">
                <span>￥</span>67
              </p>
            </div>
          </li>
          <li>
            <div class="inner">
              <img src="../assets/images/imgc/c2.jpg" alt />
              <p class="title">特色酱香鸡煲</p>
              <p class="price">
                <span>￥</span>78
              </p>
            </div>
          </li>
          <li>
            <div class="inner">
              <img src="../assets/images/imgc/c3.jpg" alt />
              <p class="title">银丝炒肉</p>
              <p class="price">
                <span>￥</span>26
              </p>
            </div>
          </li>
          <li>
            <div class="inner">
              <img src="../assets/images/imgc/c4.jpg" alt />
              <p class="title">菜上长块叉烧</p>
              <p class="price">
                <span>￥</span>21
              </p>
            </div>
          </li>
          <li>
            <div class="inner">
              <img src="../assets/images/imgc/c5.jpg" alt />
              <p class="title">清炒猪肚皮</p>
              <p class="price">
                <span>￥</span>66
              </p>
            </div>
          </li>
          <li>
            <div class="inner">
              <img src="../assets/images/imgc/c6.jpg" alt />
              <p class="title">三鲜战肉丝</p>
              <p class="price">
                <span>￥</span>38
              </p>
            </div>
          </li>
          <li>
            <div class="inner">
              <img src="../assets/images/imgc/c7.jpg" alt />
              <p class="title">白灼大侠</p>
              <p class="price">
                <span>￥</span>68
              </p>
            </div>
          </li>
          <li>
            <div class="inner">
              <img src="../assets/images/imgc/c8.jpg" alt />
              <p class="title">酱爆小龙虾</p>
              <p class="price">
                <span>￥</span>128
              </p>
            </div>
          </li>
          <li>
            <div class="inner">
              <img src="../assets/images/imgc/c9.jpg" alt />
              <p class="title">酱爆鱿鱼丝</p>
              <p class="price">
                <span>￥</span>98
              </p>
            </div>
          </li>
          <li>
            <div class="inner">
              <img src="../assets/images/imgc/c10.jpg" alt />
              <p class="title">墨鱼干锅</p>
              <p class="price">
                <span>￥</span>119
              </p>
            </div>
          </li>
          <li>
            <div class="inner">
              <img src="../assets/images/imgc/c11.jpg" alt />
              <p class="title">黑椒骑士扒</p>
              <p class="price">
                <span>￥</span>229
              </p>
            </div>
          </li>
          <li>
            <div class="inner">
              <img src="../assets/images/imgc/c12.jpg" alt />
              <p class="title">一肘定江山</p>
              <p class="price">
                <span>￥</span>158
              </p>
            </div>
          </li>
        </ul>
      </div>

      <div class="item">
        <h3 class="item_cate">烤遍天下</h3>

        <ul class="item_list">
          <li>
            <div class="inner">
              <img src="../assets/images/imgs/s1.jpg" alt />
              <p class="title">羊肠而过</p>
              <p class="price">
                <span>￥</span>3/串
              </p>
            </div>
          </li>
          <li>
            <div class="inner">
              <img src="../assets/images/imgs/s2.jpg" alt />
              <p class="title">椒盐小河侠</p>
              <p class="price">
                <span>￥</span>6/串
              </p>
            </div>
          </li>
          <li>
            <div class="inner">
              <img src="../assets/images/imgs/s3.jpg" alt />
              <p class="title">蜜蜜中翅</p>
              <p class="price">
                <span>￥</span>15/串
              </p>
            </div>
          </li>
          <li>
            <div class="inner">
              <img src="../assets/images/imgs/s4.jpg" alt />
              <p class="title">青青焦了</p>
              <p class="price">
                <span>￥</span>2/串
              </p>
            </div>
          </li>
          <li>
            <div class="inner">
              <img src="../assets/images/imgs/s5.jpg" alt />
              <p class="title">肉色清凉</p>
              <p class="price">
                <span>￥</span>7/串
              </p>
            </div>
          </li>
          <li>
            <div class="inner">
              <img src="../assets/images/imgs/s6.jpg" alt />
              <p class="title">特制大香蕉</p>
              <p class="price">
                <span>￥</span>7/串
              </p>
            </div>
          </li>
          <li>
            <div class="inner">
              <img src="../assets/images/imgs/s7.jpg" alt />
              <p class="title">过江猛耗</p>
              <p class="price">
                <span>￥</span>10/只
              </p>
            </div>
          </li>
          <li>
            <div class="inner">
              <img src="../assets/images/imgs/s8.jpg" alt />
              <p class="title">手脚乱伸鱿</p>
              <p class="price">
                <span>￥</span>10/串
              </p>
            </div>
          </li>
        </ul>
      </div>

      <div class="item">
        <h3 class="item_cate">奶奶相惜</h3>

        <ul class="item_list">
          <li>
            <div class="inner">
              <img src="../assets/images/imgn/n1.jpg" alt />
              <p class="title">黑不溜秋奶茶</p>
              <p class="price">
                <span>￥</span>18
              </p>
            </div>
          </li>
          <li>
            <div class="inner">
              <img src="../assets/images/imgn/n2.jpg" alt />
              <p class="title">加冰的奶茶</p>
              <p class="price">
                <span>￥</span>21
              </p>
            </div>
          </li>
          <li>
            <div class="inner">
              <img src="../assets/images/imgn/n3.jpg" alt />
              <p class="title">淋上金粉的奶茶</p>
              <p class="price">
                <span>￥</span>28
              </p>
            </div>
          </li>
          <li>
            <div class="inner">
              <img src="../assets/images/imgn/n4.jpg" alt />
              <p class="title">加了西米的奶茶</p>
              <p class="price">
                <span>￥</span>19
              </p>
            </div>
          </li>
          <li>
            <div class="inner">
              <img src="../assets/images/imgn/n5.jpg" alt />
              <p class="title">麦麦奶茶</p>
              <p class="price">
                <span>￥</span>18
              </p>
            </div>
          </li>
          <li>
            <div class="inner">
              <img src="../assets/images/imgn/n6.jpg" alt />
              <p class="title">拉花奶茶</p>
              <p class="price">
                <span>￥</span>31
              </p>
            </div>
          </li>
          <li>
            <div class="inner">
              <img src="../assets/images/imgn/n7.jpg" alt />
              <p class="title">肥仔快乐水</p>
              <p class="price">
                <span>￥</span>8
              </p>
            </div>
          </li>
        </ul>
      </div>

      <div class="item">
        <h3 class="item_cate">干杯BIBI</h3>

        <ul class="item_list">
          <li>
            <div class="inner">
              <img src="../assets/images/imgj/j1.jpg" alt />
              <p class="title">丹顶鹤啤酒</p>
              <p class="price">
                <span>￥</span>12/扎
              </p>
            </div>
          </li>
          <li>
            <div class="inner">
              <img src="../assets/images/imgj/j2.jpg" alt />
              <p class="title">拳拳到肉啤酒</p>
              <p class="price">
                <span>￥</span>12/瓶
              </p>
            </div>
          </li>
          <li>
            <div class="inner">
              <img src="../assets/images/imgj/j3.jpg" alt />
              <p class="title">燕麦啤酒</p>
              <p class="price">
                <span>￥</span>18/扎
              </p>
            </div>
          </li>
          <li>
            <div class="inner">
              <img src="../assets/images/imgj/j4.jpg" alt />
              <p class="title">飘零的雪花</p>
              <p class="price">
                <span>￥</span>6/瓶
              </p>
            </div>
          </li>
          <li>
            <div class="inner">
              <img src="../assets/images/imgj/j5.jpg" alt />
              <p class="title">是啤酒就行</p>
              <p class="price">
                <span>￥</span>3/瓶
              </p>
            </div>
          </li>
          <li>
            <div class="inner">
              <img src="../assets/images/imgj/j6.jpg" alt />
              <p class="title">贴英文的啤酒</p>
              <p class="price">
                <span>￥</span>33/瓶
              </p>
            </div>
          </li>
          <li>
            <div class="inner">
              <img src="../assets/images/imgj/j7.jpg" alt />
              <p class="title">西安啤酒</p>
              <p class="price">
                <span>￥</span>8/瓶
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- 蒙版 -->
    <div class="masking" id="masking"></div>

    <!-- 定位按钮 导航 购物车 -->
    <div class="footer_nav">
      <img :src="urlnavigation" alt />
      <p>导航</p>
    </div>

    <div class="footer_cart">
      <img :src="urlcart" alt />
      <p>购物车</p>
    </div>
    <v-navfooter></v-navfooter>
  </div>
</template>

<script>
import urlreshou from "../assets/images/rexiao.png";
import urlcaidan from "../assets/images/caidan.png";
import urlsousou from "../assets/images/sousuo.png";

import urlnav from "../assets/images/nav.png"; //底部三按钮
import urlnavigation from "../assets/images/navigation.png";
// import urlcart from "../assets/images/cart.png";

//组件引入
import navfooter from './public/NavFooter'

export default {
  name: "home",
  data() {
    return {
      msg: "开始组件挂载",
      urlreshou ,
      urlcaidan,
      urlsousou,
      urlnav,
      urlnavigation,
      urlcart:require('../assets/images/cart.png')
    };
  },
  methods: {
    asideDomInit() {
      var navCate = document.getElementById("nav_cate"); //菜单
      var leftCate = document.getElementById("left_cate"); //分类列表
      var masking = document.getElementById("masking"); //蒙版
      var flag = true; //中间变量 通过真假 让同一次点击执行不同结果

      masking.onclick = navCate.onclick = function () {
        //蒙版点击事件与菜单按钮一同监听 并执行同一函数
        // alert('1')

        if (flag == true) {
          flag = false;
          leftCate.style.transform = "translate(0,0)";
          masking.style.display = "block";

          document.body.style.overflow = "hidden"; //通过设置滚动条隐藏 让其不能移动蒙版下面的内容区
        } else {
          flag = true;
          leftCate.style.transform = "translate(-100%,0)";
          masking.style.display = "none";

          document.body.style.overflow = "auto"; //如果内容被修剪，则浏览器会显示滚动条以便查看其余的内容
        }
        console.log(flag);
      };
    },
  },
  mounted() {
    asideDomInit();
  },
  components:{
    'v-navfooter':navfooter
  }
};
</script>

<style lang="scss" scoped>
#home {
  .index_header {
    width: 96%;

    margin: 0 auto;

    height: 4.4rem;

    background: #fff;
    margin-top: 1rem;

    display: flex;
    border-radius: 0.5rem;

    // .hlist{

    //     flex: 1;
    //     text-align: center;
    //     padding-top: .2rem;
    //     border-right: 1px solid #eee;

    //     img{
    //         width: 2rem;
    //         height: 2rem;
    //         margin: 0 auto;
    //     }

    //     &:last-child{

    //         border-right: none;
    //     }
    // }
    nav {
      height: 4rem;
      width: 100%;
      ul {
        display: flex;

        li {
          flex: 1;
          text-align: center;
          border-right: 1px solid #f1f1f1;
          box-sizing: border-box;
          // border:1px #ff0000 solid;

          &:last-child {
            border-right: none;
          }
          img {
            width: 2rem;
            height: 2rem;
            margin: 0 auto;
            margin-top: 0.2rem;
          }

          p {
            // margin-top: -0.2rem;
            font-size: 1.5rem;
          }
        }
      }
    }
  }

  /*列表*/
  .item {
    .item_cate {
      text-align: center;

      padding: 0.5rem;
    }

    .item_list {
      display: flex;

      flex-wrap: wrap;

      padding: 0px 0.5rem;

      li {
        width: 33.3%;
        padding: 0.5rem;

        box-sizing: border-box;

        .inner {
          background: #fff;
          width: 100%;
          border-radius: 0.5rem;
          overflow: hidden;
          img {
            width: 100%;
            height: 8rem;
          }
          p {
            padding: 0.2rem 0.5rem;
          }
        }
      }
    }
  }

  /*侧边栏*/

  .left_cate {
    /*css3运动  加过渡效果*/
    transition: all 1s;

    transform: translate(-100%, 0);

    z-index: 2;

    width: 6rem;

    height: 100%;

    position: fixed;

    background: #eee;
    top: 0px;
    left: 0px;

    ul {
      position: absolute;

      height: 100%;
      padding: 0.5rem;

      z-index: 3;

      background: #eee;
      li {
        line-height: 4.4rem;
      }
    }

    .nav_cate {
      position: absolute;

      right: -3.5rem;

      background: rgba(132, 128, 128, 0.9);
      top: 42%;

      width: 5rem;

      height: 4rem;
      text-align: center;

      border-radius: 0rem 50% 50% 0rem;

      z-index: 2;
      img {
        width: 1.8rem;

        height: 1.8rem;

        margin-left: 1rem;

        margin-top: 0.4rem;
      }
      p {
        color: #fff;
        margin-left: 1rem;

        margin-top: -0.3rem;
      }
    }
  }

  /*透明层*/

  .masking {
    position: fixed;

    width: 100%;
    height: 100%;

    background: rgba(132, 128, 128, 0.4);

    left: 0px;

    top: 0px;
    z-index: 1;

    display: none;
  }
}
</style>