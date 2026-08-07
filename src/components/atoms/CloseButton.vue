<template>
  <button
    class="close-button"
    :style="{ color: color || undefined }"
    type="button"
    :aria-label="label"
    @click="$emit('click', $event)"
  >
    <svg width="36px" height="36px" viewBox="0 0 24 24" fill="none">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M16.9498 8.46447C17.3404 8.07394 17.3404 7.44078 16.9498 7.05025C16.5593 6.65973 15.9261 6.65973 15.5356 7.05025L12.0001 10.5858L8.46455 7.05025C8.07402 6.65973 7.44086 6.65973 7.05033 7.05025C6.65981 7.44078 6.65981 8.07394 7.05033 8.46447L10.5859 12L7.05033 15.5355C6.65981 15.9261 6.65981 16.5592 7.05033 16.9497C7.44086 17.3403 8.07402 17.3403 8.46455 16.9497L12.0001 13.4142L15.5356 16.9497C15.9261 17.3403 16.5593 17.3403 16.9498 16.9497C17.3404 16.5592 17.3404 15.9261 16.9498 15.5355L13.4143 12L16.9498 8.46447Z"
        fill="currentColor"
      />
    </svg>
  </button>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "CloseButton",

  props: {
    color: {
      type: String,
      default: "",
    },

    label: {
      type: String,
      default: "Закрыть",
    },
  },
});
</script>

<style scoped>
.close-button {
  border: 0;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-button-background-primary-default);
  background: inherit;
  cursor: pointer;
  transition: all var(--transition-base);
}
.close-button:hover {
  color: var(--color-button-background-primary-hover);
  transform: rotate(90deg);
}
</style>
