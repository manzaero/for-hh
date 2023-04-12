<template>
  <div class="flex-column">
    <header>
      <slot name="header"></slot>
    </header>
    <hr>
    <content class="flex-fill container-fluid">
      <slot/>
    </content>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script>
import {computed} from 'vue'
export default {
  data(){
    return {
      query:''
    }
  },methods: {
    updateQuery(search) {
      this.query = search
    }
  },
  provide() {
    return {
      query: computed(() => this.query),
      updateQuery: this.updateQuery
    }
  },
  name: 'HelloWorld'
}
</script>
