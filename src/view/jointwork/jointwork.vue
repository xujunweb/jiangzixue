<template>
  <div>
    <div class="aboutwe-top">
      <indexHeader :selectIndex="selectIndex"></indexHeader>
    </div>
    <div class="about-content">
      <div class="about-text">
        <h2>商户合作</h2>
        <p class="introduce">深圳梦宝智能科技有限公司欢迎您的加入！成为我们项目的合作伙伴！共享共赢！创造共赢未来。</p>
        <p class="introduce">深圳梦宝康护智能陪护柜床是我司运用物联网技术开发的一款物联网智能专利产品，用于医院陪护、白领午休时租赁使用的智能柜床。</p>
        <h2>合作模式</h2>
        <div class="contact-us">
          <div class="text">
            <h3>-购买智能产品定制：</h3>
            <p>拥有自己投资的生产基地，二十年精密钣金加工技术，生产能力及配套生产设施完善，手机操作系统软件及后台管理软件有专业的软件开发团队。从硬件方面到软件开发都可根据客户需求定制加工，能够有效提供一站式解决智能柜床或共享椅解决方案与产品。</p>
          </div>
          <div class="text">
            <h3>-项目合作运营：</h3>
            <p>我公司可以免费投放标准配置的智能柜床，双方合作开展医院资源落地，分时租赁服务，按照资源与产品，共同享受合作利益。</p>
          </div>
          <div class="text">
            <h3>-项目加盟合作：</h3>
            <p>我公司免费提供标准配置的智能柜床，由加盟者负责出资购买柜床与投放落地资源，运营按约定比列，共享佣金收益。</p>
          </div>
          <div class="clear"></div>
        </div>
      </div>
    </div>
    <indexFooter></indexFooter>
  </div>
</template>

<script>
  import indexFooter from '@/components/footer/footer.vue'
  import indexHeader from '@/components/header/header.vue'
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
  }
</script>
<style scoped>
  .aboutwe-top{width: 100%;height: 350px;background: url("../../assets/images/about.png") no-repeat 50% 50%;position: relative;}
  .about-content{background: #F0F4F8;padding-bottom: 50px;}
  .about-text{width: 1000px;padding: 0 100px;background: #fff;border-radius: 10px;margin: 0 auto;position: relative;padding-bottom: 30px;margin-top: -50px;}
  .about-text h2{color: #E5496E;font-size: 20px;text-align: center;padding-top: 30px;}
  .about-text p.introduce{font-size: 14px;color: #646464;line-height: 24px;margin-top: 15px;text-indent: 30px;}
  .contact-us .text{float: left;}
  .contact-us .text h3{color: #333;font-size: 16px;font-family: '黑体';margin-top: 25px;line-height: 30px;}
  .contact-us .text p{color: #646464;font-size: 14px;line-height: 24px;}
</style>
