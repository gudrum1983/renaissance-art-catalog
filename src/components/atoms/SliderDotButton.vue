<template>
  <button
    class="slider-dot-button"
    :class="{ 'slider-dot-button_active': active }"
    type="button"
    :aria-label="label"
    :aria-current="active ? 'true' : undefined"
    @click="$emit('click', $event)"
  />
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "SliderDotButton",

  props: {
    active: {
      type: Boolean,
      default: false,
    },

    label: {
      type: String,
      required: true,
    },
  },
});
</script>

<style scoped>
.slider-dot-button {
  width: 9px;
  height: 9px;
  border: 1px solid var(--color-button-text-primary-default);
  border-radius: 50%;
  background: transparent;
  cursor: pointer;
  transition: all var(--transition-base);
}

.slider-dot-button:hover {
  scale: 1.1;
  background: var(--color-button-text-secondary-opacity);
}

.slider-dot-button_active,
.slider-dot-button_active:hover {
  scale: 1.2;
  background: var(--color-button-text-secondary-default);
}
</style>
