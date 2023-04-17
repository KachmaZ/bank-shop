<template>
  <v-col class="fill-height" cols="12" sm="auto" lg="3">
    <v-card class="mx-auto mx-sm-0" width="280" height="100%">
      <v-img :src="require(`@/assets/images/${imgName}`)"></v-img>
      <div class="card-wrapper pa-6 pt-5">
        <v-card-title class="pa-0 mb-5 text-h5">
          {{ title }}
        </v-card-title>
        <v-card-actions class="sold" v-if="sold">
          Продана на аукционе
        </v-card-actions>
        <v-card-actions class="pa-0 d-flex justify-space-between" v-else>
          <div class="card_price">
            <div class="price">
              <div class="text-decoration-line-through" v-if="oldPrice">
                {{ oldPrice }}{{ currency }}
              </div>
              <div class="price-current">{{ currentPrice }}{{ currency }}</div>
            </div>
          </div>
          <v-btn color="lighten-2" height="48" width="112" tile dark>
            Купить
          </v-btn>
        </v-card-actions>
      </div>
    </v-card>
  </v-col>
</template>

<script>
export default {
  props: {
    id: Number,
    imgName: String,
    title: String,
    oldPrice: String,
    currentPrice: String,
    currency: String,
    sold: Boolean,
  },
  name: "ProductsCard",
};
</script>
