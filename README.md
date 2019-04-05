# vuetify-alacarte

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

## Test importing components in different ways

### Method 1: default method (Vuetify Quick start)

See Vuetify instructions for
[new applications](https://vuetifyjs.com/en/getting-started/quick-start#new-applications).
This works. It creates a default page with samples.

```bash
vue create vuetify-alacarte
cd vuetify-alacarte
vue add vuetify
npm run serve
```

### Method 2: import only specific components

See Vuetify instructions for
[Importing components](https://vuetifyjs.com/en/framework/a-la-carte#importing-components).
I'm justing using \<v-app> and \<v-btn>. This also works.

**main.js**:
```javascript
import Vuetify, {
  VApp, // required
  VBtn
} from 'vuetify/lib'

Vue.use(Vuetify, {
  components: {
    VApp,
    VBtn
  }
})

import 'vuetify/dist/vuetify.min.css'
```

### Method 3: use vuetify-loader

See Vuetify instructions for
[Importing components](https://vuetifyjs.com/en/framework/a-la-carte#importing-components).
I'm justing using \<v-app> and \<v-btn>. This also works.

**main.js**:
```javascript
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

import 'vuetify/dist/vuetify.min.css'
```

### Method 4: import components in .vue file

See Vuetify instructions for
[Importing components](https://vuetifyjs.com/en/framework/a-la-carte#importing-components).
I'm justing using \<v-app> and \<v-btn>. This _**does not work**_. No imports
in **main.js**. The import statements are all in **HelloWorld.vue**.

**HelloWorld.vue**:
```javascript
<script>
  import {
      VApp,
      VBtn
  } from 'vuetify/lib'

  export default {
    components: {
        VApp,
        VBtn
    }
  }
</script>

<style>

  @import '../../node_modules/vuetify/dist/vuetify.min.css';

</style>
```

Nothing displays on the page and the browser console shows this error:

```
[HMR] Waiting for update signal from WDS...
[Vue warn]: Error in render: "TypeError: Cannot read property 'application' of undefined"

found in

---> <VContent>
       <App> at src/App.vue
         <Root>

TypeError: Cannot read property 'application' of undefined
    at VueComponent.styles (VContent.js?549c:17)
    at Watcher.get (vue.runtime.esm.js?2b0e:4473)
    at Watcher.evaluate (vue.runtime.esm.js?2b0e:4578)
    at Proxy.computedGetter (vue.runtime.esm.js?2b0e:4830)
    at Proxy.render (VContent.js?549c:37)
    at VueComponent.Vue._render (vue.runtime.esm.js?2b0e:3542)
    at VueComponent.updateComponent (vue.runtime.esm.js?2b0e:4060)
    at Watcher.get (vue.runtime.esm.js?2b0e:4473)
    at new Watcher (vue.runtime.esm.js?2b0e:4462)
    at mountComponent (vue.runtime.esm.js?2b0e:4067)

Uncaught TypeError: _this.$el.setAttribute is not a function
    at eval (ssr-bootable.js?b57a:24)
```

### Use scoped stylus styles instead of whole css

Install the stylus loader in the project:

```
npm i stylus stylus-loader style-loader css-loader --save-dev
```

Then select the stylus files you will use. To include all styles,
import `vuetify/src/stylus/main`.

To include just the subset of styles needed, import
`vuetify/src/stylus/theme` and `vuetify/src/stylus/app` and the
specific component styles. For example, for a button <v-btn>:

**HelloWorld.vue**:
```
<style lang="stylus" scoped>

  @import '../../node_modules/vuetify/src/stylus/theme'
  @import '../../node_modules/vuetify/src/stylus/app'
  @import '../../node_modules/vuetify/src/stylus/components/_buttons'

</style>
```

### Build for production

It will remove 