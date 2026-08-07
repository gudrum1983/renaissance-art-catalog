<template>
  <footer class="page-footer">
    <div class="container">
      <div class="page-footer__content">
        <NavigationMenu :items="navigationItems" />
        <div class="page-footer__contacts">
          <div class="page-footer__contact page-footer__contact_spaced">
            <IconPhone />
            <span>+7 (812) 555-55-55</span>
          </div>

          <div class="page-footer__contact">
            <IconLocation />
            <span>г. Санкт-Петербург, ул. Ефимова, 3</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import NavigationMenu from "@/components/molecules/NavigationMenu.vue";
import IconLocation from "@/components/atoms/icons/IconLocation.vue";
import IconPhone from "@/components/atoms/icons/IconPhone.vue";

interface NavigationItem {
  id: string;
  label: string;
  href: string;
}

export default Vue.extend({
  name: "PageFooter",

  components: {
    IconPhone,
    IconLocation,
    NavigationMenu,
  },

  props: {
    navigationItems: {
      type: Array as PropType<NavigationItem[]>,
      required: true,
    },
  },
});
</script>

<style scoped>
.page-footer {
  --footer-container-left-padding: calc(
    var(--content-padding) + var(--content-offset-left)
  );
  --footer-container-right-padding: 0;

  min-height: 97px;
  background-color: var(--color-background-secondary);
  color: var(--color-text-secondary);
  display: flex;
  align-items: center;
}

.page-footer__content {
  width: 100%;
  padding-left: var(--footer-container-left-padding);
  padding-right: var(--footer-container-right-padding);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.page-footer__contacts {
  display: flex;
  gap: 51px;
}

.page-footer__contact {
  display: flex;
  align-items: center;
  gap: 8px;
}

.page-footer__contact_spaced {
  letter-spacing: var(--letter-spacing-wide);
}
</style>
