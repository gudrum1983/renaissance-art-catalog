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
      <ButtonBase color="accent">
        <template v-slot:icon>
          <IconCheck size="20" />
        </template>
        В корзине
      </ButtonBase>
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
import ButtonBase from "@/components/atoms/ButtonBase.vue";
import IconCheck from "@/components/atoms/icons/IconCheck.vue";
import { navigation } from "@/shared/data";
import PageHeader from "@/components/organisms/PageHeader.vue";
import PageFooter from "@/components/organisms/PageFooter.vue";

export default Vue.extend({
  name: "App",
  components: {
    PageHeader,
    IconCheck,
    ButtonBase,
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
