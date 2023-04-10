<template>
  <div class="hamburger-menu">
    <input id="menu__toggle" type="checkbox" />
    <label class="menu__btn" for="menu__toggle">
      <span></span>
    </label>

    <ul class="menu__box">
      <div class="menu-box__flex">
        <div class="menu-box__main">
          <li><a class="menu__item" href="#">Каталог</a></li>
          <li><a class="menu__item" href="#">Доставка</a></li>
          <li><a class="menu__item" href="#">Оплата</a></li>
          <li><a class="menu__item" href="#">Контакты</a></li>
          <li><a class="menu__item" href="#">О компании</a></li>
          <hr>
          <li class="menu__flex">
            <div class="menu__icon">
              <img src="" alt="">
            </div>
            <span class="menu__item" href="#">Вход / Регистрация</span>
          </li>
        </div>
      </div>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TheBurger"
}
</script>

<style scoped>

</style>