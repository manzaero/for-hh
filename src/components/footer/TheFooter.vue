<template>
  <footer class="footer footer__bg fixed-bottom">
    <div class="container">
      <div class="footer-menu">
        <ul class="footer-menu__link">
          <a to="/">Каталог</a>
          <a to="/">Доставка</a>
          <a to="/">Оплата</a>
          <a to="/">Контакты</a>
          <a to="/">О компании</a>
        </ul>
        <div class="footer-menu__contact">
          <div class="footer-menu__tel">
            <div class="footer-menu__icon-phone">
              <img src="../../assets/img/icon/phone.png" alt="">
            </div>
            <div class="footer-menu__number">
              <p>+7 (812) 555-55-55</p>
            </div>
          </div>
          <div class="footer-menu__address">
            <div class="footer-menu__icon-location">
              <img src="../../assets/img/icon/location.png" alt="">
            </div>
            <div class="footer-menu__city">
              <p>г. Санкт-Петербург, ул. Ефимова, 3</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "TheFooter"
}
</script>

<style scoped>

</style>