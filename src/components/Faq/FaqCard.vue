<template>
  <div class="faqCard" :class="[opened && 'is-opened']">
    <div class="faqCard__toggle" @click="handleToggleClick">
      <div class="faqCard__label" v-html="label" />

      <SvgIcon name="caret" />
    </div>
    <slide-up-down :active="opened" :duration="300">
      <div class="faqCard__content p-regular" v-html="content" />
    </slide-up-down>
  </div>
</template>

<script>
import SlideUpDown from "vue-slide-up-down"

export default {
  components: {
    SlideUpDown,
  },
  data() {
    return {
      opened: false,
    }
  },
  props: {
    label: String,
    content: String,
  },
  methods: {
    handleToggleClick() {
      this.opened = !this.opened
    },
  },
}
</script>

<style lang="scss" scoped>
.faqCard {
  border: 1px solid #e0e0e0;
  margin-top: -1px;
  &__toggle {
    display: flex;
    align-items: center;
    font-size: 20px;
    padding: 16px 24px;
    cursor: pointer;
    transition: color 0.25s $ease;
    .svg-icon {
      flex: 0 0 auto;
      margin-left: auto;
      font-size: 8px;
      color: #757575;
      will-change: transform;
      backface-visibility: hidden;
      transition: color 0.25s $ease, transform 0.25s $ease;
    }
    &:hover {
      color: $colorPrimary;
      .svg-icon {
        color: $fontColor;
      }
    }
  }
  &__content {
    padding: 18px 24px 24px;
    display: block;
    color: $fontColor;
    line-height: 1.5;
  }
  &.is-opened {
    .faqCard {
      &__toggle {
        .svg-icon {
          transform: rotate(180deg);
        }
      }
    }
  }
}
</style>
