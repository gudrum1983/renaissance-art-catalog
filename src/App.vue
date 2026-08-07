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
        v-if="filteredProductItems.length"
        :products="filteredProductItems"
        @toggle-cart="toggleCart"
        @open-details="openProductDetails"
      />
      <p v-else class="page-content__empty">
        По вашему запросу картины не найдены
      </p>
    </div>
    <PageFooter
      :navigation-items="navigationItems"
      :search-value="searchValue"
      @search="handleSearch"
      @reset-search="handleResetSearch"
    />
    <transition name="modal">
      <ProductDetailsModal
        v-if="selectedProduct"
        :product="selectedProduct"
        @close="selectedProduct = null"
      />
    </transition>
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

  computed: {
    filteredProductItems(): Array<Product> {
      const query = this.searchValue.trim().toLocaleLowerCase("ru-RU");

      if (!query) return this.productItems;

      return this.productItems.filter((product) =>
        `${product.title} ${product.subtitle}`
          .toLocaleLowerCase("ru-RU")
          .includes(query)
      );
    },
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

.page-content__empty {
  color: var(--color-text-secondary);
  font: var(--font-h2);
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity var(--transition-base);
}

.modal-enter-active .product-modal__dialog,
.modal-leave-active .product-modal__dialog {
  transition: transform var(--transition-base);
}

.modal-enter,
.modal-leave-to {
  opacity: 0;
}

.modal-enter .product-modal__dialog,
.modal-leave-to .product-modal__dialog {
  transform: translateY(12px) scale(0.98);
}

@media (prefers-reduced-motion: reduce) {
  .modal-enter-active,
  .modal-leave-active,
  .modal-enter-active .product-modal__dialog,
  .modal-leave-active .product-modal__dialog {
    transition: none;
  }
}
</style>
