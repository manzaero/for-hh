<template>
  <button
      class="btn container-box__button"
      :disabled="loading"
      @click="loadMore"
  >
    <template v-if="loading">
      <icon name="loader"/>
      Обработка
    </template>
    <template v-else>
      Купить
    </template>
  </button>
</template>

<script>
export default {
  data(){
    return {
      loading: false,
      sales:'В корзине'
    }
  },
  methods: {
    loadMore() {
      this.loading = true
      setTimeout(() => {
        this.loading = false
      }, 2000)
    }
  },
  name: "TheButton"
}
</script>

<style scoped>

</style>