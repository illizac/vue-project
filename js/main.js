var Vue = require('vue').default;
import app from '../App.vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(MintUI);



import VueRouter from 'vue-router'
Vue.use(VueRouter)

import whole from '../whole.vue'
import vbody from '../views/vbody.vue'
import vcontext from '../views/vcontext.vue'
import vOth from '../views/vOther.vue'

var rou = new VueRouter({
	routes: [
		{
			path: '/',
			component: whole
		},
		{
			path: '/context',
			component: vcontext
		}
    ]    
})


new Vue({
	el: '#box',
	render: (cel) => cel(app),
	router: rou
})

