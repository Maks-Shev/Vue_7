<template>
  <div>
    <input type="text" v-model="title">
    <input type="number" v-model.number="price">
    <button @click="addToCart">Добавить</button>
  </div>
</template>

<script>
export default {
  name: 'AddNewItem',
  data () {
    return {
      title: '',
      prise: null
    }
  },
  computed: {

  },

  methods: {
    addToCart () {
      const id = new Date().getTime() // Добавляет новому объекту уникальный id
      const newProduct = {
        id,
        title: this.title,
        price: this.price
      }
      this.$emit('addToCart', newProduct) // Вызывает родительскую компоненту обработчиком события
    }
  }
}
</script>
