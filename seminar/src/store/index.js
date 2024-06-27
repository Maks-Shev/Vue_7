export default {
  state: {
    // Начальное состояние
    counter: 0,
    cartItems: []
  },
  mutations: {
    // Методы для изменения состояния
    INCREMENT (state) {
      state.counter++
    },
    DECREMENT (state) {
      state.counter--
    },
    ADD_TO_CART (state, product) {
      state.cartItems.push(product)
    },
    SET_CART (state, productList) {
      state.cartItems = productList
    }
  },
  getters: {
    // Методы для чтения состояния
    cartItems (state) {
      return state.cartItems
    },
    countProducts (state) {
      return state.cartItems.length
    },
    totalPrice (state) {
      return state.cartItems.reduce((total, product) => total + product.price, 0)
    }
  },
  actions: {
    // Методы для асинхронных операций
    fetchData ({ commit }) {
      setTimeout(() => {
        commit('SET_CART', [
          {
            id: 1,
            title: 'Product 1',
            price: 100,
            description: 'This is product 1 description'
          },
          {
            id: 2,
            title: 'Product 2',
            price: 200,
            description: 'This is product 2 description'
          },
          {
            id: 3,
            title: 'Product 3',
            price: 300,
            description: 'This is product 3 description'
          },
          {
            id: 4,
            title: 'Product 4',
            price: 800,
            description: 'This is product 4 description'
          },
          {
            id: 5,
            title: 'Product 5',
            price: 150,
            description: 'This is product 5 description'
          }
        ])
      }, 1000)
    }
  }
}
