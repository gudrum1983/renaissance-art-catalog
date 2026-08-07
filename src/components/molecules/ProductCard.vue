<template>
  <div class="product-card">
    <img class="product-card__image" :src="image" :alt="title" />

    <div class="product-card__bottom-block">
      <div class="product-card__description">
        <p>{{ title }}</p>
        <p>{{ subtitle }}</p>
      </div>
      <div v-if="isSold" class="product-card__sold-text">
        <span>{{ soldText }}</span>
      </div>

      <div v-else class="product-card__action">
        <div class="product-card__price-box">
          <div v-if="isDiscount && oldPrice" class="product-card__old-price">
            {{ oldPrice }}
          </div>
          <div class="product-card__price">{{ price }}</div>
        </div>
        <ButtonBase
          v-if="isInCart"
          color="accent"
          :is-loader="isLoading"
          @click="handleButtonClick"
        >
          <template v-slot:icon>
            <IconCheck size="20" />
          </template>
          В корзине
        </ButtonBase>
        <ButtonBase
          v-else
          color="secondary"
          :is-loader="isLoading"
          @click="handleButtonClick"
        >
          Купить
        </ButtonBase>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import ButtonBase from "@/components/atoms/ButtonBase.vue";
import IconCheck from "@/components/atoms/icons/IconCheck.vue";
import { ProductId } from "@/shared/types";

export default Vue.extend({
  name: "ProductCard",

  components: { IconCheck, ButtonBase },

  data() {
    return {
      isLoading: false,
      toggleTimerId: null as number | null,
    };
  },

  props: {
    id: {
      type: [String, Number] as PropType<ProductId>,
      required: true,
    },

    image: {
      type: String,
      required: true,
    },

    title: {
      type: String,
      required: true,
    },

    subtitle: {
      type: String,
      required: true,
    },

    price: {
      type: String,
      default: "",
    },

    oldPrice: {
      type: String,
      default: "",
    },

    isDiscount: {
      type: Boolean,
      default: false,
    },

    isSold: {
      type: Boolean,
      default: false,
    },

    isInCart: {
      type: Boolean,
      default: false,
    },

    soldText: {
      type: String,
      default: "Продано",
    },
  },

  methods: {
    handleButtonClick(): void {
      if (this.isLoading) return;

      this.isLoading = true;

      this.toggleTimerId = window.setTimeout(() => {
        this.$emit("toggle-cart", {
          id: this.id,
          isInCart: this.isInCart,
        });

        this.isLoading = false;
        this.toggleTimerId = null;
      }, 2000);
    },
  },

  beforeDestroy(): void {
    if (this.toggleTimerId !== null) {
      window.clearTimeout(this.toggleTimerId);
    }
  },
});
</script>

<style scoped>
.product-card {
  border: 1px solid var(--color-border-primary);
  letter-spacing: 2%;
}

.product-card__image {
  width: 100%;
  height: 158px;
  object-fit: cover;
  margin-bottom: 15px;
  border-bottom: 1px solid var(--color-border-light);
}

.product-card__bottom-block {
  padding: 0 24px 24px;
}

.product-card__description {
  font: var(--font-h2);
  margin-bottom: 22px;
}

.product-card__action {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.product-card__price-box {
  display: flex;
  flex-direction: column;
}

.product-card__price {
  font: var(--font-h3);
  letter-spacing: 0;
  font-variant-numeric: oldstyle-nums;
}

.product-card__old-price {
  font: var(--font-body-light);
  color: var(--color-text-muted);
  text-decoration: line-through;
  letter-spacing: 0;
  font-variant-numeric: oldstyle-nums;
}
.product-card__sold-text {
  min-height: 48px;
  display: flex;
  align-items: center;
  font: var(--font-h3);
  letter-spacing: 0;
}
</style>
