<template>
  <div>
    <input type="text" v-model="category" placeholder="category">
    <input type="number" v-model="value" placeholder="value">
    <input type="number" v-model="data" placeholder="data">
    <button @click="onSave">Save</button>
  </div>
</template>

<script>
export default {
  name: 'AddList',

  data () {
    return {
      category: '',
      value: '',
      data: ''
    }
  },
  computed: {
    getCurrentDate () {
      const today = new Date()
      const d = today.getDate()
      const m = today.getMonth() + 1
      const y = today.getFullYear()
      return `${d}.${m}.${y}`
    }
  },

  methods: {
    onSave () {
      const data = {
        data: +this.data || this.getCurrentDate,
        category: this.category,
        value: this.value

      }
      this.$emit('addNewPay', data)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
