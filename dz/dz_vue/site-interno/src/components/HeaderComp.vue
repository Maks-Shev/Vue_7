<template>
  <div class="container_nav">
    <nav class="navigation">
      <ul class="left_nav">
        <li><img src="../assets/image/img/Logo.svg" alt="logo"></li>
        <li><span>Interno</span></li>
      </ul>
      <ul class="right_nav">
        <li><a href="/BlogComp.vue">Домой</a></li>
        <li><a href="#">Проект</a></li>
        <li><a href="./blog.html">Блог</a></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'HeaderComp',
  props: ['header'],

  data () {
    return {

    }
  },

  methods: {

  }
}
</script>

<style lang="scss" scoped></style>
