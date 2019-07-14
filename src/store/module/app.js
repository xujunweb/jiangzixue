import indexbanner from '../../assets/images/banner_index.png'
import aboutbanner from '../../assets/images/about_me.png'
import productbanner from '../../assets/images/product_banner.png'
import hezuobanner from '../../assets/images/hezuo.png'
export default {
  state: {
    banner:{
      indexbanner,
      aboutbanner,
      productbanner,
      hezuobanner,
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
  }
}
