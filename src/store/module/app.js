import indexbanner from '../../assets/images/banner_index.png'
import aboutbanner from '../../assets/images/about_me.png'
export default {
  state: {
    banner:{
      indexbanner,
      aboutbanner,
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
