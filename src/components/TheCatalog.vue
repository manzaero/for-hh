<template>
  <div class="container-box">
<!--    <div class="container-box__search">-->
<!--      <input type="text" v-model="ticker">-->
<!--    </div>-->
    <div class="container-box__title">
      <p>Картины эпохи Возрождения</p>
    </div>
    <div class="container-box__items">
      <the-catalog-item
          v-for="ticker in filterTicker"
          :key="ticker.id"
          :ticker="ticker"
          @addTicker="addTicker"
      />
    </div>
    <the-cart
        v-if="cart.length"
        :cart-data="cart"
    />
  </div>
</template>

<script>
import TheCart from "@/components/cart/TheCart";
import {mapActions,mapGetters} from "vuex";
import TheCatalogItem from "@/components/TheCatalogItem";
export default {
  inject:['query'],
  data(){
    return {
    }
  },
  computed:{
    ...mapGetters(['tickers', 'cart']),
    filterTicker(){
      return this.tickers.filter((query) => query.name.indexOf(this.query) > -1
      )
    }
  },
  methods:{
    ...mapActions(['getTickers', 'setTickers']),
    addTicker(data){
      this.setTickers(data)
    }
  },
  mounted() {
    this.getTickers()
  },
  name: "TheCatalog",
  components:{TheCart, TheCatalogItem}
}
</script>