<template>
  <v-app>
    <MainHeader />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import MainHeader from "./components/MainHader.vue";

export default {
  name: "App",

  data: () => ({
    //
  }),

  components: { MainHeader },
};
</script>

<style lang="scss">
@import "~@/assets/scss/vendors/bootstrap-vue/index";
</style>
