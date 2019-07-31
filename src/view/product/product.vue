<template>
  <div>
    <indexHeader :selectIndex="selectIndex" :banner="banner.productbanner" bannerType="2"></indexHeader>
    <Tabs :value="tabValue" type="card" @on-click="clickTab">
      <TabPane :label="item.label" :name="item.value" v-for="item in classList"></TabPane>
    </Tabs>
    <div class="product-content">
      <div class="product-list">
        <div class="product-item" v-for="item in productlist">
          <div class="img-content">
            <img :src="item.imgs" @click="handleView(item.imgs)">
          </div>
          <h4 class="title">{{item.name}}</h4>
          <div class="pice">市场价：<span>￥ {{item.price | formatMoney}}</span></div>
          <p class="jies">{{item.desc}}</p>
        </div>
      </div>
      <div style="text-align: center">
        <Page :total="total" show-elevator :page-size="pageSize" :current.sync="thisPage" @on-change="queyPage" />
      </div>
    </div>
    <indexFooter></indexFooter>
    <Modal title="查看大图" v-model="visible" width="900">
      <img :src="imgName" v-if="visible" style="width: 100%">
    </Modal>
  </div>
</template>

<script>
  import indexFooter from '@/components/footer/footer.vue'
  import indexHeader from '@/components/header/header.vue'
  import { pageByProduct } from  '@/api/user'
  import { mapGetters } from 'vuex'
  export default {
    name: "product",
    components:{
      indexFooter,indexHeader
    },
    data(){
      return{
        selectIndex:0,
        pageSize: 15,  //页面条数
        thisPage:1,   //当前页面
        total:0,  //总数
        productlist:[
        ],
        imgName: '',
        tabValue:'1',
        visible:false,
        classList:[
          {label:'非洲鼓',value:'1'},
          {label:'吉他',value:'2'},
          {label:'钢琴',value:'3'},
        ]
      }
    },
    computed:{
      ...mapGetters({
        banner:'getBanner'
      })
    },
    created(){
      if(this.$route.query.type){
        this.tabValue=''+this.$route.query.type
      }else {
        this.tabValue = '1'
      }
      this.pageByProduct()
    },
    methods:{
      clickTab(e){
        console.log('点击了tab',e)
        //切换分类，重置分页
        this.tabValue = e
        this.thisPage = 1
        this.pageByProduct()
      },
      //查看大图
      handleView (name) {
        this.imgName = name
        this.visible = true
      },
      //获取产品图片
      pageByProduct (p) {
        let data = {
          pageNum:p||this.thisPage, pageSize: this.pageSize,
          type:this.tabValue,
        }
        pageByProduct(data).then(res => {
          console.log('产品列表----',res)
          this.productlist = res.data.data.list.length?res.data.data.list:[]
          this.total = res.data.data.total
        }).catch(err => {
          console.log(err)
        })
      },
      // 分页切换
      queyPage (page) {
        console.log(page)
        this.thisPage = page
        this.pageByProduct(page)
      },
    }
  }
</script>
<style scoped lang="less">
  .ivu-page{
    display: inline-block;
  }
  .product-content{
    overflow: hidden;width: 1124px;margin: auto;
    .product-list{
      display: flex;justify-content: flex-start;flex-wrap: wrap;
      .product-item{
        width: 197px;margin: 0 42px;
        background: #fff;border-radius: 8px;overflow: hidden;margin-bottom: 50px;
        .img-content{
          border: 1px solid #d8d8d8;width: 197px;height: 197px;
          img{max-width: 195px;}
        }
        h4.title{
          font-size: 18px;line-height: 30px;color: #000;margin-top: 10px;
        }
        .pice{
          font-size: 16px;color: #000;line-height: 30px;
          span{color: #5f2bd9;}
        }
        p{
          height: 58px;
          line-height: 24px;font-size: 14px;margin-top: 10px;padding-top: 8px;
          border-top: 1px #d0d0d0 dashed;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
        }
      }
    }
  }
</style>
