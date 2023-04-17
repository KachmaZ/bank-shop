<template>
  <div class="">
    <v-container class="">
      <h4 class="text-h4 d-flex justify-center justify-lg-start">
        Products Index
      </h4>
      <v-row class="" justify="center" justify-lg="start">
        <ProductsCard v-for="item in items" v-bind="item" :key="item.id" />
      </v-row>
    </v-container>
  </div>
</template>

<script>
import ProductsCard from "./ProductsCard.vue";
export default {
  name: "ProductsIndex",
  data: () => {
    return {
      items: [
        {
          id: 1,
          imgName: "1.jpg",
          title: "«Рождение Венеры» Сандро Боттичелли",
          currentPrice: "1000000",
          currency: "$",
          sold: false,
        },
        {
          id: 2,
          imgName: "2.jpg",
          title: "«Тайная вечеря»  Леонардо да Винчи",
          currentPrice: "3 000 000",
          currency: "$",
          sold: false,
        },
        {
          id: 3,
          imgName: "3.jpg",
          title: "«Сотворение Адама» Микеланджело",
          oldPrice: "6 000 000",
          currentPrice: "5 000 000",
          currency: "$",
          sold: false,
        },
        {
          id: 4,
          imgName: "4.jpg",
          title: "«Урок анатомии»  Рембрандт",
          currency: "$",
          sold: true,
        },
      ],
    };
  },
  components: {
    ProductsCard,
  },
};
</script>
