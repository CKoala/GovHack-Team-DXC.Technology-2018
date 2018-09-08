<template>
  <div class="home">
    <div class="flex-container">
      <div class="options">
        <span class="button">Option One</span>
        <span class="button">Option Two</span>
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
