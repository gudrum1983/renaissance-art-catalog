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
      <div class="product-card-grid">
        <ProductCard
          :image="require('@/assets/images/Venus.png')"
          title="«Рождение Венеры»"
          subtitle="Сандро Боттичелли"
          price="1 000 000 $"
          old-price="2 000 000 $"
          is-discount
        />
        <ProductCard
          :image="require('@/assets/images/Last_Supper.png')"
          title="«Тайная вечеря»"
          subtitle="Леонардо да Винчи"
          price="3 000 000 $"
        />
        <ProductCard
          :image="require('@/assets/images/Adam.png')"
          title="«Сотворение Адама»"
          subtitle="Микеланджело"
          price="5 000 000 $"
          old-price="6 000 000 $"
          is-discount
          is-in-cart
        />
        <ProductCard
          :image="require('@/assets/images/Lesson_Anatomy.png')"
          title="«Урок анатомии»"
          subtitle="Рембрандт"
          is-sold
          sold-text="Продана на аукционе"
        />
      </div>
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
import { navigation } from "@/shared/data";
import PageHeader from "@/components/organisms/PageHeader.vue";
import PageFooter from "@/components/organisms/PageFooter.vue";
import ProductCard from "@/components/molecules/ProductCard.vue";

export default Vue.extend({
  name: "App",
  components: {
    ProductCard,
    PageHeader,
    PageFooter,
  },
  data() {
    return {
      searchValue: "",
      navigationItems: navigation,
    };
  },

  methods: {
    handleSearch(value: string): void {
      this.searchValue = value;
    },

    handleResetSearch(): void {
      this.searchValue = "";
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
.product-card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-template-rows: repeat(auto-fill, minmax(328px, 1fr));
  gap: 32px;
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
