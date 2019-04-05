import Vue from 'vue'
import App from './App.vue'

// Method 1: default, using plugin (works)
// import './plugins/vuetify'

// Method 2: only specific components in main.js (works, H2 style is missing)
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

// Method 3: vuetify-loader (works, H2 style is missing)
// import Vuetify from 'vuetify/lib'
//
// Vue.use(Vuetify)

// Method 4: (components imported in HelloWorld.vue, does not work)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
