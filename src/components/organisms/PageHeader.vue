<template>
  <header class="page-header">
    <div class="container page-header__container">
      <NavigationMenu :items="navigationItems" color="primary" />

      <SearchForm
        :applied-value="searchValue"
        @submit="$emit('search', $event)"
        @reset="$emit('reset-search')"
      />
    </div>
  </header>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import NavigationMenu from "@/components/molecules/NavigationMenu.vue";
import SearchForm from "@/components/organisms/SearchForm.vue";

interface NavigationItem {
  id: string;
  label: string;
  href: string;
}

export default Vue.extend({
  name: "PageHeader",

  components: {
    NavigationMenu,
    SearchForm,
  },

  props: {
    navigationItems: {
      type: Array as PropType<NavigationItem[]>,
      required: true,
    },

    searchValue: {
      type: String,
      default: "",
    },
  },
});
</script>

<style scoped>
.page-header {
  border-bottom: 1px solid var(--color-border-primary);
}

.page-header__container {
  padding: 24px 0 24px 96px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
