<template>
  <form class="search-form" @submit.prevent="handleSubmit">
    <SearchInput
      v-model="inputValue"
      :button-label="currentButtonLabel"
      :placeholder="placeholder"
    />
  </form>
</template>

<script lang="ts">
import Vue from "vue";
import SearchInput from "@/components/molecules/SearchInput.vue";

export default Vue.extend({
  name: "SearchForm",

  components: { SearchInput },

  props: {
    placeholder: {
      type: String,
      default: "Поиск по названию",
    },

    appliedValue: {
      type: String,
      default: "",
    },

    submitLabel: {
      type: String,
      default: "Найти",
    },

    resetLabel: {
      type: String,
      default: "Очистить",
    },
  },

  data() {
    return {
      inputValue: "",
    };
  },

  computed: {
    isSearchApplied(): boolean {
      return (
        Boolean(this.appliedValue) &&
        this.inputValue.trim() === this.appliedValue
      );
    },

    currentButtonLabel(): string {
      return this.isSearchApplied ? this.resetLabel : this.submitLabel;
    },
  },

  methods: {
    handleSubmit(): void {
      if (this.isSearchApplied) {
        this.inputValue = "";
        this.$emit("reset");
        return;
      }

      const query = this.inputValue.trim();

      this.$emit("submit", query);
    },
  },
});
</script>
