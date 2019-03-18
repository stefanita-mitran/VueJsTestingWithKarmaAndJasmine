// The following line loads the standalone build of Vue instead of the runtime-only build,
// so you don't have to do: import Vue from 'vue/dist/vue'
// This is done with the browser options. For the config, see package.json
import Vue from 'vue'
import App from './App.vue'
//import Example from './components/Example.vue'
// import FontSize from './components/FontSize.vue'

new Vue({ // eslint-disable-line no-new
  el: '#app',
  render: (h) => h(App)
})


// new Vue({ // eslint-disable-line no-new
//   el: 'div',
//   render: (h) => h(FontSize)
// })



// new Vue({ // eslint-disable-line no-new
//   el: 'div',
//   render: (h) => h(Example)
// })