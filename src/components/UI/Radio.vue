<template>
  <label
    :for="uid"
    class="radio"
    :class="[{ 'has-error': error }, { 'no-label': !label }, { 'is-active': value }, theme]"
    @click="setValue"
  >
    <div class="radio__input">
      <input
        :id="uid"
        type="radio"
        :checked="value"
        :value="value"
        v-bind="$attrs"
        v-on="$listeners"
        @input="setValue"
      />
      <div class="radio__input-box"></div>
    </div>
    <div class="radio__content">
      <div class="radio__label" v-if="label">{{ label }}</div>
      <div class="radio__helper" v-if="helper">
        {{ helper }}
      </div>
    </div>
  </label>
</template>

<script>
import uniqueId from "lodash/uniqueId"

export default {
  name: "Radio",
  props: {
    value: {
      type: Boolean,
      required: false,
    },
    label: {
      type: String,
      required: false,
    },
    error: {
      type: [String, Boolean],
      required: false,
    },
    helper: {
      type: String,
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
.radio {
  position: relative;
  display: inline-flex;
  cursor: pointer;
  border: 1.5px solid $borderColor;
  border-radius: 4px;
  padding: 26px 20px 27px;
  transition: border 0.25s $ease;
  &.is-active,
  &:hover {
    border-color: $colorPrimary;
  }
  &.no-label {
    display: block;
  }
  &__content {
    padding-top: 3px;
    padding-left: 10px;
  }
  &__label {
    position: relative;
    z-index: 2;
    font-weight: normal;
    font-size: 16px;
    cursor: pointer;
    transition: opacity 0.25s $ease;
    &:hover {
      opacity: 0.8;
    }
  }
  &__helper {
    margin-top: 6px;
    font-size: 12px;
    color: $colorGray;
  }
  &__input {
    flex: 0 0 auto;
    position: relative;
    font-size: 0;
    input {
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0;
      width: 0.1px;
      height: 0.1px;
      overflow: hidden;
      &:checked + .radio__input-box {
        background: $colorPrimary;
        &::after {
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
    width: 24px;
    height: 24px;
    background: #ededed;
    // border: 1px solid #cdced9;
    // color: white;
    color: $colorGray;
    border-radius: 50%;
    transition: 0.25s $ease;
    &::after {
      display: inline-block;
      content: " ";
      position: absolute;
      top: 8px;
      left: 8px;
      width: 8px;
      height: 8px;
      background: white;
      border-radius: 50%;
      transform: scale(0);
      transform-origin: center center;
      transition: transform 0.25s $ease;
      will-change: transform;
    }
  }
}
@include r($md) {
  .radio {
    padding: 15px 20px;
  }
}
</style>
