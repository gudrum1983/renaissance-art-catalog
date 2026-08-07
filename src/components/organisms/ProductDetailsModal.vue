<template>
  <div
    class="product-modal"
    role="presentation"
    @mousedown.self="$emit('close')"
  >
    <section
      class="product-modal__dialog"
      role="dialog"
      aria-modal="true"
      :aria-labelledby="titleId"
    >
      <CloseButton
        class="product-modal__close"
        label="Закрыть подробное описание"
        @click="$emit('close')"
      />

      <div class="product-modal__gallery">
        <div class="product-modal__viewport">
          <img
            class="product-modal__image"
            :src="activeImage.src"
            :alt="`${product.title}, изображение ${activeIndex + 1}`"
          />
        </div>

        <div class="product-modal__slide-menu" aria-label="Выбор изображения">
          <SliderArrowButton direction="previous" @click="showPrevious" />
          <div class="product-modal__dots">
            <SliderDotButton
              v-for="(_, index) in product.images"
              :key="index"
              :active="index === activeIndex"
              :label="`Показать изображение ${index + 1}`"
              @click="activeIndex = index"
            />
          </div>
          <SliderArrowButton direction="next" @click="showNext" />
        </div>
      </div>

      <div class="product-modal__content">
        <p class="product-modal__author">{{ product.subtitle }}</p>
        <h2 :id="titleId" class="product-modal__title">
          {{ product.title }}
        </h2>
        <p class="product-modal__description">{{ product.description }}</p>

        <p v-if="product.isSold" class="product-modal__sold">
          {{ product.soldText || "Продано" }}
        </p>
        <div v-else class="product-modal__prices">
          <span
            v-if="product.isDiscount && product.oldPrice"
            class="product-modal__old-price"
          >
            {{ product.oldPrice }}
          </span>
          <strong class="product-modal__price">{{ product.price }}</strong>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import { Product, ProductImage } from "@/shared/types";
import CloseButton from "@/components/atoms/CloseButton.vue";
import SliderArrowButton from "@/components/atoms/SliderArrowButton.vue";
import SliderDotButton from "@/components/atoms/SliderDotButton.vue";

export default Vue.extend({
  name: "ProductDetailsModal",

  components: { CloseButton, SliderArrowButton, SliderDotButton },

  props: {
    product: {
      type: Object as PropType<Product>,
      required: true,
    },
  },

  data() {
    return {
      activeIndex: 0,
      titleId: `product-modal-title-${this.product.id}`,
      previousBodyOverflow: "",
    };
  },

  computed: {
    activeImage(): ProductImage {
      return this.product.images[this.activeIndex];
    },
  },

  mounted(): void {
    this.previousBodyOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", this.handleKeydown);
  },

  beforeDestroy(): void {
    document.body.style.overflow = this.previousBodyOverflow;
    document.removeEventListener("keydown", this.handleKeydown);
  },

  methods: {
    showPrevious(): void {
      this.activeIndex =
        (this.activeIndex - 1 + this.product.images.length) %
        this.product.images.length;
    },

    showNext(): void {
      this.activeIndex = (this.activeIndex + 1) % this.product.images.length;
    },

    handleKeydown(event: KeyboardEvent): void {
      if (event.key === "Escape") this.$emit("close");
      if (event.key === "ArrowLeft") this.showPrevious();
      if (event.key === "ArrowRight") this.showNext();
    },
  },
});
</script>

<style scoped>
.product-modal {
  --padding: 24px;

  position: fixed;
  z-index: 10;
  inset: 0;
  display: grid;
  place-items: center;
  padding: var(--padding);
  background: var(--color-background-overlay);
}

.product-modal__dialog {
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1.25fr) minmax(280px, 0.75fr);
  width: min(960px, 100%);
  max-height: calc(100vh - var(--padding) * 2);
  background: var(--color-background-primary);
  box-shadow: 0 4px 12px var(--color-shadow);
}

.product-modal__close {
  position: absolute;
  z-index: 2;
  top: 12px;
  right: 14px;
}

.product-modal__gallery {
  background: var(--color-text-primary);
}

.product-modal__viewport {
  position: relative;
  height: 470px;
  overflow: hidden;
}

.product-modal__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.product-modal__slide-menu {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.product-modal__dots {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.product-modal__content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 64px 42px 48px;
}

.product-modal__author {
  margin-bottom: 8px;
  color: var(--color-text-muted);
  font: var(--font-body-regular);
}

.product-modal__title {
  margin-bottom: 24px;
  font: var(--font-h1);
}

.product-modal__description {
  margin-bottom: 36px;
  color: var(--color-text-secondary);
  font: var(--font-body-regular);
}

.product-modal__prices {
  display: flex;
  flex-direction: column;
}

.product-modal__old-price {
  color: var(--color-text-muted);
  font: var(--font-body-light);
  text-decoration: line-through;
}

.product-modal__price,
.product-modal__sold {
  font: var(--font-h1);
}

@media (max-width: 767px) {
  .product-modal {
    padding: 12px;
  }

  .product-modal__dialog {
    grid-template-columns: 1fr;
    max-height: calc(100vh - 24px);
  }

  .product-modal__viewport {
    height: 300px;
  }
  .product-modal__content {
    padding: 32px 24px;
  }
}
</style>
