import indexbanner from '../../assets/images/banner_index.png'
import aboutbanner from '../../assets/images/about_me.png'
import productbanner from '../../assets/images/product_banner.png'
import hezuobanner from '../../assets/images/hezuo.png'
import appbanner from '../../assets/images/upload_banner.png'
export default {
  state: {
    banner:{
      indexbanner,
      aboutbanner,
      productbanner,
      hezuobanner,
      appbanner,
    },
  },
  getters: {
    getBanner: (state, getters, rootState) => {
      return state.banner
    }
  },
  mutations: {
    updateBanner (state, banner) {
      state.banner = banner
    },
  },
  actions:{
    getAllinfo (store,obj) {
      getAllinfo().then((data)=>{
        console.log('获取到所有配置',data)
        store.commit('updateBanner',data)
      })
    }
  }
}
