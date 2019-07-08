<template>
    <div>
      <div class="aboutwe-top">
        <indexHeader :selectIndex="selectIndex"></indexHeader>
      </div>
      <div class="about-content">
        <div class="about-text">
          <h2>关于我们</h2>
          <p class="introduce">深圳市梦宝智能科技有限公司是一家专注于空间规划，服务提升，服务大众，便利大众的综合型专业型科技公司。公司有一支经验丰富、理念先进的管理团队，吸取国内外各方先进的理念和方案，结合国内特点进行优化和提升，以更专业更优秀的服务回馈大众。</p>
          <p class="introduce">梦宝智能科技关注到现有医护服务及环境的提升、白领午间休息问题，独立开发出一款用于此环境使用的休息柜床，以现在最流行的共享理念服务社会，为用户提供人性化、便利化的分时租赁服务，想用户之所想，急用户之所急，全方位推进服务，用不断创新为客户提供更好的服务。</p>
          <h2>联系我们</h2>
          <div class="contact-us">
            <div class="text">
              <h3>-公司名称：</h3>
              <p>深圳市梦宝智能科技有限公司</p>
            </div>
            <div class="text">
              <h3>-地址：</h3>
              <p>深圳市福田区八卦四路5号索泰克大厦四楼A区</p>
            </div>
            <div class="text">
              <h3>-电话号码：</h3>
              <p>0755-25320456</p>
            </div>
            <div class="text">
              <h3>-邮箱：</h3>
              <p>3523545862@qq.com</p>
            </div>
            <div class="text">
              <h3>-客服电话：</h3>
              <p>0755-83667270 0755-83667199</p>
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
  name: "aboutwe",
  components:{
    indexFooter,indexHeader,
  },
  data(){
    return{
      selectIndex:3
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
.contact-us .text{float: left;width: 50%;}
.contact-us .text h3{color: #333;font-size: 16px;font-family: '黑体';margin-top: 25px;line-height: 30px;}
.contact-us .text p{color: #646464;font-size: 14px;line-height: 24px;}
</style>
