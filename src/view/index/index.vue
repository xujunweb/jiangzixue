<template>
    <div>
      <indexHeader :banner="banner.indexbanner">
        <!--<div class="banner-content">-->
          <!--<div class="big-title">玩游戏学乐器，就上酱子学APP</div>-->
          <!--<router-link to="jointwork" class="big-button">-->
            <!--立即体验-->
          <!--</router-link>-->
        <!--</div>-->
      </indexHeader>
      <indexFooter></indexFooter>
    </div>
</template>

<script>
import indexFooter from '@/components/footer/footer.vue'
import indexHeader from '@/components/header/header.vue'
import { getAllinfo } from  '@/api/user'
import { mapGetters } from 'vuex'
export default {
  name: "index",
  components:{
    indexFooter,indexHeader
  },
  data(){
    return{
      imgindex:0,
      speed:5000,
      imglist:[

      ]
    }
  },
  computed:{
    ...mapGetters({
      banner:'getBanner'
    })
  },
  created(){
    // this.getAllinfo()
  },
  methods:{
    getAllinfo () {
      getAllinfo().then(res => {
        const data = res.data
        console.log('所有配置',res)
        this.imglist = data.data[4].value.split(',')
      }).catch(err => {
        console.log(err)
      })
    },
  }
}
</script>

<style lang="less">
.ivu-carousel-dots li button{
  background: #fff;
  width: 6px;
  height: 6px;
  opacity: 1;
  border-radius: 50%;
}
.ivu-carousel-dots li.ivu-carousel-active > button{
  background: #E5496E;border-radius: 3px;
  height:6px;
}
.ivu-carousel-dots-inside{bottom:15px;}
.home-banner{
  height: 600px;position: relative;overflow: hidden;
}
.ivu-carousel-item{overflow: hidden;}
.demo-carousel{
  width: 1920px;position: relative;left: 50%;margin-left: -960px;
}
.demo-carousel img{
}
</style>
