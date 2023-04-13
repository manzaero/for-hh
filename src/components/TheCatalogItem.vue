<template>
    <div class="container-box__item"
         :class="['container-box__item-saled', {active: !ticker.available}]"
    >
      <div class="container-box__img">
        <img :src="require(`../assets/img/card/${ticker.img}.png`)" alt="">
      </div>
      <p class="container-box__p">{{ticker.name}}</p>
      <div class="container-box__buy">
        <div class="container-box__prices">
          <div class="container-box__discount" v-if="ticker.discount"> {{ ticker.discount }} $</div>
          <div class="container-box__price" :class="['container-box__not-discount', {active: !ticker.discount}]">{{ ticker.price }} <i v-if="!ticker.price">$</i></div>
        </div>
        <div class="container-box__btn" v-if="ticker.available">
          <button
              class="btn container-box__button"
              @click="addTicker"
          >
            {{ button }}
          </button>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  props:{
    ticker:{
      type: Object,
      default: {}
    }
  },
  data(){
      return  {
        button: 'Купить'
      }
  },
  methods:{
    addTicker(){
      this.$emit('addTicker', this.ticker)
    }
  },
  name: "TheCatalogItem"
}
</script>

<style scoped>

</style>