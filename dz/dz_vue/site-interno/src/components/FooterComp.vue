<template>
  <div class="container_footer">
                <div class="footer_block">
                    <div class="logo_footer">
                        <img src="../assets/image/img/Logo.svg" alt="logo">
                        <p class="logo_text_footer">Interno</p>
                    </div>
                    <div class="social_footer">
                        <a href="#"><img class="twit_logo" src="../assets/image/img/twit_logo.png" alt=""></a>
                        <a href="#"><img class="in_logo" src="../assets/image/img/in_logo.png" alt=""></a>
                    </div>
                </div>
                <div class="footer_block">
                    <h2>Страницы</h2>
                    <ul>
                        <li>
                            <a href="#">Домой</a>
                        </li>
                        <li>
                            <a href="#">Проект</a>
                        </li>
                        <li>
                            <a href="#">Блог</a>
                        </li>
                    </ul>
                </div>
                <div class="footer_block">
                    <h2>Контакты</h2>
                    <address>
                        <p>55 East Birchwood Ave. Brooklyn, New York 11201</p>
                        <a href="mailto:contact@interno.com">contact@interno.com</a>
                        <a href="tel:+11234567890">(123) 456 - 7890</a>
                    </address>
                </div>
            </div>
</template>

<script>
export default {
  name: 'FooterComp',
  props: ['footer'],

  data () {
    return {

    }
  },

  methods: {

  }
}
</script>

<style lang="scss" scoped>
  .container_footer {
    max-width: 1200px;
    margin: 0 auto;
  }
</style>
