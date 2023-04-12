<template>
  <div class="container-box">
<!--    <div class="container-box__search">-->
<!--      <input type="text" v-model="ticker">-->
<!--    </div>-->
    <div class="container-box__title">
      <p>Картины эпохи Возрождения</p>
    </div>
    <div class="container-box__items">
      <div class="container-box__item"
           v-for="(t, idx) in filterTicker" :key="idx"
           :class="['container-box__item-saled', {active: t.count === 0}]"
      >
        <div class="container-box__img">
          <img :src="require(`../assets/img/card/${t.img}.png`)" alt="">
        </div>
        <p class="container-box__p">{{t.name}}</p>
        <div class="container-box__buy">
          <div class="container-box__prices">
            <div class="container-box__discount" v-if="t.discount"> {{ t.discount }} $</div>
            <div class="container-box__price" :class="['container-box__not-discount', {active: !t.discount}]">{{ t.price }} <i v-if="!t.price">$</i></div>
          </div>
          <div class="container-box__btn" v-if="t.count !== 0">
            <button class="btn container-box__button">Купить</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  inject:['query'],
  data(){
    return {
      tickers:[
        {
          img:'img1',
          name: '«рождение венеры» сандро боттичелли',
          price: '1 000 000',
          discount: '2 000 000'
        },
        {
          img:'img2',
          name: '«тайная вечеря»  леонардо да винчи',
          price: '3 000 000',
          discount: ''
        },
        {
          img:'img3',
          name: '«сотворение адама» микеланджело',
          price: '1 000 000',
          discount: '6 000 000'
        },
        {
          img:'img4',
          name: '«урок анатомии»  рембрандт',
          price: 'Продана на аукционе',
          count:0,
          discount: ''
        },
      ]
    }
  },
  computed:{
    filterTicker(){
      return this.tickers.filter((query) => query.name.indexOf(this.query) > -1
      )
    }
  },
  name: "TheCatalog"
}
</script>

<style scoped>

</style>