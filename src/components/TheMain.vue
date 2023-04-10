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
export default {
  name: 'HelloWorld'
}
</script>
