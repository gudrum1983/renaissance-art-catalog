<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript370004 App" />
    <div
      style="
        margin-bottom: 16px;
        display: flex;
        flex-direction: column;
        gap: 8px;
      "
    >
      <ButtonBase>Default</ButtonBase>
      <ButtonBase color="secondary">Secondary</ButtonBase>
      <ButtonBase color="accent">Accent</ButtonBase>
      <ButtonBase color="secondary">Длинный текст</ButtonBase>
      <ButtonBase color="secondary" is-loader>Длинный текст</ButtonBase>
      <ButtonBase color="secondary" disabled>Длинный текст</ButtonBase>
      <ButtonBase color="accent">
        <template v-slot:icon>
          <IconCheck size="20" />
        </template>
        В корзине
      </ButtonBase>
      <ButtonBase color="secondary">Купить</ButtonBase>
      <ButtonBase color="secondary" full-width>
        По ширине родительского контейнера
      </ButtonBase>
      <SearchForm
        :applied-value="searchValue"
        @submit="handleSearchSubmit"
        @reset="handleSearchReset"
      />

      <p>
        Передано из SearchForm:
        {{ searchValue || " Значение пока не передано!" }}
      </p>

      <NavigationMenu :items="navigationItems" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import ButtonBase from "@/components/atoms/ButtonBase.vue";
import IconCheck from "@/components/atoms/icons/IconCheck.vue";
import SearchForm from "@/components/organisms/SearchForm.vue";
import NavigationMenu from "@/components/molecules/NavigationMenu.vue";

export default Vue.extend({
  name: "App",
  components: {
    SearchForm,
    IconCheck,
    HelloWorld,
    ButtonBase,
    NavigationMenu,
  },
  data() {
    return {
      searchValue: "",
      navigationItems: [
        { id: "catalog", label: "Каталог", href: "#" },
        { id: "delivery", label: "Доставка", href: "#" },
        { id: "payment", label: "Оплата", href: "#" },
        { id: "contacts", label: "Контакты", href: "#" },
        { id: "about", label: "О компании", href: "#" },
      ],
    };
  },

  methods: {
    handleSearchSubmit(value: string): void {
      this.searchValue = value;
    },

    handleSearchReset(): void {
      this.searchValue = "";
    },
  },
});
</script>

<style>
/*#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/
</style>
