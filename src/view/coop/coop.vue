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
      selectIndex:2
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
}
</script>

<style scoped lang="less">
  .banner-content{
    .big-title{
      letter-spacing: 10px;
    }
  }
  .h2-title{
    font-size: 24px;text-align: center;line-height: 30px;margin-top: 20px;
  }
  .coop-content{
    width: 1040px;margin: 0 auto;
    img{vertical-align: middle;}
    .content-one{
      display: flex;
      .one-left{
        background: #f5f5f5;padding: 0 40px;
      }
      .one-right{}
    }
  }
</style>
