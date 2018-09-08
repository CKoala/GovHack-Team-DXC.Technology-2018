<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

html,
body {
  height: 100%;
  color: #000000 !important;
  overflow: hidden !important;
}

.slide-leave-active,
.slide-enter-active {
  transition: 0.25s;
}
.slide-enter {
  transform: translate(100%, 0);
}
.slide-leave-to {
  transform: translate(-100%, 0);
}
.slide-enter {
  opacity: 0;
}
.slide-leave-active,
.slide-enter {
  opacity: 0;
  transform: translateX(100%);
}

.swipe {
  height: 100%;
  width: 100%;
}

.color-one {
  background-color: #EDEDEE
}

.color-two {
 background-color: #272C34
}

.color-three {
  background-color: #3C4048
}

.color-four {
  background-color: #7870E9
}

.padding {
  padding: 1em;
}

.heading-main {
  font-size: 26pt;
  color: #000000;
}

.heading {
  font-size: 20pt;
  color: #000000;
}

.btn-txt {
  font-size: 16pt;
  color: #000000;
}

.small-txt {
  font-size: 12pt;
  color: #000000;
}

.paragraph {
  font-size: 14pt;
  color: #000000;
}

.padding-sides {
  padding: 0 1.5em;
}

.read-more {
  cursor: pointer;
}

@media screen and (min-width: 500px) {
  .heading-main {
    font-size: 27pt;
  }
  .heading-title {
    font-size: 21pt;
  }
  .sub-title {
    font-size: 15pt;
  }
  .sub-heading {
    font-size: 13pt;
  }
  .paragraph {
    font-size: 11pt;
  }
}

@media screen and (min-width: 1000px) {
  .heading-main {
    font-size: 28pt;
  }
  .heading-title {
    font-size: 22pt;
  }
  .sub-title {
    font-size: 16pt;
  }
  .sub-heading {
    font-size: 14pt;
  }
  .paragraph {
    font-size: 12pt;
  }
}

.this-is-bold {
  font-weight: bold;
}

.this-is-lighter {
  font-weight: lighter;
}

.this-is-oblique {
  font-style: oblique;
}

.flex-container {
  display: flex;
}

.justify-left {
  justify-content: flex-start;
}

.justify-right {
  justify-content: flex-end;
}

.justify-center {
  justify-content: center;
}

.justify-space-between {
  justify-content: space-between;
}

.justify-space-around {
  justify-content: space-around;
}

.text-align-center {
  text-align: center;
}

.flex-item {
  margin-left: 0.5em;
}

.align-center {
  align-items: center;
}
</style>
