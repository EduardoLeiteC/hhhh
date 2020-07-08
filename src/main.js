import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import firebase from 'firebase';


Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: "AIzaSyAd73WCbctG8mjC7jGHz962lwUUO5ZbJss",
  authDomain: "vue-auth-firebase-b7d9f.firebaseapp.com",
  databaseURL: "https://vue-auth-firebase-b7d9f.firebaseio.com",
  projectId: "vue-auth-firebase-b7d9f",
  storageBucket: "vue-auth-firebase-b7d9f.appspot.com",
  messagingSenderId: "22619561924",
  appId: "1:22619561924:web:7f3cc6b08fc3bbaf088e91",
  measurementId: "G-LXZT3TV29B"
};
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
