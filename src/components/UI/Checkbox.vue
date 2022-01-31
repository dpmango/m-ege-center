<template>
  <label
    :for="uid"
    class="checkbox"
    @click="() => setValue()"
    :class="[{ 'has-error': error }, theme]"
  >
    <div class="checkbox__input">
      <input
        :id="uid"
        type="checkbox"
        :checked="value"
        :value="value"
        v-bind="$attrs"
        v-on="$listeners"
        @input="setValue"
      />
      <div class="checkbox__input-box">
        <SvgIcon name="checkmark" />
      </div>
    </div>
    <div class="checkbox__label">
      <slot />
    </div>
  </label>
</template>

<script>
import uniqueId from "lodash/uniqueId"

export default {
  name: "Checkbox",
  props: {
    value: {
      type: Boolean,
      required: false,
    },

    error: {
      type: [String, Boolean],
      required: false,
    },
    theme: {
      type: String,
      required: false,
    },
  },
  computed: {
    uid() {
      return uniqueId()
    },
  },
  methods: {
    setValue(e) {
      this.$emit("onChange", !this.value)
    },
  },
}
</script>

<style lang="scss" scoped>
.checkbox {
  position: relative;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  &__label {
    position: relative;
    z-index: 2;
    font-size: 14px;
    padding-left: 18px;
    color: $colorGray;
    cursor: pointer;
    transition: opacity 0.25s $ease;
    a {
      text-decoration: underline;
      transition: color 0.25s $ease;
      &:hover {
        text-decoration: none;
        color: $colorPrimary;
      }
    }
    &:hover {
      opacity: 0.8;
    }
  }
  &__input {
    flex: 0 0 auto;
    position: relative;
    input {
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0;
      width: 0.1px;
      height: 0.1px;
      overflow: hidden;
      &:checked + .checkbox__input-box {
        background: $colorPrimary;
        border-color: transparent;
        .svg-icon {
          opacity: 1;
          transform: scale(1);
        }
      }
    }
  }
  &__input-box {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    background: transparent;
    border-radius: 5px;
    border: 1px solid #cbcbcb;
    color: white;
    transition: background 0.25s $ease, border 0.25s $ease;
    .svg-icon {
      font-size: 10px;
      opacity: 0;
      transform: scale(0);
      will-change: transform;
      transition: opacity 0.25s $ease, transform 0.25s $ease;
    }
  }
  &.has-error {
    .checkbox {
      &__input-box {
        background: $colorRed;
        border-color: $colorRed;
      }
    }
  }
}
</style>
