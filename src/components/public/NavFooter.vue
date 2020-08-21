<template>
  <div id="navfooter">
    <!-- {{msg}} -->
    <!-- 定位按钮 导航 购物车 -->
    <div class="footer_nav" @click="flag =!flag">
      <img :src="urlnavigation" alt />
      <p>导航</p>
    </div>
    <!-- <div class="footer_nav" @click="flag =!flag" v-else>
      <img :src="urlclose" alt />
      <p>返回</p>
    </div> -->
    <transition name="v-footernav">
      <div class="footer_nav_show" v-if="flag">
        
        <ul class="list" >
          
          <li v-if="show">
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
          <li @click="flag =! flag">
            <img :src="urlclose" />
            <p>返回</p>
          </li>
        </ul>
        
      </div>
    </transition>
        
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
      urlcart: require("../../assets/images/cart.png"),
      urlmenu: require("../../assets/images/menu.png"),
      urlorder: require("../../assets/images/order.png"),
      urlwallet: require("../../assets/images/wallet.png"),
      urlclose: require("../../assets/images/close.png"),
      urlnavigation: require("../../assets/images/navigation.png"),
      flag: false,
      show:true
    };
  },
  methods: {
    footflag(){
      // alert('111')
      console.log(this.flag)
    }
  },
  mounted(){
    this.footflag()
  }
};
</script>
<style lang="scss" scoped>
  .v-footernav-enter-active,.v-footernav-leave-active{ //入场动画
    // transition:opacity 5s;
     transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    // transition: top 3s linear;
  }
  
  .v-footernav-enter,.v-footernav-leave-to
  /* .slide-fade-leave-active for below version 2.1.8 */{
    // opacity: 0;
    // transform: translateX(40px);
    transform: translateY(80px);
    opacity: 0;
  }
</style>