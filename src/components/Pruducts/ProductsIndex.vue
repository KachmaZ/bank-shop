<template>
  <div class="">
    <h2 class="">Products Index</h2>
    <ProductsCard v-for="item in items" :item="item" :key="item" />
  </div>
</template>

<script>
import ProductsCard from "./ProductsCard.vue";
export default {
  name: "ProductsIndex",
  data: () => {
    return {
      items: ["One", "Two", "Three"],
    };
  },
  components: {
    ProductsCard,
  },
};
</script>
