99<template>
  <div>
  <div class="product-details" v-for="product in products" :key="product.id">
    <h1>{{ product.name }}</h1>
    <p>{{ formattedPrice(product.price) }}</p>
    <p>{{ product.available ? 'Availabel' : 'Out of stock' }}</p>
    <p>Осталось: {{ product.quantity }}</p>
    <button :disabled="!product.available || product.quantity === 0" @click="buyProduct(product)">Купить</button>
  </div>
  </div>
</template>

<script>
export default {
  name: 'ProductDetails',

  data () {
    return {
      products: [
        {
          id: 1,
          name: 'Product 1',
          price: 99.99,
          available: true,
          quantity: 3
        },
        {
          id: 2,
          name: 'Product 2',
          price: 80.00,
          available: true,
          quantity: 1
        },
        {
          id: 3,
          name: 'Product 3',
          price: 59.99,
          available: true,
          quantity: 6
        }
      ]
    }
  },
  methods: {
    buyProduct (product) {
      if (product.available && product.quantity > 0) {
        alert(`Вы купили ${product.name} за ${this.formattedPrice(product.price)}`)
        product.quantity--
        if (product.quantity === 0) {
          product.available = false
          alert('Товара больше нет')
        }
      }
    }
  },

  computed: {
    formattedPrice () {
      return (price) => `$${price.toFixed(2)}`
    }
  }
}
</script>

<style lang="scss" scoped>
.product-details {
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  max-width: 400px;
  margin: 20px auto;
  text-align: center;
}

.product-details h1 {
  font-size: 24px;
  margin-bottom: 10px;
}

.product-details p {
  font-size: 18px;
  margin-bottom: 5px;
}
button {
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}

button:disabled {
  cursor: not-allowed;
  background-color: #ccc;
}
</style>
