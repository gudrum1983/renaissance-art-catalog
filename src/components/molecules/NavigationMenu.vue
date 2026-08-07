<template>
  <nav class="navigation-menu" aria-label="Основная навигация">
    <ul class="navigation-menu__list">
      <li v-for="item in items" :key="item.id" class="navigation-menu__item">
        <a class="navigation-menu__link" :href="item.href">
          {{ item.label }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import { NavigationItem } from "@/shared/types";

type MenuColor = "primary" | "secondary" | "default";

export default Vue.extend({
  name: "NavigationMenu",

  props: {
    items: {
      type: Array as PropType<Array<NavigationItem>>,
      required: true,
    },

    color: {
      type: String as PropType<MenuColor>,
      default: "default",
    },
  },
});
</script>

<style scoped>
.navigation-menu {
  font: var(--font-body-regular);
  color: inherit;
}

.navigation-menu__list {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: fit-content;
  gap: 48px;
}

.navigation-menu__link {
  position: relative;
  color: inherit;
  text-decoration: none;
}

.navigation-menu__link::after {
  content: "";
  position: absolute;
  right: 0;
  bottom: -2px;
  left: 0;

  height: 1px;
  background-color: currentColor;

  transform: scaleX(0);
  transform-origin: left;
  transition: transform var(--transition-base);
}

.navigation-menu__link:hover::after {
  transform: scaleX(1);
}

@media (max-width: 1260px) {
  .navigation-menu__list {
    gap: 32px;
  }
}

@media (max-width: 640px) {
  .navigation-menu__list {
    flex-wrap: wrap;
    justify-content: center;
    gap: 14px 24px;
  }
}
</style>
