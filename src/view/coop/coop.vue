<template>
  <div>
    <indexHeader :selectIndex="selectIndex" :banner="banner.hezuobanner" bannerType="2">
      <div class="banner-content">
        <div class="big-title">合作</div>
        <div class="title-tip">COOPERATION</div>
      </div>
    </indexHeader>
    <div class="coop-content">
      <h2 class="h2-title">酱子学乐器助学系统</h2>
      <div class="content-one">
        <div class="one-left">
          <h3 class="h3-title">传统音乐学习存在的部分痛点</h3>
          <p>自家孩子比较调皮内向等，很大部分家长觉得自家孩子难以管控，自己也不懂，回家后就忘了学习的很大一部分内容了。</p>
          <p>根据随机市场调查，有45%的学生家长认为时间太长，怕孩子学不下去。</p>
          <p>场地因素，离培训机构较远，无法保证有规律的学习时间，时间成本高。</p>
          <p>前期学习太枯燥，根据随机市场调查，超过70%的学生都认为音乐学习很枯燥，特别是前期。学习成本等等，还有很多......</p>
        </div>
        <div class="one-right">
          <img src="../../assets/images/hezuo1.png">
        </div>
      </div>
      <div class="content-two">
        <div class="two-left">
          <img src="../../assets/images/hezuo2.png">
        </div>
        <div class="two-right">
          <h3 class="h3-title">项目介绍</h3>
          <p>帮助万千音乐培训机构辅助教学，提高青少年的音乐艺术普及，通过APP与乐器结合，再将APP与机构进行绑定，机构通过后台系统制作教学内容上传至APP从而帮助机构实现多个场景进行教学，系统将帮助机构解决教师教材教案留档问题。</p>
        </div>
      </div>
      <div class="func">
        <h3 class="h3-title">主要功能</h3>
        <ul class="func-ul">
          <li>
            <div><img src="../../assets/images/func1.png"></div>
            <p>帮助机构教<br/>学方式升级</p>
          </li>
          <li>
            <div><img src="../../assets/images/func2.png"></div>
            <p>帮助学生提<br/>高学习兴趣</p>
          </li>
          <li>
            <div><img src="../../assets/images/func3.png"></div>
            <p>帮助学生有事不来机<br/>构也可以完成作业</p>
          </li>
          <li>
            <div><img src="../../assets/images/func4.png"></div>
            <p>帮助机构留存<br/>老师教学内容</p>
          </li>
          <li>
            <div><img src="../../assets/images/func5.png"></div>
            <p>解决学员<br/>在线管控</p>
          </li>
          <li>
            <div><img src="../../assets/images/func6.png"></div>
            <p>解决机构<br/>推广招生</p>
          </li>
        </ul>
      </div>
      <div class="from-title">
        <div class="icon"><img src="../../assets/images/liaotian.png"/></div>
        <h3>我要咨询</h3>
        <h4>无需繁琐流程，创业只需散步：留言咨询 > 等待回访 > 成功合作</h4>
      </div>
      <div class="from-content">
        <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80" :inline="true">
          <FormItem label="姓名：" prop="name">
            <Input v-model="formValidate.name" placeholder="请输入姓名" class="input"></Input>
          </FormItem>
          <FormItem label="性别：" prop="gender" class="hidelabel mr">
            <RadioGroup v-model="formValidate.gender">
              <Radio label="1">男</Radio>
              <Radio label="0">女</Radio>
            </RadioGroup>
          </FormItem>
          <FormItem label="地区：" prop="city">
            <Input v-model="formValidate.city" placeholder="请输入地区" class="input"></Input>
          </FormItem>
          <FormItem label="手机：" prop="phone" class="mrm">
            <Input v-model="formValidate.phone" placeholder="请输入手机号" class="input"></Input>
          </FormItem>
          <FormItem label="QQ：" prop="qq">
            <Input v-model="formValidate.qq" placeholder="请输入QQ" class="input"></Input>
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
    </div>
    <indexFooter></indexFooter>
  </div>
</template>
<script>
import indexFooter from '@/components/footer/footer.vue'
import indexHeader from '@/components/header/header.vue'
import { mapGetters } from 'vuex'
export default {
  name: "coop",
  data (){
    return {
      selectIndex:2,
      formValidate: {
        name: '',
        mail: '',
        city: '',
        gender: '1',
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
  components:{
    indexFooter,indexHeader
  },
  computed:{
    ...mapGetters({
      banner:'getBanner'
    })
  },
  methods:{
    handleSubmit (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success('Success!');
        } else {
          this.$Message.error('Fail!');
        }
      })
    },
    handleReset (name) {
      this.$refs[name].resetFields();
    }
  }
}
</script>
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
<style scoped lang="less">
  .banner-content{
    .big-title{
      letter-spacing: 10px;
    }
  }
  .h2-title{
    font-size: 36px;text-align: center;line-height: 45px;margin-top: 50px;color: #000;margin-bottom: 50px;
  }
  .coop-content{
    width: 1040px;margin: 0 auto;
    img{vertical-align: middle;}
    .content-one{
      display: flex;
      .one-left{
        background: #f5f5f5;padding: 0 40px;
        .h3-title{
          font-size: 26px;color: #000;line-height: 35px;margin-top: 40px;margin-bottom: 15px;
        }
        p{
          font-size: 16px;line-height: 24px;margin-top: 16px;color: #000;
        }
      }
      .one-right{}
    }
    .content-two{
      display: flex;
      .two-left{}
      .two-right{
        background: #f5f5f5;padding: 0 40px;
        .h3-title{
          font-size: 36px;color: #000;line-height: 50px;margin-top: 60px;margin-bottom: 15px;
          position: relative;padding-bottom: 10px;
        }
        .h3-title:after{
          content: '';position: absolute;bottom: 0;left: 0;
          width: 62px;height: 2px;background: #000;
        }
        p{
          font-size: 16px;line-height: 30px;
          margin-top: 30px;color: #000;
        }
      }
    }
    .func{
      .h3-title{
        font-size: 36px;line-height: 48px;text-align: center;
        position: relative;padding-bottom: 10px;margin-top: 50px;margin-bottom: 40px;
      }
      .h3-title:after{
        content: '';position: absolute;left: 50%;bottom: 0;
        width: 52px;margin-left: -26px;height: 2px;background: #000;
      }
      ul{
        display: flex;justify-content: space-around;
        li{
          text-align: center;
          div{display: flex;justify-content: center;align-items: flex-end;height: 66px;}
          p{
            color: #363636;font-size: 16px;line-height: 24px;margin-top: 20px;
          }
        }
      }
    }
    .from-title{
      display: flex;align-items: center;height: 59px;margin-top: 80px;
      background: #5f2bd9;color: #fff;padding: 0 20px;
      .icon{
        margin-top: 4px;
        img{vertical-align: middle;}
      }
      h3{font-size: 20px;margin-left: 20px;}
      h4{margin-left: 50px;font-size: 16px;}
    }
  }
</style>
