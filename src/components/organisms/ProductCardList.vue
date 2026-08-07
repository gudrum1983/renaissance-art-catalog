<template>
  <div class="product-card-list">
    <ProductCard
      v-for="product in products"
      :key="product.id"
      v-bind="product"
      @toggle-cart="$emit('toggle-cart', $event)"
      @open-details="$emit('open-details', $event)"
    />
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import ProductCard from "@/components/molecules/ProductCard.vue";
import { Product } from "@/shared/types";

export default Vue.extend({
  name: "ProductCardList",

  components: { ProductCard },

  props: {
    products: {
      type: Array as PropType<Array<Product>>,
      required: true,
    },
  },
});
</script>

<style scoped>
.product-card-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-template-rows: repeat(auto-fill, minmax(328px, 1fr));
  gap: 32px;
}
</style>
