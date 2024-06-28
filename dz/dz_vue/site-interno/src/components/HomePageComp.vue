<template>
  <div>
    <HeaderComp />
    <div class="project">
      <div class="content_project">
        <h2 class="title_project">Следите за нашими проектами</h2>
        <p class="text_project">Хорошо известно, что читатель будет отвлекаться на читабельный контент страницы </p>
      </div>
      <div class="container_block_project">
        <div class="block_project" v-for="item in dataProject" :key="item">
          <div class="img_project">
            <img :src="getImageProject(item.imageProject)" alt="">
          </div>
          <div class="sub_content_project">
            <div class="sub_content_left">
              <h3>{{ item.title }}</h3>
              <span>{{ item.desc }}</span>
            </div>
            <div class="sub_content_right">
              <a href="#"></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section>
      <div class="couter_container">
        <div class="counter_block">
          <div class="counter_content">
            <h2 class="num_count">12</h2>
            <span class="text_count">Лет опыта</span>
          </div>
          <div class="count_line"></div>
          <div class="counter_content">
            <h2 class="num_count">85</h2>
            <span class="text_count">Успешных проектов</span>
          </div>
          <div class="count_line"></div>
          <div class="counter_content">
            <h2 class="num_count">15</h2>
            <span class="text_count">Проектов в работе</span>
          </div>
          <div class="count_line"></div>
          <div class="counter_content">
            <h2 class="num_count">95</h2>
            <span class="text_count">Счастливых клиентов</span>
          </div>
        </div>
      </div>
    </section>
    <div class="blog_container">
      <div class="blog">
        <div class="content_blog">
          <h2 class="title_blog">Статьи & Новости</h2>
          <p class="text_blog">Хорошо известно, что читатель будет отвлекаться на читабельный контент страницы </p>
        </div>
        <div class="blog_list">
          <div class="blog_item" v-for="item in dataBlog" :key="item.id">
            <div class="img_blog">
              <img :src="getImage(item.image)" alt="">
              <p class="img_blog_text">{{ item.imgText }}</p>
            </div>
            <div class="sub_content_blog">
              <div class="sub_blog_left">
                <h3>{{ item.subTitle }}</h3>
              </div>
              <div class="sub_blog_right">
                <span>{{ item.subDate }}</span>
                <a href="#"></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <FooterComp />
  </div>
</template>
<script>
import HeaderComp from './HeaderComp.vue'
import FooterComp from './FooterComp.vue'

export default {
  name: 'HomePageComp',
  data () {
    return {
      dataBlog: [
        {
          id: 1,
          image: 'blogPhoto_1.png',
          imgText: 'Дизайн кухни',
          subTitle: 'Создадим лучший макет перепланировки',
          subDate: '26 Декабрь 2022'
        },
        {
          id: 2,
          image: 'blogPhoto_2.png',
          imgText: 'Дизайн для жизни',
          subTitle: 'Лучшие интерьерные идеи по низкой цене',
          subDate: '22 Декабрь 2022'
        },
        {
          id: 3,
          image: 'blogPhoto_3.png',
          imgText: 'Дизайн Интерьера',
          subTitle: 'Лучшие интерьерные решения для офисов',
          subDate: '25 Декабрь 2022'
        }
      ],
      dataProject: [
        {
          id: 1,
          imageProject: 'projectPhoto_1.png',
          title: 'Современная кухня',
          desc: 'Декор / Планировка'
        },
        {
          id: 2,
          imageProject: 'projectPhoto_2.png',
          title: 'Современная кухня',
          desc: 'Декор / Планировка'
        },
        {
          id: 3,
          imageProject: 'projectPhoto_3.png',
          title: 'Современная кухня',
          desc: 'Декор / Планировка'
        },
        {
          id: 4,
          imageProject: 'projectPhoto_4.png',
          title: 'Современная кухня',
          desc: 'Декор / Планировка'
        }
      ]
    }
  },
  methods: {
    getImage (image) {
      return require(`../assets/image/img/${image}`)
    },
    getImageProject (imageProject) {
      return require(`../assets/image/img/${imageProject}`)
    }
  },
  components: { HeaderComp, FooterComp }
}
</script>

<style lang="scss" scoped></style>
