import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase/app'
import 'firebase/firestore'
Vue.use(Vuex)

// Initialize Firebase
var config = {
    apiKey: "AIzaSyCvmV54gItxbQNUcXyGAU6lq8M-29KasLk",
    authDomain: "govhack01.firebaseapp.com",
    databaseURL: "https://govhack01.firebaseio.com",
    projectId: "govhack01",
    storageBucket: "govhack01.appspot.com",
    messagingSenderId: "644494530626"
  };

firebase.initializeApp(config)

const firestore = firebase.firestore()
const settings = { timestampsInSnapshots: true }
firestore.settings(settings)

const userCollection = firestore
  .collection('users')

const demoCollection = firestore
  .collection('Demo')

// The shared state object that any vue component can get access to.
// Has some placeholders that weâ€™ll use further on!

export const store = new Vuex.Store({
  state: {
    currentUser: null
  },
  mutations: {
    authorization (state, user) {
      state.currentUser = user
    }
  }
})

export const dbStore = {
  displayDemo: (demo, fnSuccess, fnFail) => {
    var query = demoCollection
      .where('GovHack2018', '==', demo)

    query
      .get()
      .then((querySnapshot) => fnSuccess(querySnapshot))
      .catch(e => fnFail(e))
  }
}
