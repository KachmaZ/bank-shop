<template>
  <v-app-bar app color="white" elevation="0">
    <b-row class="w-100" align-h="center" align-v="center">
      <b-col>
        <div class="nav">
          <router-link :to="{ name: 'catalog' }">Каталог</router-link>
          <router-link :to="{ name: 'delivery' }">Доставка</router-link>
          <router-link :to="{ name: 'payment' }">Оплата</router-link>
          <router-link :to="{ name: 'about' }">О компании</router-link>
        </div>
      </b-col>

      <b-col>
        <v-spacer></v-spacer>
      </b-col>

      <b-col>
        <v-input>Search</v-input>
      </b-col>
    </b-row>
  </v-app-bar>
</template>

<script>
export default {
  name: "MainHeader",
};
</script>

<style lang="scss"></style>
