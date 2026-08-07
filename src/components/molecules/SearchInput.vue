<template>
  <div class="search-input" :class="searchInputClasses">
    <input
      class="search-input__field"
      type="text"
      :value="value"
      :placeholder="placeholder"
      @input="handleInput"
      @focus="isFocused = true"
      @blur="isFocused = false"
    />

    <ButtonBase class="search-input__button" type="submit" full-width>
      {{ buttonLabel }}
    </ButtonBase>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ButtonBase from "@/components/atoms/ButtonBase.vue";

export default Vue.extend({
  name: "SearchInput",

  components: { ButtonBase },

  props: {
    value: {
      type: String,
      default: "",
    },

    placeholder: {
      type: String,
      default: "Поиск по названию",
    },

    buttonLabel: {
      type: String,
      default: "Найти",
    },
  },

  data() {
    return {
      isFocused: false,
    };
  },

  computed: {
    searchInputClasses(): Record<string, boolean> {
      return {
        "search-input_focused": this.isFocused,
        "search-input_filled": Boolean(this.value),
      };
    },
  },

  methods: {
    handleInput(event: Event): void {
      const target = event.target as HTMLInputElement;

      this.$emit("input", target.value);
    },
  },
});
</script>

<style scoped>
.search-input {
  --color-border: var(--color-border-input-default);
  --color-placeholder: var(--color-text-placeholder);

  width: fit-content;
  min-width: 416px;
  display: flex;
}

.search-input_focused {
  --color-border: var(--color-border-input-focus);
}

.search-input__field {
  width: 100%;
  padding: 13px 16px;
  outline: none;
  font: var(--font-body-regular);
  color: var(--color-text-primary);
  border-radius: 0;
  border: 1px solid var(--color-border);
  letter-spacing: var(--letter-spacing-base);
}
.search-input__field::placeholder {
  color: var(--color-placeholder);
}
.search-input__button {
  max-width: 122px;
}
</style>
