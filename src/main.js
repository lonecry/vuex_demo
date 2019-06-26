// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'Vuex'

Vue.config.productionTip = false
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    products: [
      {
        name: 'CPU',
        type: "I7 8700K",
        price: "2500",
      },
      {
        name: '显卡',
        type: "GTX 1060",
        price: "1200",
      },
      {
        name: '主板',
        type: "ASUS Z370",
        price: "1500",
      },
      {
        name: '内存',
        type: "Kisngston 32G",
        price: "860",
      },
      {
        name: '电源',
        type: "Power 450W",
        price: "550",
      },
    ]
  },
  getters: { //添加getters
    onsale: (state) =>{
      let salePrice = state.products.map((item) =>{
        return {
          name: item.name,
          type: item.type,
          price: item.price * 0.8,
        }
      })
      return salePrice
    }
  }
})
new Vue({
  el: '#app',
  store,
  // router,
  components: {App},
  template: '<App/>'
})
