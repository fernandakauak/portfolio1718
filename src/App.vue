<template>
  <div id="app">
    <top></top>
    <about></about>
    <services></services>
    <works></works>
    <contact></contact>
    <footer></footer>
  </div>
</template>

<script>
    import Top from './components/Top.vue'
    import About from './components/sections/About.vue'
    import Services from './components/sections/Services.vue'
    import Works from './components/sections/Works.vue'
    import Contact from './components/sections/Contact.vue'
    import Bottom from './components/Bottom.vue'
    export default {
        name: 'app',
        components: {
            Top: Top,
            About: About,
            Services: Services,
            Works: Works,
            Contact: Contact,
            Bottom: Bottom
        }
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

  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
