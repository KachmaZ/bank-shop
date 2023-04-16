<template>
  <div class="">Product Card {{ item }}</div>
</template>

<script>
export default {
  props: {
    item: String,
  },
  name: "ProductsCard",
};
</script>
