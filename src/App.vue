<template>
  <the-main>
    <template v-slot:header>
      <the-header/>
    </template>
    <router-view/>
    <template v-slot:footer>
      <the-footer/>
    </template>
  </the-main>
</template>

<script>
import TheHeader from "@/components/header/TheHeader";
import TheFooter from "@/components/footer/TheFooter";
import TheMain from "@/components/TheMain";
export default {
  components: {TheHeader, TheFooter, TheMain}
}
</script>