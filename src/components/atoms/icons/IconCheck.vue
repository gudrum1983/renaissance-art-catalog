<template>
  <svg
    class="icon-check"
    :style="{ color: color || undefined }"
    :width="size"
    :height="size"
    viewBox="0 0 20 20"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M16.5315 4.80937 7.63341 14.237l-4.28527-4.0446"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";

type IconSize = number | string;

export default Vue.extend({
  name: "IconCheck",

  props: {
    /** Размер иконки. Числовое значение интерпретируется как px. */
    size: {
      type: [Number, String] as PropType<IconSize>,
      default: 16,
    },

    /** Цвет иконки. По умолчанию наследуется от родителя через currentColor. */
    color: {
      type: String,
      default: "",
    },
  },
});
</script>

<style scoped>
.icon-check {
  display: block;
  flex-shrink: 0;
}
</style>
