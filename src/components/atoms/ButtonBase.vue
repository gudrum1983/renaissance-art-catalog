<template>
  <button
    class="button-base"
    :class="buttonClasses"
    :type="type"
    :disabled="disabled || isLoader"
    :aria-label="isLoader ? loadingLabel : undefined"
    :aria-busy="isLoader"
  >
    <span
      class="button-base__content"
      :class="{ 'button-base__content_hidden': isLoader }"
    >
      <span v-if="hasIconSlot" class="button-base__icon">
        <slot name="icon" />
      </span>

      <span class="button-base__label">
        <slot />
      </span>
    </span>

    <span v-if="isLoader" class="button-base__loader" aria-hidden="true" />
  </button>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";

type ButtonColor = "primary" | "secondary" | "accent";
type ButtonType = "button" | "submit" | "reset";

export default Vue.extend({
  name: "ButtonBase",

  props: {
    color: {
      type: String as PropType<ButtonColor>,
      default: "primary",
    },

    type: {
      type: String as PropType<ButtonType>,
      default: "button",
    },

    disabled: {
      type: Boolean,
      default: false,
    },

    fullWidth: {
      type: Boolean,
      default: false,
    },

    isLoader: {
      type: Boolean,
      default: false,
    },

    loadingLabel: {
      type: String,
      default: "Обрабатывается",
    },
  },

  computed: {
    buttonClasses(): Array<string | Record<string, boolean>> {
      return [
        `button-base_color_${this.color}`,
        {
          "button-base_full-width": this.fullWidth,
          "button-base_loading": this.isLoader,
        },
      ];
    },

    hasIconSlot(): boolean {
      return Boolean(this.$slots.icon);
    },
  },
});
</script>

<style scoped>
.button-base {
  --btn-bg: var(--color-button-background-primary-default);
  --btn-bg-hover: var(--color-button-background-primary-hover);
  --btn-bg-disabled: var(--color-button-background-primary-disabled);
  --btn-clr-text: var(--color-button-text-primary-default);

  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  min-width: 118px;
  min-height: 48px;
  padding: 14px 8px;
  border: 0;
  font: var(--font-body-bold);

  position: relative;

  background: var(--btn-bg);
  color: var(--btn-clr-text);
  transition: var(--transition-base);

  &:hover {
    background: var(--btn-bg-hover);
  }

  &:disabled {
    background: var(--btn-bg-disabled);
    cursor: not-allowed;
  }
}

.button-base_full-width {
  width: 100%;
}

.button-base_color_primary {
  --btn-bg: var(--color-button-background-primary-default);
}

.button-base_color_secondary {
  --btn-bg: var(--color-button-background-secondary-default);
}

.button-base_color_accent {
  --btn-bg: var(--color-button-background-accent-default);
}

.button-base__content {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
}

.button-base__content_hidden {
  visibility: hidden;
}

.button-base__icon {
  width: 20px;
  height: 20px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.button-base__loader {
  position: absolute;
  width: 20px;
  height: 20px;
  border: 3px solid currentColor;
  border-right-color: transparent;
  border-radius: 50%;
  animation: buttonLoaderRotate 0.8s linear infinite;
  top: calc(50% - 10px);
  left: calc(50% - 10px);
}

@keyframes buttonLoaderRotate {
  to {
    transform: rotate(360deg);
  }
}
</style>
