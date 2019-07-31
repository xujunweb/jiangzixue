import indexbanner from '../../assets/images/banner_index.png'
import aboutbanner from '../../assets/images/about_me.png'
import productbanner from '../../assets/images/product_banner.png'
import hezuobanner from '../../assets/images/hezuo.png'
import appbanner from '../../assets/images/upload_banner.png'
import { getAllinfo } from "../../api/user";
export default {
  state: {
    banner:{
      indexbanner,
      aboutbanner,
      productbanner,
      hezuobanner,
      appbanner,
      typeList:[
        {value:1,label:'鼓'},
        {value:2,label:'禁用'},
        {value:3,label:'使用中'},
      ]
    },
  },
  getters: {
    getBanner: (state, getters, rootState) => {
      return state.banner
    }
  },
  mutations: {
    updateBanner (state, banner) {
      state.banner = {
        indexbanner:banner[0].value||indexbanner,
        aboutbanner:banner[1].value||aboutbanner,
        productbanner:banner[2].value||productbanner,
        hezuobanner:banner[3].value||hezuobanner,
        appbanner,
      }
    },
  },
  actions:{
    getAllinfo (store,obj) {
      getAllinfo().then((res)=>{
        console.log('获取到所有配置',res.data.data)
        store.commit('updateBanner',res.data.data)
      })
    }
  }
}
