import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import firebase from 'firebase/app'
import 'firebase/database'

Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyBdZ0qFycepneSVZF3N-V11vsMdSFlX5Yo",
  authDomain: "vue-crm-fb81f.firebaseapp.com",
  databaseURL: "https://vue-crm-fb81f-default-rtdb.firebaseio.com",
  projectId: "vue-crm-fb81f",
  storageBucket: "vue-crm-fb81f.appspot.com",
  messagingSenderId: "847606494569",
  appId: "1:847606494569:web:706a222f4db0277361f9f8"
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
