<template>
  <div class="header" :class="{whitebg:whitebg}">
    <div class="header-content">
      <div class="logo" v-if="showLogo">
        <a href="/#/"><img src="../../assets/images/logo2x.png" /></a>
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
</template>
<script>
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
  },
  computed:{

  },
  data(){
    return{
      tablist:[
        {name:'产品',herf:'home',select:false},
        {name:'关于我们',herf:'product',select:false},
        {name:'合作',herf:'jointwork',select:false},
      ]
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
.whitebg{background: #fff;}
.header{
  position: absolute;width: 100%;z-index: 2;padding-bottom: 30px;top: 0;left: 0;
  .header-content{
    width: 1050px;margin: 0 auto;padding-top: 25px;
  }
}
.header .logo{float: left;}
.header .logo img{width: 149px;}
.header .tab{
  float: right;
  span.phone{
    color: #fff;line-height: 34px;padding: 0 25px;border-radius: 34px;display: inline-block;font-size: 16px;
    background: rgba(0,0,0,0.6);
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
