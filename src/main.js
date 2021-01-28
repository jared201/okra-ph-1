import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

import titleMixin from './mixins/titleMixin'

Vue.use(Buefy);
Vue.mixin(titleMixin)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
