<template>
    <div class="container">
      <div class="header-menu">
        <div class="header-menu__link">
            <a to="/">Каталог</a>
            <a to="/">Доставка</a>
            <a to="/">Оплата</a>
            <a to="/">Контакты</a>
            <a to="/">О компании</a>
        </div>
        <div class="header-menu__burger">
          <the-burger/>
        </div>
        <form class="header-menu__search">
            <input
                :value="query"
                @input="updateQuery($event.target.value)"
                class="header-menu__search-input"
                type="search"
                placeholder="Поиск по названию картины"
                >
            <button class="btn header-menu__search-btn" type="submit">Найти</button>
        </form>
      </div>
    </div>
</template>

<script>
import TheBurger from "@/components/header/TheBurger";
export default {
  inject:['query', 'updateQuery'],
  data(){
    return {
    }
  },
  name: "TheHeader",
  components:{TheBurger}
}
</script>
