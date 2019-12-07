<template>
    <div>
      <indexHeader :selectIndex="selectIndex" bannerType="2" :banner="banner.aboutbanner">
        <!--<div class="banner-content">-->
          <!--<div class="big-title">关于我们</div>-->
          <!--<div class="title-tip">ABOUT US</div>-->
        <!--</div>-->
      </indexHeader>
      <div class="about-content">
        <Tabs :value="tabValue" type="card" @on-click="clickTab">
          <TabPane label="公司简介" name="1"></TabPane>
          <TabPane label="创始人" name="2"></TabPane>
          <TabPane label="加入我们" name="3"></TabPane>
          <TabPane label="联系我们" name="4"></TabPane>
        </Tabs>
        <div label="公司简介" name="1" v-if="tabValue=='1'">
          <div class="tab-content">
            <div class="padding-content">
              <img src="" class="introduce-img"/>
              <p class="introduce-text">《深圳市先行者网络科技有限公司》是一家集研发创新和科技应用为一体的物联网科技公司。</p>
              <p class="introduce-text">公司专注于智能科技与传统乐器的创新研发，希望通过自身的经验和技术将传统乐器与智能科技相结合，通过
                科技手段和游戏化的理念，实现乐器与游戏互通应用。让每一位乐器爱好者，都可以通过娱乐的方式掌握一门
                艺术特长，让学习乐器变的更简单，守护艺术初心，放飞你的音乐梦。</p>
            </div>
          </div>
        </div>
        <div label="创始人" name="2" v-if="tabValue=='2'">
          <div class="tab-content">
            <div class="padding-content">
              <div class="toux">
                <img src="../../assets/images/aut.jpg" class="header" />
                <div class="toux-info">
                  <div class="name">龚长胜</div>
                  <div class="jies">所学专业：中国音乐学院长笛专业<br/>中国社科院心理学<br/>西南科技大学工商企业管理<br/>持续创业者</div>
                </div>
              </div>
              <div class="founder-info">
                <p><span>2012-2015</span>管弦乐乐团长笛首席</p>
                <p><span>2015年</span>投身公益事业，先后组建超过200人的深圳志愿者管弦乐团、社区服务乐团、学校青少年志愿者鼓舞团，深圳义工鼓舞俱乐部等。服务群体包含了深圳失独家庭、山区留守儿童、自闭症脑伤儿童等。</p>
                <p><span>2016年</span>以音乐融合积极心理学为辅导模式受邀清华大学XLP跨学科系统集成设计挑战项目特邀导师</p>
                <p><span>2016年</span>创立企业海星文化传媒、海星乐动力公益机构。</p>
                <p><span>2017年</span>发起大型留守儿童公益项目，创建【爱,不留守】留守儿童关爱平台，连续三年暑假去山区支教。</p>
                <p><span>2019年</span>创建先行者网络科技，专注于青少年教育的物联网寓教于乐教育平台【酱子学】公司专注于乐器的游戏化自学。</p>
              </div>
            </div>
          </div>
        </div>
        <div label="加入我们" name="3" v-if="tabValue=='3'">
          <div class="tab-content">
            <img src="../../assets/images/joinme.png"/>
            <div class="padding-content">
              <div class="post-item" v-for="(item,index) in postList" :class="{nobor:index==postList.length-1}">
                <h3 class="post-title">{{item.title}}</h3>
                <h4 class="lit-title">岗位职责</h4>
                <div class="post-content" v-html="item.duty||'暂无'"></div>
                <h4 class="lit-title">任职要求</h4>
                <div class="post-content" v-html="item.requirement||'暂无'"></div>
                <h4 class="lit-title">职业发展</h4>
                <div class="post-content" v-html="item.develop||'暂无'"></div>
                <h4 class="lit-title">福利待遇</h4>
                <div class="post-content" v-html="item.welfare||'暂无'"></div>
              </div>
            </div>
          </div>
        </div>
        <div label="联系我们" name="4" v-if="tabValue=='4'">
          <div class="banner-img map">
            <img src="../../assets/images/map.jpg">
          </div>
          <div class="form">
            <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80" :inline="true">
              <FormItem label="姓名：" prop="name">
                <Input v-model="formValidate.name" placeholder="请输入姓名" class="input"></Input>
              </FormItem>
              <FormItem label="地址：" prop="city">
                <Input v-model="formValidate.city" placeholder="请输入地址" class="input"></Input>
              </FormItem>
              <FormItem label="手机：" prop="phone" class="mrm">
                <Input v-model="formValidate.phone" placeholder="请输入手机号" class="input"></Input>
              </FormItem>
              <FormItem label="邮箱：" prop="mail">
                <Input v-model="formValidate.mail" placeholder="请输入邮箱" class="input"></Input>
              </FormItem>
              <div>
                <FormItem label="留言：" prop="desc" class="block">
                  <Input v-model="formValidate.desc" type="textarea" :rows="5" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入留言"></Input>
                </FormItem>
              </div>
              <FormItem class="botton-item">
                <Button type="primary" @click="handleSubmit('formValidate')">提交咨询</Button>
                <!--<Button @click="handleReset('formValidate')" style="margin-left: 8px">Reset</Button>-->
              </FormItem>
            </Form>
          </div>
          <div class="tab-content">

          </div>
        </div>
      </div>
      <indexFooter></indexFooter>
    </div>
</template>

<script>
import indexFooter from '@/components/footer/footer.vue'
import indexHeader from '@/components/header/header.vue'
import { mapGetters } from 'vuex'
export default {
  name: "aboutwe",
  components:{
    indexFooter,indexHeader,
  },
  data(){
    return{
      selectIndex:1,
      tabValue:'name1',
      postList:[
        {
          title:'市场业务专员',
          duty:`1、根据公司业务规划，针对音乐教培机构(教与学场景类)进行公司产品线下推广。
          2、实现产品在音乐教培行业的高覆盖率，帮助机构提高教学效率。
          3、对已合作进行跟进、管理，提升产品使用率和活跃度。处理机构需求痛点，并及时沟通反馈。
          4、根据部门市场拓展需要，实现业务增长`,
          requirement:`1-3年020行业、教培销售、商务拓展行业从业经验。
          2、有地推经验、saas销售、教培资源，在原公司成绩卓越者优先考虑。
          3、思路敏捷、条理清晰、较强的逻辑思维能力良好的市场敏感度，能作出准确判断
          4、优秀谈判能力、市场分析策划能力、闭环能力
          5、希望你勤奋、好学、心态open。`,
          develop:`公司深耕音乐教育行业，专注将乐器与互联网结合让音乐更有趣！使教培赋能，目前【酱子学】业务线处于极速扩张开城段，未来成长和晋升空间明确，三个月一次晋升考核！期待你加入！`,
          welfare:`试用期一个月后
          无责底薪4000+社保+业绩提成
          周一至周五 9:30-18:00
          每月公司组织一次团建活动，让你在工作之余充分享受生活（如烧烤、K歌、聚餐、度假、等）`
        },
        {
          title:'总经办经理',
          duty:`1、能熟练掌握文字编辑、排板和办公室软件的操作，公众号运营。
          2、协助总经理管理行政部门工作，协调内部员工关系。
          3、配合经理处理外部公共关系，参与公司活动的策划、组织工作。
          4、高效率地完成经理指派任务，对于公司制定计划认真执行。
          5、负责人员的招聘、调离。
          6、熟悉各类证件的年检审查。`,
          requirement:`1、普通话标准流利，形象气质佳，亲和力强。
          2、工作上认真负责、主动、干练，反应灵敏，形象良好。
          3、组织沟通能力强、业务熟练。
          4、1-2年公司行政岗位优先
          5、年龄23岁-35岁之间`,
          develop:`公司深耕音乐教育行业，专注将乐器与互联网结合让音乐更有趣！使教培赋能，目前【酱子学】业务线处于极速扩张开城段，未来成长和晋升空间明确。`,
          welfare:`试用期2个月
          无责底薪4000+社保+业绩提成
          周一至周五 9:30-18:00
          每月公司组织一次团建活动，让你在工作之余充分享受生活（如烧烤、K歌、聚餐、度假、等）`
        }
      ],
      formValidate: {
        name: '',
        mail: '',
        city: '',
        gender: '0',
        phone: '',
        qq:'',
        desc: ''
      },
      ruleValidate: {
        name: [
          { required: true, message: '请填写姓名', trigger: 'blur' }
        ],
        phone: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
        ],
        desc: [
          { required: true, message: '请输入留言', trigger: 'blur' },
        ]
      }
    }
  },
  computed: {
    ...mapGetters({
      banner:'getBanner'
    })
  },
  created (){
    //替换换行符
    for(let i=0;i<this.postList.length;i++){
      this.postList[i].duty = this.postList[i].duty.split("\n").join("<br/>")
      this.postList[i].requirement = this.postList[i].requirement.split("\n").join("<br/>")
      this.postList[i].develop = this.postList[i].develop.split("\n").join("<br/>")
      this.postList[i].welfare = this.postList[i].welfare.split("\n").join("<br/>")
    }
    if(this.$route.query.type){
      this.tabValue=''+this.$route.query.type
    }else {
      this.tabValue = '1'
    }
  },
  methods:{
    clickTab(e){
      console.log('点击了tab',e)
      this.tabValue = e
    },
    handleSubmit (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.submitConsul()
        } else {
          this.$Message.error('信息有误');
        }
      })
    },
    //保存咨询请求
    submitConsul(){
      var data = {
        name:this.formValidate.name,
        phone:this.formValidate.phone,
        email:this.formValidate.mail,
        desc:this.formValidate.desc,
        address:this.formValidate.city
      }
      submitConsul(data).then((res)=>{
        this.$Message.success('提交成功!');
      }).catch(()=>{
        this.$Message.error('提交失败!');
      })
    },
  }
}
</script>
<style scoped lang="less">
  .banner-content{
    .big-title{
      letter-spacing: 10px;
    }
  }
  .about-content{
    width: 1040px;margin: 0 auto;
  }
  .tab-content{
    background: #f5f5f5;min-height: 200px;
    .padding-content{
      padding: 50px 45px;
    }
    .introduce-img{
      width: 100%;height: 300px;
    }
    .introduce-text{
      font-size: 16px;color: #191919;line-height: 30px;margin-top: 30px;
    }
    .toux{
      display: flex;
      img{width: 300px;height: 300px;margin-right: 45px;}
      .toux-info{
        font-weight: bold;
        .name{font-size: 20px;margin-top: 25px;line-height: 30px;margin-bottom: 20px;}
        .jies{font-size: 18px;line-height: 48px;}
      }
    }
    .founder-info{
      font-size: 16px;
      p{
        line-height: 30px;margin-top: 25px;
        span{font-weight: bold;margin-right: 5px;}
      }
    }
    .post-item{
      padding-bottom: 40px;margin-bottom: 40px;border-bottom: 1px dashed #bfbfbf;
      h3.post-title{font-size: 22px;line-height: 28px;font-weight: bold;}
      h4.lit-title{font-size: 18px;margin-top: 20px;line-height: 24px;font-weight: bold;}
      .post-content{
        font-size: 16px;line-height: 24px;
      }
    }
    .nobor{border-bottom: none;}
  }
  .banner-img{
    img{
      position: relative;top: 0;width: 1920px;left: 50%;margin-left: -960px;vertical-align: middle;
    }
  }
</style>
<style lang="less">
  .hidelabel{
    .ivu-form-item-label{display: none;}
    .ivu-form-item-content{margin-left: 10px !important;}
  }
  .ivu-form{
    margin-top: 40px;
    .ivu-form-item-label{
      font-size: 16px;color: #000;padding-top: 12px;
    }
    .ivu-radio-wrapper{
      font-size: 16px;
    }
    .ivu-form-item.block{
      display: block;margin-right: 30px;
    }
    .ivu-form-item.botton-item{
      display: block;text-align: center;margin-right: 0;
      .ivu-form-item-content{margin-left: 0 !important;margin-right: 0;}
    }
    .block{
      .ivu-input-wrapper{
        textarea{
          height: 150px !important;
        }
      }
    }
    .ivu-btn-primary{
      background: #5f2bd9;width: 188px;height: 55px;text-align: center;
      font-size: 24px;
    }
  }
  .input{
    width: 250px;
    .ivu-input{height: 40px;}
  }
  .ivu-form-inline{
    .mr{margin-right: 246px;}
    /*.mrm{margin-right: 250px;}*/
  }
</style>
