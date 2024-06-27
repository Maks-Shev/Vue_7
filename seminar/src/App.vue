<template>
  <div id="app">
    <!-- <UserList/> -->
    <CounterComp />
    <CartComp/>
  </div>
</template>

<script>
import CartComp from './components/CartComp.vue'
import CounterComp from './components/CounterComp.vue'

// import UserList from './components/UserList.vue'

export default {
  name: 'App',
  components: {
    CounterComp,
    CartComp
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
