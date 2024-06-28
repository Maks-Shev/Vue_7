<template>
  <div class="btn_tag">
    <h2>Тэги</h2>
    <div class="btn_tag_container">
      <button v-for="(item, index) in btn_tag_name" :key="index" @click="selectTag(item)"
              :class="{'selected': item === selectedTag}" class="btn_tag_button">
        {{ item }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BtnTag',
  props: {
    selectedTag: String // Принимаем текущий выбранный тег в качестве пропса
  },
  data () {
    return {
      btn_tag_name: [
        'Кухня',
        'Спальня',
        'Здание',
        'Архитектура',
        'Планировка',
        'Гостинная'
      ]
    }
  },

  methods: {
    selectTag (item) {
      this.$emit('tag-click', item) // Эмитируем событие с выбранным тегом
    }
  }
}
</script>

<style lang="scss" scoped>
.btn_tag {
    display: flex;
    flex-direction: column;
    margin-top: 200px;
    margin-left: 52px;
    max-width: 340px;
    .btn_tag_container {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        margin-top: 24px;
    }
    .btn_tag_button  {
        font-family: Jost-Regular;
        font-size: 18px;
        font-weight: 400;
        color: #292F36;
        background-color: #F4F0EC;
        border: none;
        border-radius: 10px;
        padding: 9px 30px;
        margin-right: 10px;
        margin-bottom: 10px;
        cursor: pointer;
    }
    .btn_tag_button.selected {
        color: #fff;
        background-color: rgb(41, 47, 54);
    }
}
</style>
