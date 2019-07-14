<template>
  <div class="banner" :style="{height:bannerHeight+'px'}">
    <div class="header" :class="{whitebg:whitebg}">
      <div class="header-content">
        <div class="logo" v-if="showLogo">
          <a href="/#/"><img src="../../assets/images/logo-min.png" /></a>
        </div>
        <div class="tab">
          <span class="phone">客服电话：<b>8888-8888</b></span>
          <router-link :to="{name:item.herf}" v-for="item in tablist">
            <span :class="{hover:item.select,herf:true}">{{item.name}}</span>
          </router-link>
        </div>
        <div class="clear"></div>
      </div>
    </div>
    <!--<Carousel autoplay v-model="imgindex" loop class="home-banner" :autoplay-speed="speed">-->
    <!--<CarouselItem v-for="item in imglist">-->
    <!--<div class="demo-carousel">-->
    <!--<img :src="item"/>-->
    <!--</div>-->
    <!--</CarouselItem>-->
    <!--</Carousel>-->
    <slot></slot>
    <img :src="banner" class="index-banner" :style="{height:bannerHeight+'px'}"/>
    <img :src="shadowImg" class="shadow" />
  </div>
</template>
<script>
  import shadow1 from '../../assets/images/index_shadow.png'
  import shadow2 from '../../assets/images/inner_shadow.png'
export default {
  name: "headerTop",
  props: {
    selectIndex: {
      type: Number,
      default: 0
    },
    showLogo:{
      type: Boolean,
      default: true
    },
    whitebg:{
      type: Boolean,
      default: false
    },
    bannerType: {   //banner类型，1首页，2内页
      default: '1',
    },
    banner: {
      default: ''
    }
  },
  computed:{
    bannerHeight () {
      var typeMap = {
        1:720,
        2:500
      }
      return typeMap[this.bannerType]
    },
    shadowImg () {
      var typeImg = {
        1:shadow1,
        2:shadow2
      }
      return typeImg[this.bannerType]
    }
  },
  data(){
    return{
      tablist:[
        {name:'产品',herf:'product',select:false},
        {name:'关于我们',herf:'about',select:false},
        {name:'合作',herf:'coop',select:false},
      ],
    }
  },
  created(){
    this.tablist[this.selectIndex].select = true
  },
  methods:{

  }
}
</script>
<style scoped lang="less">
  .banner{
    width: 100%;position: relative;background: #BFBFBF;overflow: hidden;
    .banner-content{
      width: 100%;height: 100%;z-index: 2;
      display: flex;align-items: center;justify-content: center;flex-direction: column;
      position: absolute;top: 0;left: 0;
      .big-title{
        font-size: 52px;color: #fff;line-height: 70px;
        text-shadow: 0px 0px 16px #544a4a;
      }
      .title-tip{
        text-shadow: 0px 0px 16px #544a4a;
        font-size: 33px;line-height: 40px;color: #fff;
      }
      .big-button{
        text-align: center;
        background: rgba(0,0,0,0.6);width: 273px;height: 82px;
        line-height: 82px;border-radius: 8px;
        font-size: 30px;
        color: #fff;
        margin: 0 auto;
        margin-top: 40px;
        cursor: pointer;
      }
    }
    .index-banner{
      position: absolute;top: 0;width: 1920px;left: 50%;margin-left: -960px;
    }
    .shadow{
      position: absolute;top: 0;left: 50%;margin-left: -960px;width: 1920px;
    }
  }
.whitebg{background: #fff;}
.header{
  position: absolute;width: 100%;z-index: 3;padding-bottom: 30px;top: 0;left: 0;
  .header-content{
    width: 1050px;margin: 0 auto;padding-top: 25px;
  }
}
.header .logo{float: left;}
.header .logo img{width: 133px;}
.header .tab{
  float: right;
  span.phone{
    color: #fff;line-height: 34px;padding: 0 25px;border-radius: 34px;display: inline-block;font-size: 16px;
    background: rgba(96,31,217,0.7);
  }
}
.header .tab span.herf{color: #fff;font-size: 18px;margin-left: 45px;display: inline-block;position: relative;cursor: pointer;}
/*.header .tab span.herf:hover{color: #E5496E;}*/
/*.header .tab span.herf:hover:after{*/
  /*content: '';height: 3px;width: 30px;background: #E5496E;*/
  /*position: absolute;bottom: -5px;left: 50%;margin-left: -15px;*/
/*}*/
/*.header .tab span.hover{color: #E5496E;}*/
/*.header .tab span.hover:after{*/
  /*content: '';height: 3px;width: 30px;background: #E5496E;*/
  /*position: absolute;bottom: -5px;left: 50%;margin-left: -15px;*/
/*}*/
</style>
