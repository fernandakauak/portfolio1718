<template>
  <div id="app">
    <top></top>
    <router-view></router-view>
    <bottom></bottom>
  </div>
</template>

<script>
    import Top from './components/Top.vue'
    import Bottom from './components/Bottom.vue'
    export default {
        name: 'app',
        components: {
            Top: Top,
            Bottom: Bottom
        }
    }
</script>
