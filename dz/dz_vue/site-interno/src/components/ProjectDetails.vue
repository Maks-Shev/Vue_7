<template>
  <div>
    <HeaderComp />
    <div class="header_photo"></div>
    <div class="block_text_project">
      <h2>Минималистичные спальни</h2>
      <p>В своей статье от 1994-го года журнал «Before & After» отследил      фразу «Lorem ipsum ...» до философского трактата
        Цицерона О пределах добра и зла, написанного в 45 году до нашей эры на латинском языке.
      </p>
      <p>
        В оригинале текст выглядит так «Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur,
        adipisci velit ...», и переводится как «Нет никого, кто любил бы свою боль, кто искал бы ее и хотел бы чтобы она
        была у него. Потому что это боль...».
      </p>
    </div>
    <SliderComp />
    <FooterComp />
  </div>
</template>

<script>
import FooterComp from './FooterComp.vue'
import HeaderComp from './HeaderComp.vue'
import SliderComp from './SliderComp.vue'

export default {
  name: 'ProjectDetails',
  data () {
    return {}
  },
  mounted () {
  },
  methods: {},
  components: { HeaderComp, SliderComp, FooterComp }
}
</script>

<style lang="scss" scoped>
.header_photo {
  background-image: url('@/assets/image/img/header_photo_project_details.jpeg');
  background-position: center;
  background-repeat: no-repeat;
  height: 356px;
  width: 100%;
  margin-top: 45px;
}
.block_text_project {
  width: 100%;
  max-width: 658px;
  margin: 200px auto 103px;
  h2 {
    font-family: DM-serif;
    font-size: 50px;
    font-weight: 400;
    color: #292F36;
    width: 100%;
    max-width: 565px;
    line-height: 50px;
  }
  p {
    font-family: Jost-Regular;
    font-size: 22px;
    font-weight: 400;
    color: #4D5053;
    margin-top: 10px;
  }
  p:nth-last-child(1) {
    padding-top: 40px;
  }
}
</style>
