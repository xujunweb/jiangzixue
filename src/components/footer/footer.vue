<template>
    <div class="footer">
      <div class="footer-content">
        <div class="footer-left">
          <a href="#/"><img src="../../assets/images/logo.png" class="logo" /></a>
          <div class="companyInfo">
            <p class="comp-phone">Shenzhen Pioneer Network Technology Co. , Ltd.</p>
            <p class="comp-name">客服电话 075523005896</p>
            <p>深圳市宝安区石岩同富裕工业区6号楼201</p>
          </div>
        </div>
        <div class="footer-right">
          <ul class="footer-list">
            <li class="first-list"><h4>关于我们</h4></li>
            <li class="list">
              <a @click="goRouter('about','1')">公司简介</a>
            </li>
            <li class="list">
              <a @click="goRouter('about','2')">创始人</a>
            </li>
          </ul>
          <ul class="footer-list">
            <li class="first-list"><h4>产品</h4></li>
            <li class="list">
              <a @click="goRouter('product','1')">非洲鼓</a>
            </li>
            <li class="list">
              <a @click="goRouter('product','2')">吉他</a>
            </li>
            <li class="list">
              <a @click="goRouter('product','3')">钢琴</a>
            </li>
          </ul>
          <ul class="footer-list">
            <li class="first-list"><h4>合作</h4></li>
            <li class="list">
              <a @click="goRouter('coop','')">供应商</a>
            </li>
            <li class="list">
              <a @click="goRouter('coop','3')">联系我们</a>
            </li>
          </ul>
          <div class="clear"></div>
        </div>
        <div class="clear"></div>
      </div>
      <div class="record-infor">
        <div class="record-content">
          <p class="record-text">粤 ICP 备<a href="http://beian.miit.gov.cn" target="_blank">19065608</a> 号 公安网备案 334499984034<br/>经营许可证编号： 粤 20190039</p>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "indexfooter",
  props: {
    theme: {
      type: String,
      default: 'dark'
    }
  },
  computed:{

  },
  data(){
    return{

    }
  },
  methods:{
      //路由跳转
    goRouter (name,type) {
      this.$router.push({
        name,
        query:{
          type,
        }
      })
      window.scrollTo(0,0);
    }
  }
}
</script>
<style scoped lang="less">
  .footer{width: 100%;padding-top: 30px;background: #fff;padding-bottom: 18px;border-top: 1px solid #f4f4f4;margin-top: 50px;}
  .footer .footer-content{margin: 0 auto;width: 1050px;padding-bottom: 20px;}
  .footer .footer-left{float: left;}
  .footer .footer-right{float: right;}
  .companyInfo{font-size: 16px;margin-top: 15px;color: #363636;line-height: 30px;}
  .companyInfo p{}
  .footer-list{float: left;margin-left: 110px;color: #2C2C31;}
  .footer-list .first-list{font-size: 18px;}
  .footer-list .first-list h4{font-family: '微软雅黑'}
  .footer-list li{margin-bottom: 15px;font-size: 16px;}
  .footer-list li a{color: #363636;}
  .footer-list li a:hover{text-decoration: underline;}
  .record-infor{
    width: 100%;border-top: 1px solid #f4f4f4;
    .record-content{
      width: 1050px;margin: 0 auto;padding-top: 18px;
      .record-text{
        font-size: 12px;color: #b9b9b9;line-height: 24px;
      }
    }
  }
</style>
