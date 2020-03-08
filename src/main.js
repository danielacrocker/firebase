import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import firebase from "firebase/app"

Vue.prototype.$axios = axios;
Vue.config.productionTip = false

const firebaseConfig = {
    apiKey: "AIzaSyA8i2BjQ7fjk2zJ7ypPjvvl8Ok4RBtoWmg",
    authDomain: "vueapp-a6cb3.firebaseapp.com",
    databaseURL: "https://vueapp-a6cb3.firebaseio.com",
    projectId: "vueapp-a6cb3",
    storageBucket: "vueapp-a6cb3.appspot.com",
    messagingSenderId: "1004348013926",
    appId: "1:1004348013926:web:ae5e69400fb39e23601ca7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  let app;

  firebase.auth().onAuthStateChanged(user => {
    console.log(user);
    if(!app) {
      app = 
        new Vue({
          router,
          store,
          render: h => h(App)
        }).$mount('#app')      
    }
  })


