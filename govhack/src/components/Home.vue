<template>
  <div class="home">
    <div class="flex-container" >
      <div class="options align-items" v-on:click="demoFunction">
        <ul>
          <span class="button btn-txt color-one" >{{title}}</span>
        </ul>
      </div>
      <div class="options align-items">
        <ul>
          <span class="button btn-txt color-two">Option Two</span>
        </ul>
      </div>
    </div>
    <div class="flex-container">
      <div class="options align-items">
        <ul>
          <span class="button btn-txt color-three">Option Three</span>
        </ul>
      </div>
      <div class="options align-items">
        <ul>
          <span class="button btn-txt color-four">Option Four</span>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import {store, dbStore} from '../store.js'
import firebase from 'firebase/app'
import 'firebase/firestore'
export default {
  name: 'Home',
  mounted(){

  },
  data () {
    return {
      data: {
      title: ''
    }
    }
  },
  firestore () {
    return {
      title:  'test'
    }
  },
  method: {
    demoFunction () {
      var self = this
      dbStore.displayDemo({
        'name' : self.title
      },
        (docs) => {
        },
        (err) => {
          alert(err)
        })
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  padding-bottom: 1em;
  flex-grow: 1;
  overflow-y: auto;
}

.button {
  border: 1px solid black;
  padding: 0.5em;
  width: 90%;
  height: 10em;
}

.options {
  -webkit-position: sticky;
  -moz-position: sticky;
  -ms-position: sticky;
  -o-position: sticky;
  position: sticky;
  position: -webkit-sticky;
  margin-top: 1em;
  z-index: 50;
  margin-bottom: 0;
  width: 100%;
}

.two {
  margin-left: 3em;
}
</style>
