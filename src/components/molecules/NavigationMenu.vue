<template>
  <nav
    class="navigation-menu"
    :style="{ color: color || undefined }"
    aria-label="Основная навигация"
  >
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

interface NavigationItem {
  label: string;
  href: string;
  id: string;
}

type MenuColor = "primary" | "secondary" | "default";

export default Vue.extend({
  name: "NavigationMenu",

  props: {
    items: {
      type: Array as PropType<NavigationItem[]>,
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
  --color-link: inherit;

  font: var(--font-body-regular);
  color: var(--color-link);
}

.navigation-menu_color_default {
  --color-link: inherit;
}

.navigation-menu_color_primary {
  --color-link: var(--color-text-primary);
}

.navigation-menu_color_secondary {
  --color-link: var(--color-text-secondary);
}

.navigation-menu__list {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: fit-content;
  gap: 24px;
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
  bottom: 1px;
  left: 0;

  height: 1px;
  background-color: currentColor;

  transform: scaleX(0);
  transform-origin: left;
  transition: transform var(--transition-base);
}

.navigation-menu__link:hover::after,
.navigation-menu__link:focus-visible::after {
  transform: scaleX(1);
}
</style>
