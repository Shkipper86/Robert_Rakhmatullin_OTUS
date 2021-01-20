import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import firebase from 'firebase/app'
import 'firebase/database'

Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "key",
  authDomain: "...firebaseapp.com",
  databaseURL: "url",
  projectId: "id",
  storageBucket: "..appspot.com",
  messagingSenderId: "....",
  appId: "..."
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
