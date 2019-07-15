<template>
  <div>
    <indexHeader :selectIndex="selectIndex" :banner="banner.appbanner" bannerType="2"></indexHeader>
    <div class="about-content">
      <div class="about-text "></div>
    </div>
    <indexFooter></indexFooter>
  </div>
</template>

<script>
  import indexFooter from '@/components/footer/footer.vue'
  import indexHeader from '@/components/header/header.vue'
  import { mapGetters } from 'vuex'
  export default {
    name: "jointwork",
    components:{
      indexFooter,indexHeader,
    },
    data(){
      return{
        selectIndex:2
      }
    },
    computed:{
      ...mapGetters({
        banner:'getBanner'
      })
    },
  }
</script>
<style scoped lang="less">
  .aboutwe-top{width: 100%;height: 350px;background: url("../../assets/images/about.png") no-repeat 50% 50%;position: relative;}
  .about-content{background: #fff;padding-bottom: 50px;}
  .about-text{
    width: 1040px;padding: 0 100px;background: #fff;
    margin: 0 auto;position: relative;padding-bottom: 30px;margin-top: -60px;
    min-height: 300px;
    box-shadow: 0px 0px 18px 0px
    rgba(172, 172, 172, 0.15);
    border-radius: 16px;
  }
  .about-text h2{color: #E5496E;font-size: 20px;text-align: center;padding-top: 30px;}
  .about-text p.introduce{font-size: 14px;color: #646464;line-height: 24px;margin-top: 15px;text-indent: 30px;}
  .contact-us .text{float: left;}
  .contact-us .text h3{color: #333;font-size: 16px;font-family: '黑体';margin-top: 25px;line-height: 30px;}
  .contact-us .text p{color: #646464;font-size: 14px;line-height: 24px;}
</style>
