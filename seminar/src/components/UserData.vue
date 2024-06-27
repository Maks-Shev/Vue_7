<template>
  <div>
   <div>
    <p>{{ userData.name }}</p>
    <label>Имя:<input type="text" v-model="name"></label>
    <label>Фамилия:<input type="text" v-model="surname"></label>
    <button @click="saveData">Save</button>
    <p>Email: {{ userData.email }}</p>
    <div v-if="showMore">
      <p>Телефон: {{ userData.phone }}</p>
      <p>Адрес: {{ userData.address }}</p>
    </div>
    <button @click="toggleInfo">Show more</button>
   </div>

  </div>
</template>

<script>
export default {
  name: 'UserData',
  props: ['userData'],

  data () {
    return {
      showMore: false,
      name: '',
      surname: ''
    }
  },
  created () {
    this.name = this.userData.name
    this.surname = this.userData.surname
  },

  methods: {
    toggleInfo () {
      this.showMore = !this.showMore
    },
    saveData () {
      const updatedUser = {
        user: this.userData,
        name: this.name,
        surname: this.surname
      }
      this.$emit('upDateUser', updatedUser)
    }

  }
}
</script>
