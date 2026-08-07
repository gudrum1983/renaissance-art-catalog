<template>
  <header class="page-header">
    <div class="container">
      <div class="page-header__content">
        <NavigationMenu :items="navigationItems" />

        <SearchForm
          class="page-header__search"
          :applied-value="searchValue"
          @submit="$emit('search', $event)"
          @reset="$emit('reset-search')"
          placeholder="Поиск по названию картины"
        />
      </div>
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
  --header-container-left-padding: calc(
    var(--content-padding) + var(--content-offset-left)
  );
  --header-container-right-padding: var(--content-padding);

  min-height: 97px;
  border-bottom: 1px solid var(--color-border-primary);
  display: flex;
  align-items: center;
  color: var(--color-text-primary);
  padding-block: 20px;
}

.page-header__content {
  width: 100%;
  padding-left: var(--header-container-left-padding);
  padding-right: var(--header-container-right-padding);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

@media (max-width: 1260px) {
  .page-header {
    --header-container-left-padding: 0;
    --header-container-right-padding: 0;
  }
}

@media (max-width: 960px) {
  .page-header__content {
    flex-direction: column;
    justify-content: center;
    gap: 20px;
  }

  .page-header__search {
    width: min(416px, 100%);
  }
}
</style>
