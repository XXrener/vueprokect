<template>
    <div id="satart">
        <div class="start_content">
            
            <header class="start_header">

                <img src="./assets/images/canju.png" alt="">用餐人数
            </header>

            <p class="notice">请选择用餐人数 ，小二正在快马加鞭给你送餐具</p>

            <div class="start_list">
                <ul class="use_list">
                    <li><span>1人</span></li>
                    <li><span>2人</span></li>
                    <li><span>3人</span></li>
                    <li><span>4人</span></li>
                    <li><span>5人</span></li>
                    <li><span>6人</span></li>
                    <li><span>7人</span></li>
                    <li><span>8人</span></li>
                    <li><span>9人</span></li>
                    <li><span>10人</span></li>
                    <li><span>11人</span></li>
                    <li><span>12人</span></li>
                </ul>
            </div>
            <div id="begin" class="start">
                <span>开始点餐</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'start',
        data(){
            return{
                msg:"开始组件挂载"
            }
        }
    }
</script>

<style lang="scss" scoped>
    
</style>