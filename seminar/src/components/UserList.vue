<!-- Создайте компонент "Список пользователей" (UserList), который
будет отображать список пользователей из переданного массива.
Каждый пользователь должен быть представлен в виде отдельного
компонента "Пользователь" (User), принимающего пропсы с данными
о пользователе (например, имя, фамилия и электронная почта). -->

<template>
  <div>
    <UserData v-for="user in usersList" :key="user.email" :user-data="user" @upDateUser="upDateUser"/>
  </div>
</template>

<script>
import UserData from './UserData.vue'

export default {
  name: 'UserList',
  data () {
    return {
      usersList: [
        {
          name: 'John',
          surname: 'Doe',
          phone: '(224) 634-4595',
          email: 'john@doe',
          address: '5008 Local St.'
        },
        {
          name: 'Jane',
          surname: 'Pitten',
          phone: '(224) 634-1234',
          email: 'jane@doe',
          address: '5008 Molestie St.'
        },
        {
          name: 'max',
          surname: 'Rich',
          phone: '(224) 634-7862',
          email: 'max@doe',
          address: '5008 Grand St.'
        },
        {
          name: 'Mike',
          surname: 'Qwer',
          phone: '(224) 634-4569',
          email: 'mike@doe',
          address: '5008 Whisky St.'
        }
      ]
    }
  },
  methods: {
    upDateUser (userData) {
      const findUser = this.usersList.find((user) => user === userData.user)
      if (findUser) {
        findUser.name = userData.name
        findUser.surname = userData.surname
      } else {
        alert('Пользователь не найден')
      }
    }
  },
  components: { UserData }
}
</script>
