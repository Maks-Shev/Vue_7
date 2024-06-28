<template>
  <div>
    <HeaderComp />
    <div class="backgroud_container"></div>
    <div class="container_blog_details">
      <div class="blog_details_left kitchen" v-for="(item, index) in kitchenDetailsBlog" :key="index"
        v-show="selectedCategory === 'Кухня'">
        <h2 class="title_blog_one">{{ item.title_one }}</h2>
        <img class="img_blog_one" :src="require('@/assets/image/img_blog_details/kitchen_title_foto.png')" alt="">
        <div class="blog_details_date">
          <span class="date">{{ item.date }}</span>
          <span class="text_desc_inDate">{{ item.textDescInDate }}</span>
        </div>
        <p class="textDesc_blog_one">{{ item.textDesk_one }}</p>
        <div class="blok_quote">
          <img class="img_quote" :src="require('@/assets/image/img_blog_details/img_quote.png')" alt="">
          <h3 class="title_quote">{{ item.quote }}</h3>
        </div>
        <h2 class="title_blog_two">{{ item.title_two }}</h2>
        <p class="textDesc_blog_two">{{ item.textDesk_two }}</p>
        <ol>
          <li v-for="(textItem, textIndex) in item.textList" :key="textIndex">{{ textItem }}</li>
        </ol>
        <img class="img_blog_two" :src="require('@/assets/image/img_blog_details/kitchen_desc_foto.png')" alt="">
        <p class="textDesc_blog_tree">{{ item.textDesk_tree }}</p>
      </div>

      <div class="blog_details_left badroom" v-for="(item, index) in bedroomDetailsBlog" :key="index"
        v-show="selectedCategory === 'Спальня'">
        <h2 class="title_blog_one">{{ item.title_one }}</h2>
        <img class="img_blog_one" :src="require('@/assets/image/img_blog_details/badroom_image_one.jpg')" alt="" />
        <div class="blog_details_date">
          <span class="date">{{ item.date }}</span>
          <span class="text_desc_inDate">{{ item.textDescInDate }}</span>
        </div>
        <p class="textDesc_blog_one">{{ item.textDesk_one }}</p>
        <div class="blok_quote">
          <img class="img_quote" :src="require('@/assets/image/img_blog_details/img_quote.png')" alt="">
          <h3 class="title_quote">{{ item.quote }}</h3>
        </div>
        <h2 class="title_blog_two">{{ item.title_two }}</h2>
        <p class="textDesc_blog_two">{{ item.textDesk_two }}</p>
        <ol>
          <li v-for="(textItem, textIndex) in item.textList" :key="textIndex">{{ textItem }}</li>
        </ol>
        <img class="img_blog_two" :src="require('@/assets/image/img_blog_details/badroom_two.jpg')" alt="" />
        <p class="textDesc_blog_tree">{{ item.textDesk_tree }}</p>
      </div>
      <BtnTag @tag-click="handleTagClick" :selected-tag="selectedCategory" />
    </div>
    <FooterComp />
  </div>
</template>

<script>
import BtnTag from './BtnTag.vue'
import FooterComp from './FooterComp.vue'
import HeaderComp from './HeaderComp.vue'

export default {
  name: 'BlogDetails',
  data () {
    return {
      selectedCategory: 'Кухня',
      kitchenDetailsBlog: [
        {
          id: 1,
          title_one: 'Создадим лучший макет перепланировки',
          image_one: '../assets/image/img_blog_details/kitchen_title_foto.png',
          date: '26 Декабрь, 2022',
          textDescInDate: 'Интерьер / Домой / Декор',
          textDesk_one: 'В своей статье от 1994-го года журнал «Before & After» отследил фразу «Lorem ipsum ...» до философского трактата Цицерона О пределах добра и зла, написанного в 45 году до нашей эры на латинском языке. В оригинале текст выглядит так «Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...», и переводится как «Нет никого, кто любил бы свою боль, кто искал бы ее и хотел бы чтобы она была у него. Потому что это боль...»',
          img_quote: '../assets/image/img_blog_details/img_quote.png',
          quote: 'Какая-то умная и красивая цитата',
          title_two: 'Design sprints are great',
          textDesk_two: 'В оригинале текст выглядит так «Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit ...», и переводится как «Нет никого, кто любил бы свою боль, кто искал бы ее и хотел бы чтобы она была у него. Потому что это боль...»',
          textList: [
            'С того времени этот, похожий на латинский, текст стал стандартом в печатной промышленности для примеров шрифтов и текстов.',
            'С того времени этот, похожий на латинский, текст стал стандартом в печатной промышленности для примеров шрифтов и текстов.',
            'С того времени этот, похожий на латинский, текст стал стандартом в печатной промышленности для примеров шрифтов и текстов.'
          ],
          image_two: '../assets/image/img_blog_details/kitchen_desc_foto.png',
          textDesk_tree: 'В своей статье от 1994-го года журнал «Before & After» отследил фразу «Lorem ipsum ...» до философского трактата Цицерона О пределах добра и зла, написанного в 45 году до нашей эры на латинском языке. '
        }
      ],
      bedroomDetailsBlog: [
        {
          id: 2,
          title_one: 'Создадим лучший макет перепланировки',
          image_one: '../assets/image/img_blog_details/badroom_image_one.jpg',
          date: '26 Декабрь, 2022',
          textDescInDate: 'Интерьер / Домой / Декор',
          textDesk_one: 'В своей статье от 1994-го года журнал «Before & After» отследил фразу «Lorem ipsum ...» до философского трактата Цицерона О пределах добра и зла, написанного в 45 году до нашей эры на латинском языке. В оригинале текст выглядит так «Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...», и переводится как «Нет никого, кто любил бы свою боль, кто искал бы ее и хотел бы чтобы она была у него. Потому что это боль...»',
          img_quote: '../assets/image/img_blog_details/img_quote.png',
          quote: 'Какая-то умная и красивая цитата',
          title_two: 'Design sprints are great',
          textDesk_two: 'В оригинале текст выглядит так «Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit ...», и переводится как «Нет никого, кто любил бы свою боль, кто искал бы ее и хотел бы чтобы она была у него. Потому что это боль...»',
          textList: [
            'С того времени этот, похожий на латинский, текст стал стандартом в печатной промышленности для примеров шрифтов и текстов.',
            'С того времени этот, похожий на латинский, текст стал стандартом в печатной промышленности для примеров шрифтов и текстов.',
            'С того времени этот, похожий на латинский, текст стал стандартом в печатной промышленности для примеров шрифтов и текстов.'
          ],
          image_two: '../assets/image/img_blog_details/badroom_two.jpg',
          textDesk_tree: 'В своей статье от 1994-го года журнал «Before & After» отследил фразу «Lorem ipsum ...» до философского трактата Цицерона О пределах добра и зла, написанного в 45 году до нашей эры на латинском языке. '
        }
      ]
    }
  },
  components: { HeaderComp, FooterComp, BtnTag },
  methods: {
    handleTagClick (tag) {
      this.selectedCategory = tag // Обновляем выбранную категорию
    }
  }
}
</script>

<style lang="scss" scoped>
.backgroud_container {
  background-image: url('@/assets/image/img_blog_details/header_foto_blog_details.jpeg');
  width: 100%;
  height: 351px;
  background-repeat: no-repeat;
  background-position: center;
}

.container_blog_details {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
}

.blog_details_left {
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 805px;
  margin-top: 200px;

  .title_blog_one {
    font-family: DM-serif;
    font-size: 50px;
    font-weight: 400;
    color: #292F36;
    max-width: 684px;
    margin-bottom: 21px;
  }

  .img_blog_one {
    max-width: 800px;
    max-height: 540px;
    border-radius: 50px;
  }
}

.blog_details_date {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-right: 40px;
  margin-top: 46px;

  .date,
  .text_desc_inDate {
    font-family: Jost-Regular;
    font-size: 16px;
    font-weight: 400;
    color: #4D5053;
  }
}

.blog_details_left {
  .textDesc_blog_one {
    font-family: Jost-Regular;
    font-size: 22px;
    font-weight: 400;
    color: rgb(77, 80, 83);
    max-width: 800px;
    margin-top: 48px;
  }
}

.blok_quote {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 35px;
  padding: 53px 0;
  background-color: rgb(244, 240, 236);
  border-radius: 50px;

  .title_quote,
  img {
    font-family: DM-serif;
    font-size: 25px;
    font-weight: 400;
    color: #CDA274;
    max-width: 355px;
    text-align: center;
    font-style: italic;
  }
}

.blog_details_left {
  .title_blog_two {
    font-family: DM-serif;
    font-size: 50px;
    font-weight: 400;
    color: rgb(41, 47, 54);
    margin-top: 28px;
  }

  .textDesc_blog_two {
    font-family: Jost-Regular;
    font-size: 22px;
    font-weight: 400;
    color: rgb(77, 80, 83);
    max-width: 800px;
    margin-top: 20px;
  }

  ol {
    counter-reset: blog-list-counter;
    padding-left: 0;
    margin-top: 24px;
  }

  ol li {
    list-style: none;
    counter-increment: blog-list-counter;
    position: relative;
    padding-left: 30px;
    margin-bottom: 30px;
    font-family: Jost-Regular;
    font-size: 22px;
    font-weight: 400;
    color: rgb(77, 80, 83);

    &:before {
      content: counter(blog-list-counter);
      position: absolute;
      left: 0;
      top: 0;
      width: 20px;
      height: 20px;
      line-height: 20px;
      text-align: center;
      color: #CDA274;
    }
  }

  .img_blog_two {
    margin-top: 14px;
    border-radius: 50px;
    max-width: 800px;
    height: 365px;
  }

  .textDesc_blog_tree {
    margin-top: 35px;
    font-family: Jost-Regular;
    font-size: 22px;
    font-weight: 400;
    color: rgb(77, 80, 83);
  }
}
</style>
