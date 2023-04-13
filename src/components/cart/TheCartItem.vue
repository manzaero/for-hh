<template>
  <div class="container-box__cart-form">
    <div class="container-box__img">
      <img :src="require(`../../assets/img/card/${cartItem.img}.png`)" alt="">
    </div>
    <p class="">{{cartItem.name}}</p>
    <div class="">
      {{cartItem.price}}
    </div>

    <span><h6>Количество: {{cartItem.quantity}}</h6></span>
    <button class="btn btn-dark" @click="removeItem">Удалить</button>
  </div>
</template>

<script>
export default {
  props:{
    cartItem:{
      type: Object,
      default:{}
    }
  },
  data(){
    return {

    }
  },
  methods:{
    removeItem(){
      this.$emit('removeItem')
    }
  },
  mounted() {
    this.$set(this.cartItem, 'quantity', 1)
  }
}
</script>