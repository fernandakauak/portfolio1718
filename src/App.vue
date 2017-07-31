<template>
  <div id="app">
    <top></top>
    <about></about>
    <services></services>
    <works></works>
    <contact></contact>
    <bottom></bottom>
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
