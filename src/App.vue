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
      <ProductCardList
        :products="productItems"
        @toggle-cart="toggleCart"
        @open-details="openProductDetails"
      />
    </div>
    <PageFooter
      :navigation-items="navigationItems"
      :search-value="searchValue"
      @search="handleSearch"
      @reset-search="handleResetSearch"
    />
    <ProductDetailsModal
      v-if="selectedProduct"
      :product="selectedProduct"
      @close="selectedProduct = null"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { navigation, products } from "@/shared/data";
import { CartTogglePayload, Product, ProductId } from "@/shared/types";
import { loadCartProductIds, saveCartProductIds } from "@/shared/cartStorage";
import PageHeader from "@/components/organisms/PageHeader.vue";
import PageFooter from "@/components/organisms/PageFooter.vue";
import ProductCardList from "@/components/organisms/ProductCardList.vue";
import ProductDetailsModal from "@/components/organisms/ProductDetailsModal.vue";

const createProductItems = (): Array<Product> => {
  const storedProductIds = loadCartProductIds();

  return products.map(
    (product): Product => ({
      ...product,
      isInCart: storedProductIds
        ? storedProductIds.includes(product.id)
        : Boolean(product.isInCart),
    })
  );
};

export default Vue.extend({
  name: "App",
  components: {
    ProductCardList,
    ProductDetailsModal,
    PageHeader,
    PageFooter,
  },
  data() {
    return {
      searchValue: "",
      navigationItems: navigation,
      selectedProduct: null as Product | null,
      productItems: createProductItems(),
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
      if (product) {
        product.isInCart = !product.isInCart;

        saveCartProductIds(
          this.productItems
            .filter((item) => item.isInCart)
            .map((item) => item.id)
        );
      }
    },

    openProductDetails(id: ProductId): void {
      this.selectedProduct =
        this.productItems.find((product) => product.id === id) || null;
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
</style>
