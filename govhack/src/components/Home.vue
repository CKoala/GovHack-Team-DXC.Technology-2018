<template>
  <div class="home">
    <div class="flex-container">
      <div class="options align-items">
        <ul>
          <span class="button">Option One</span>
        </ul>
      </div>
      <div class="options align-items">
        <ul>
          <span class="button">Option Two</span>
        </ul>
      </div>
    </div>
    <div class="flex-container">
      <div class="options align-items">
        <ul>
          <span class="button">Option One</span>
        </ul>
      </div>
      <div class="options align-items">
        <ul>
          <span class="button">Option Two</span>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
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
