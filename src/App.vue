<template>
  <AppHeader/>

  <section class="container">
    <router-view/>
  </section>

  <AppFooter/>
</template>

<script>
import AppFooter from '@/components/AppFooter'
import AppHeader from '@/components/AppHeader'

export default {
  components: {
    AppFooter,
    AppHeader
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.container {
  height: calc(100vh - 140px);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
