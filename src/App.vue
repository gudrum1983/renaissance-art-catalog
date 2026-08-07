<template>
  <div id="app">
    <PageHeader
      :navigation-items="navigationItems"
      :search-value="searchValue"
      @search="handleSearch"
      @reset-search="handleResetSearch"
    />
    <div class="page-content">
      <h1 class="header-page">Картины эпохи Возрождения</h1>
      <ProductCardList :products="productItems" @toggle-cart="toggleCart" />
    </div>
    <PageFooter
      :navigation-items="navigationItems"
      :search-value="searchValue"
      @search="handleSearch"
      @reset-search="handleResetSearch"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { navigation, products } from "@/shared/data";
import { CartTogglePayload, Product } from "@/shared/types";
import PageHeader from "@/components/organisms/PageHeader.vue";
import PageFooter from "@/components/organisms/PageFooter.vue";
import ProductCardList from "@/components/organisms/ProductCardList.vue";

export default Vue.extend({
  name: "App",
  components: {
    ProductCardList,
    PageHeader,
    PageFooter,
  },
  data() {
    return {
      searchValue: "",
      navigationItems: navigation,
      productItems: products.map(
        (product): Product => ({
          ...product,
          isInCart: Boolean(product.isInCart),
        })
      ),
    };
  },

  methods: {
    handleSearch(value: string): void {
      this.searchValue = value;
    },

    handleResetSearch(): void {
      this.searchValue = "";
    },

    toggleCart({ id }: CartTogglePayload): void {
      const product = this.productItems.find((item) => item.id === id);
      console.log(product);
      console.log(id);
      if (product) {
        product.isInCart = !product.isInCart;
      }
    },
  },
});
</script>

<style>
.page-content {
  --max-width: var(--container-max-width);
  max-width: var(--max-width);
  min-height: calc(100vh - 97px - 97px);
  padding-block: 45px;
  padding-inline: 47px;
  margin-inline: auto;
}

.header-page {
  font: var(--font-h1);
  letter-spacing: var(--letter-spacing-tight);
  padding-bottom: 39px;
}
/*#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/
</style>
