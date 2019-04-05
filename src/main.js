import Vue from 'vue'
import App from './App.vue'

// Method 1: default, using plugin
// import './plugins/vuetify'

// Method 2: only specific components in main.js
// import Vuetify, {
//   VApp, // required
//   VBtn
// } from 'vuetify/lib'
//
// Vue.use(Vuetify, {
//   components: {
//     VApp,
//     VBtn
//   }
// })

// Method 3: vuetify-loader
// import Vuetify from 'vuetify/lib'
//
// Vue.use(Vuetify)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
