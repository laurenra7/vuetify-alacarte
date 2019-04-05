import Vue from 'vue'
import App from './App.vue'

// Method 1: default, using plugin (works after running 'vue add vuetify')
// import './plugins/vuetify'

// Method 2: only specific components in main.js (works, import vuetify.css)
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

// Method 3: vuetify-loader (works, import vuetify.css)
// import Vuetify from 'vuetify/lib'
//
// Vue.use(Vuetify)
//
// import 'vuetify/dist/vuetify.min.css'

// Method 4: import components in HelloWorld.vue (does not work)



Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
