<template>
<div>
  <div class="category_filter">
    <button v-for="category in btn_category" :key="category" @click="selectCategory(category)" :class="{ active: category === selectedCategory }" class="btn_category_project">
      {{ category }}
    </button>
  </div>
</div>
</template>

<script>
export default {
  name: 'CategoryFilterProject',
  props: {
    selectedCategory: String
  },
  data () {
    return {
      btn_category: [
        'Ванная комната',
        'Спальня',
        'Кухня',
        'Гостиная'
      ]
    }
  },

  methods: {
    selectCategory (category) {
      this.$emit('category-selected', category) // Эмитируем событие с выбранным тегом
    }
  }
}
</script>

<style lang="scss" scoped>
.category_filter {
  display: flex;
  justify-content: center;
  width: 880px;
  height: 73px;
  border: 1px solid #CDA274;
  border-radius: 18px;
  // margin-top: 200px;
  margin: 200px auto 0;
  }
  .btn_category_project {
    width: 206px;
    height: 73px;
    border: none;
    background-color: #fff;
    font-family: Jost-semibold;
    font-size: 18px;
    font-weight: 600;
    cursor: pointer;
  }
  .btn_category_project.active {
      background-color: rgb(205, 162, 116);
      color: rgb(255, 255, 255);
      border-radius: 18px;
      border: 1px solid rgb(205, 162, 116);
    }
</style>
