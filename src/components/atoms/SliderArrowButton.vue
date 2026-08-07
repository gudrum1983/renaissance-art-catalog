<template>
  <button
    class="slider-arrow-button"
    :class="{ 'slider-arrow-button_previous': direction === 'previous' }"
    :style="{ color: color || undefined }"
    type="button"
    :aria-label="ariaLabel"
    @click="$emit('click', $event)"
  >
    <svg
      height="16px"
      width="16px"
      viewBox="0 0 185.343 185.343"
      xml:space="preserve"
    >
      <g>
        <g>
          <path
            style="fill: currentColor"
            d="M51.707,185.343c-2.741,0-5.493-1.044-7.593-3.149c-4.194-4.194-4.194-10.981,0-15.175
			l74.352-74.347L44.114,18.32c-4.194-4.194-4.194-10.987,0-15.175c4.194-4.194,10.987-4.194,15.18,0l81.934,81.934
			c4.194,4.194,4.194,10.987,0,15.175l-81.934,81.939C57.201,184.293,54.454,185.343,51.707,185.343z"
          />
        </g>
      </g>
    </svg>
  </button>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";

type SliderDirection = "previous" | "next";

export default Vue.extend({
  name: "SliderArrowButton",

  props: {
    color: {
      type: String,
      default: "",
    },

    direction: {
      type: String as PropType<SliderDirection>,
      required: true,
    },

    label: {
      type: String,
      default: "",
    },
  },

  computed: {
    ariaLabel(): string {
      if (this.label) return this.label;

      return this.direction === "previous" ? "Назад" : "Вперёд";
    },
  },
});
</script>

<style scoped>
.slider-arrow-button {
  width: 34px;
  height: 34px;
  border: 0;
  color: var(--color-button-text-primary-default);
  background: inherit;
  font: var(--font-хxl);
  cursor: pointer;
  transition: all var(--transition-base);
  display: flex;
  align-items: center;
  justify-content: center;
}

.slider-arrow-button:hover {
  color: var(--color-button-text-secondary-default);
  scale: 1.2;
}

.slider-arrow-button_previous {
  transform: rotate(180deg);
}
</style>
