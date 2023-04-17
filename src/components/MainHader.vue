<template>
  <div>
    <v-app-bar app color="white" elevation="0">
      <v-container>
        <v-row class="w-100 justify-space-between">
          <v-col auto class="d-flex align-center">
            <v-app-bar-nav-icon
              class="d-lg-none"
              @click="drawer = true"
            ></v-app-bar-nav-icon>
            <div class="nav d-none d-lg-flex flex-nowrap text-body-1">
              <router-link
                class="grey--text text--grey-main text-decoration-none mr-12"
                :to="{ name: 'catalog' }"
                >Каталог</router-link
              >
              <router-link
                class="grey--text text--grey-main text-decoration-none mr-12"
                :to="{ name: 'delivery' }"
                >Доставка</router-link
              >
              <router-link
                class="grey--text text--grey-main text-decoration-none mr-12"
                :to="{ name: 'payment' }"
                >Оплата</router-link
              >
              <router-link
                class="grey--text text--grey-main text-decoration-none mr-12"
                :to="{ name: 'contacts' }"
                >Контакты</router-link
              >
              <router-link
                class="grey--text text--grey-main text-decoration-none"
                :to="{ name: 'about' }"
                >О компании</router-link
              >
            </div>
          </v-col>

          <!-- <v-spacer></v-spacer> -->

          <v-col>
            <div class="d-flex">
              <v-text-field
                class="custom-search pl-4"
                height="48"
                hide-details
                placeholder="Поиск по названию картины"
              ></v-text-field>
              <v-btn color="lighten-2" height="48" width="112" tile dark
                >Поиск</v-btn
              >
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <div class="nav pa-4 d-flex flex-column text-body-1">
        <router-link
          class="grey--text text--grey-main text-decoration-none mb-12"
          :to="{ name: 'catalog' }"
          >Каталог</router-link
        >
        <router-link
          class="grey--text text--grey-main text-decoration-none mb-12"
          :to="{ name: 'delivery' }"
          >Доставка</router-link
        >
        <router-link
          class="grey--text text--grey-main text-decoration-none mb-12"
          :to="{ name: 'payment' }"
          >Оплата</router-link
        >
        <router-link
          class="grey--text text--grey-main text-decoration-none mb-12"
          :to="{ name: 'contacts' }"
          >Контакты</router-link
        >
        <router-link
          class="grey--text text--grey-main text-decoration-none"
          :to="{ name: 'about' }"
          >О компании</router-link
        >
      </div>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "MainHeader",

  data: () => {
    return {
      drawer: false,
    };
  },
};
</script>

<style lang="scss">
.v-input.custom-search {
  width: 294px;
  border: 1px solid #e1e1e1;
  .v-input__control {
    .v-input__slot {
      &:before,
      &:after {
        display: none;
      }
    }
  }
}
</style>
