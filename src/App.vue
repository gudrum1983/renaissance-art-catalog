<template>
  <div id="app">
    <PageHeader
      :navigation-items="navigationItems"
      :search-value="searchValue"
      @search="handleSearch"
      @reset-search="handleResetSearch"
    />

    <ButtonBase color="accent">
      <template v-slot:icon>
        <IconCheck size="20" />
      </template>
      В корзине
    </ButtonBase>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ButtonBase from "@/components/atoms/ButtonBase.vue";
import IconCheck from "@/components/atoms/icons/IconCheck.vue";
import { navigation } from "@/shared/data";
import PageHeader from "@/components/organisms/PageHeader.vue";

export default Vue.extend({
  name: "App",
  components: {
    PageHeader,
    IconCheck,
    ButtonBase,
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
/*#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/
</style>
