<template>
  <div>
    <HeaderComp />
    <!-- heaeder -->
    <div class="container_baner_project">
      <div class="baner_project">
        <div class="title_baner_project_container">
          <div class="title_baner_project">
            <h2 class="header_baner_blog">Наш проект</h2>
            <div class="text_baner_blog">
              <a href="#">Домой</a>
              <span>/</span>
              <a href="#">Проект</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- main -->
    <CategoryFilterProject :selectedCategory="selectedCategory" @category-selected="filterItems"/>
    <div class="container_project">
      <div class="progect_item_card" v-for="item in filteredItems" :key="item.id">
        <img :src="item.image" alt="">
        <div class="sub_content_project">
            <div class="sub_content_left">
              <h3>{{ item.title }}</h3>
              <span>{{ item.desc_text }}</span>
            </div>
            <div class="sub_content_right">
              <a href="#"></a>
            </div>
          </div>
      </div>
    </div>
      <PaginationComp />
    <FooterComp />
  </div>
</template>

<script>
import CategoryFilterProject from './CategoryFilterProject.vue'
import FooterComp from './FooterComp.vue'
import HeaderComp from './HeaderComp.vue'
import PaginationComp from './PaginationComp.vue'
import { mapState, mapGetters, mapMutations } from 'vuex'

export default {
  name: 'ProjectComp',
  computed: {
    ...mapState(['selectedCategory']),
    ...mapGetters(['filteredItems'])
  },
  methods: {
    ...mapMutations(['SET_CATEGORY']),
    filterItems (category) {
      this.SET_CATEGORY(category)
    }
  },
  components: { HeaderComp, FooterComp, PaginationComp, CategoryFilterProject }
}
</script>

<style lang="scss" scoped>
.baner_project {
  background-image: url(/public/img_project/header_photo_project_badroom.jpeg);
  width: 100%;
  height: 356px;
  background-repeat: no-repeat;
  background-position: center;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}

.title_baner_project_container {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  width: 500px;
  height: 160px;
  border-radius: 37px 37px 0 0;
}
.container_project {
  display: flex;
  flex-wrap: wrap;
  column-gap: 29px;
  row-gap: 35px;
  padding: 20px;
  max-width: 1200px;
  margin: 60px auto 0;
}
.header_baner_blog {
  font-family: DM-serif;
  font-size: 50px;
  font-weight: 700;
  color: #292F36;
  align-items: center;
}
.text_baner_blog {
  font-family: Jost-Regular;
  font-size: 22px;
  font-weight: 400;
  color: #4D5053;
}
.sub_content_left h3 {
  font-family: DM-serif;
  font-size: 25px;
  font-weight: 400;
  color: #292F36;
}
.sub_content_left span {
  font-family: Jost-Regular;
  font-size: 22px;
  font-weight: 400;
  color: #4D5053;
}
</style>
