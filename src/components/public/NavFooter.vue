<template>
  <div id="navfooter">
    <!-- {{msg}} -->
    <div class="footer_nav_show">
      <ul class="list">
        <li>
          <img :src="urlmenu" alt />
          <p>菜单</p>
        </li>
        <li>
          <img :src="urlcart" />
          <p>购物车</p>
        </li>
        <li>
          <img :src="urlorder" />
          <p>订单</p>
        </li>
        <li>
          <img :src="urlwallet" />
          <p>结账</p>
        </li>
        <li>
          <img :src="urlclose" />
          <p>返回</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// 图片引入
// import urlcaidan from "../../assets/images/caidan.png";
// import urlmenu from "../assets/images/menu.png"
// import urlorder from "../assets/images/order.png"
// import urlwallet from "../assets/images/wallet.png"
// import urlclose from "../assets/images/close.png"
export default {
  name: "navfooter",
  data() {
    return {
      msg: "底部组件",
      urlcart: require('../../assets/images/cart.png'),
      urlmenu: require('../../assets/images/menu.png'),
      urlorder: require('../../assets/images/order.png'),
      urlwallet: require('../../assets/images/wallet.png'),
      urlclose: require('../../assets/images/close.png')
    };
  },
};
</script>
<style lang="scss" scoped>
//     #navfooter{
//       .footer_nav_show{
//         .list{
//           li{
//             img{
//               width:3rem;
//               height: 3rem;
//             }
//           }
//         }
//       }
//     }
</style>