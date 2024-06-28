<template>
  <div>
    <HeaderComp />
    <div class="container_baner_blog">
      <div class="backgroud_container_blog"></div>
      <div class="title_baner_blog_container">
        <div class="title_baner_blog">
          <h2 class="header_baner_blog">Статьи & Новости</h2>
          <div class="text_baner_blog">
            <a href="#">Домой</a>
            <span>/</span>
            <a href="#">Блог</a>
          </div>
        </div>
      </div>
    </div>
    <div class="container_latest_post">
      <h2>Последний пост</h2>
      <div class="latest_post_block" v-for="latest in latestData" :key="latest.title">
        <div class="img_latest_post_left">
          <img :src="latest.image" alt="img_latest_post">
        </div>
        <div class="content_latest_post_right_up">
          <h2 class="title_latest_post">{{ latest.title }}</h2>
          <p class="text_latest_post">{{ latest.descText }}</p>
          <div class="content_latest_post_right_down">
            <span>{{ latest.date }}</span>
            <a href="#"></a>
          </div>
        </div>
      </div>
    </div>
    <div class="container_news">
      <div class="blog_news">
        <div class="content_blog_news">
          <h2 class="title_blog_news">Статьи & Новости</h2>
        </div>
        <div class="blog_list_news">
          <div class="blog_item_news" v-for="item in dataBlog" :key="item.id">
            <div class="img_blog_news">
              <img :src="item.image" alt="">
              <p class="img_blog_text_news">{{ item.imgText }}</p>
            </div>
            <div class="sub_content_blog_news">
              <div class="sub_blog_left_news">
                <h3>{{ item.subTitle }}</h3>
              </div>
              <div class="sub_blog_right_news">
                <span>{{ item.subDate }}</span>
                <a href="./blog.html"></a>
              </div>
            </div>
          </div>
        </div>
        <PaginationComp />
        <!-- <div class="pagination_block">
          <a href="" class="active">1</a>
          <a href="">2</a>
          <a href="">3</a>
          <a href=""></a>
        </div> -->
      </div>
    </div>
    <FooterComp />
  </div>
</template>

<script>
import FooterComp from './FooterComp.vue'
import HeaderComp from './HeaderComp.vue'
import PaginationComp from './PaginationComp.vue'

export default {
  name: 'BlogComp',
  data () {
    return {
      latestData: [
        {
          image: './img/main_foto_blog.png',
          title: 'Low Cost Latest Invented Interior Designing Ideas',
          descText: 'С того времени этот, похожий на латинский, текст стал стандартом в печатной промышленности для примеров шрифтов и текстов. Перед появлением электронных издательств дизайнеры импровизировали в работе над макетами, изображая текст при помощи волнистых линий. С появлением самоклеющихся наклеек с напечатанным текстом «Lorem ipsum» появился более реалистичный способ обозначения расположения текста на странице.',
          date: '26 Декабрь 2022'
        }
      ],
      dataBlog: [
        {
          image: './img/blogPhoto_1.png',
          imgText: 'Дизайн кухни',
          subTitle: 'Создадим лучший макет перепланировки',
          subDate: '26 Декабрь 2022'
        },
        {
          image: './img/blogPhoto_2.png',
          imgText: 'Дизайн для жизни',
          subTitle: 'Лучшие интерьерные идеи по низкой цене',
          subDate: '22 Декабрь 2022'
        },
        {
          image: './img/blogPhoto_3.png',
          imgText: 'Дизайн Интерьера',
          subTitle: 'Лучшие интерьерные решения для офисов',
          subDate: '25 Декабрь 2022'
        },
        {
          image: './img/blogPhoto_4.jpeg',
          imgText: 'Дизайн кухни',
          subTitle: 'Лучшие интерьерные решения для офисов',
          subDate: '25 Декабрь 2022'
        },
        {
          image: './img/blogPhoto_5.jpeg',
          imgText: 'Дизайн для жизни',
          subTitle: 'Лучшие интерьерные решения для офисов',
          subDate: '25 Декабрь 2022'
        },
        {
          image: './img/blogPhoto_6.png',
          imgText: 'Дизайн Интерьера',
          subTitle: 'Лучшие интерьерные решения для офисов',
          subDate: '25 Декабрь 2022'
        }
      ]
    }
  },
  methods: {},
  components: { HeaderComp, FooterComp, PaginationComp }
}
</script>
