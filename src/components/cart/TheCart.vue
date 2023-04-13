<template>
  <div class="container">
    <h6>Корзина</h6>
    <the-cart-item
      v-for="(item, idx) in cartData"
      :key="item.id"
      :cartItem="item"
      @removeItem="removeItem(idx)"
    />
  </div>
</template>

<script>
import TheCartItem from "@/components/cart/TheCartItem";
import {mapActions} from "vuex";

export default {
  props:{
    cartData:{
      type: Array,
      default: []
    }
  },
  methods:{
    ...mapActions(['removeItemCart']),
    removeItem(idx){
      this.removeItemCart(idx)
    }
  },
  name: "TheCart",
  components:{TheCartItem}
}
</script>

<style scoped>

</style>