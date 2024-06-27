<template>
  <div id="app">
    <PaymentsDisplay :items="paymentsList" :info="infoText"/>
    <AddList @addNewPay="addNewPay"/>
  </div>
</template>

<script>
import { mapMutations, mapState, mapGetters, mapActions } from 'vuex'
import AddList from './components/AddList.vue'
import PaymentsDisplay from './components/PaymentsDisplay.vue'

export default {
  name: 'App',
  components: {
    PaymentsDisplay,
    AddList
  },
  methods: {
    addNewPay (data) {
      this.ADD_PAYMENT(data)
    },
    ...mapMutations(['SET_PAYMENT', 'ADD_PAYMENT'])
  },
  computed: {
    ...mapState(['paymentList']),
    ...mapGetters(['getPayment', 'getFullPayment']),
    ...mapActions(['fetchData'])
  },
  created () {
    this.SET_PAYMENT(this.fetchData())
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
