<template>
  <div class="home">
    <div class="flex-container">
      <div class="options">
        <p class="title">TEAM DXC!!!!!!!!! </p>
          <div id="app">
            <google-map />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import GoogleMap from "../components/GoogleMap";
    export default {
          name: 'Map',
            components: {
            GoogleMap
        },
        data () {
        return {
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .home {
    padding-bottom: 2em;
    flex-grow: 1;
    overflow-y: auto;
  }

  .button {
    border: 1px solid black;
    padding: 1em;
  }

  .options {
    padding: 3em;
  }
</style>
