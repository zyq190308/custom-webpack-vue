import './assets/style.less'
import './assets/imgs/test.jpg'
import Vue from 'vue'
import App from './App.vue'
import router from './router'

console.log('Hello Webpack2!')

const NAME = '箭头函数'
const fn = () => {
  console.log(NAME)
}
fn()


// promise 

new Promise((resolve, reject) => {
  resolve('yeah')
}).then(res => {
  console.log(res)
})

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')