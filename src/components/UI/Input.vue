<template>
  <div
    class="input"
    :class="[
      { 'has-error': error && !isFocused },
      { 'is-iconed': icon },
      isFocusedOrNotBlank && 'is-focused',
      theme,
    ]"
  >
    <label v-if="label" :for="uid" class="input__label" v-html="formatLabel" />
    <div
      class="input__input"
      :class="[{ 'is-iconed': icon || clearable, 'is-clearable': isClearable }, iconPosition]"
    >
      <input
        v-if="!isTextArea"
        :id="uid"
        :value="value"
        :placeholder="placeholder"
        v-bind="$attrs"
        v-on="$listeners"
        @input="setValue"
        @focus="handleFocus"
        @blur="handleBlur"
      />
      <textarea
        v-else
        :id="uid"
        :value="value"
        :placeholder="placeholder"
        v-bind="$attrs"
        v-on="$listeners"
        @input="setValue"
        @focus="handleFocus"
        @blur="handleBlur"
      />

      <span v-if="icon" class="input__icon" :class="[iconPosition]">
        <SvgIcon :name="icon" />
      </span>
      <span v-if="clearable" class="input__clear" @click="clearInput">
        <SvgIcon name="close" />
      </span>
    </div>

    <div class="input__error" v-if="error" v-html="error" />
    <div class="input__helper" v-if="helper">{{ helper }}</div>
  </div>
</template>

<script>
import uniqueId from "lodash/uniqueId"

export default {
  name: "Input",
  props: {
    value: {
      type: String,
      required: false,
    },
    label: {
      type: String,
      required: false,
    },
    placeholder: {
      type: String,
      required: false,
    },
    icon: {
      type: String,
      required: false,
    },
    iconPosition: {
      type: String,
      required: false,
    },
    helper: {
      type: String,
      required: false,
    },
    error: {
      type: [String, Boolean],
      required: false,
    },
    clearable: {
      type: [Boolean, Number],
      required: false,
    },
    theme: {
      type: String,
      required: false,
    },
  },
  data() {
    return {
      isFocused: false,
    }
  },
  computed: {
    formatLabel() {
      return this.label.replace("*", "<i>*</i>")
    },
    uid() {
      return uniqueId()
    },
    isTextArea() {
      return this.$attrs.textarea !== undefined
    },
    isFocusedOrNotBlank() {
      if (this.value && this.value.trim().length > 0) {
        return true
      }
      return this.isFocused
    },
    isClearable() {
      if (this.clearable) {
        return this.value && this.value.replace(/^\s+|\s+$/g, "").length >= 1
      } else {
        return false
      }
    },
  },
  mounted() {
    document.addEventListener("onautocomplete", this.handleAutocompleate, false)
  },
  beforeUnmount() {
    if (this.$refs.dialogs) {
      document.removeEventListener("onautocomplete", this.handleAutocompleate, false)
    }
  },
  methods: {
    setValue(e) {
      this.$emit("onChange", e.target.value)
    },
    handleAutocompleate(e) {
      if (parseInt(e.target.getAttribute("id")) === this._uid) {
        if (e.target.hasAttribute("autocompleted")) {
          this.isFocused = true
        }
      }
    },
    handleFocus(e) {
      this.isFocused = true
    },
    handleBlur() {
      this.isFocused = false
    },
    clearInput() {
      if (this.isClearable) {
        this.$emit("onChange", "")
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.input {
  position: relative;
  &__label {
    display: block;
    font-size: 18px;
    font-weight: normal;
    line-height: (21 / 18);
    font-family: $baseFont;
    color: $fontColor;
    margin-bottom: 6px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &__input {
    position: relative;
    z-index: 1;
    input,
    textarea {
      -webkit-appearance: none;
      display: block;
      width: 100%;
      padding: 15px 12px 15px;
      border: 1px solid rgba(0, 0, 0, 0.26);
      background: white;
      border-radius: 4px;
      font-family: $baseFont;
      font-size: 16px;
      font-style: normal;
      font-weight: normal;
      line-height: 1.2;
      color: $fontColor;
      transition: border 0.25s $ease, color 0.25s $ease, background 0.25s $ease;
      &::placeholder {
        color: $colorGray;
      }
      &:focus,
      &:active {
        outline: none;
        border-color: $colorGray;
      }
      &:hover {
        // background-color: #f7f6f7;
        border-color: $colorGray;
      }
      &[readonly],
      &[disabled] {
        color: $fontColor;
        background: #ededed;
        border-color: #ededed;
        &:focus,
        &:active {
          border-color: #ededed;
        }
      }
    }
    textarea {
      resize: vertical;
    }
    &.is-iconed {
      input,
      textarea {
        padding-right: 45px;
      }
      &.left {
        input,
        textarea {
          padding-left: 45px;
          padding-right: 14px;
        }
      }
    }
    &.is-clearable {
      input,
      textarea {
        padding-right: 45px;
      }
      .input__clear {
        opacity: 1;
        pointer-events: all;
      }
      &.is-iconed {
        .input__icon:not(.left) {
          opacity: 0;
          pointer-events: none;
        }
      }
    }
  }
  &__icon {
    position: absolute;
    z-index: 2;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 0;
    pointer-events: none;
    &.left {
      left: 15px;
      right: auto;
    }
    .svg-icon {
      font-size: 16px;
      color: $colorPrimary;
    }
  }
  &__clear {
    position: absolute;
    z-index: 2;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    padding: 14px 16px 14px 16px;
    color: $colorPrimary;
    font-size: 0px;
    cursor: pointer;
    opacity: 0;
    pointer-events: none;
    transition: color 0.25s $ease;
    .svg-icon {
      font-size: 16px;
    }
    &:hover {
      color: $fontColor;
    }
  }
  &__error {
    margin-top: 10px;
    font-size: 14px;
    line-height: 120%;
    color: $colorRed;
    & + .input__helper {
      margin-top: 0;
    }
  }
  &__helper {
    margin-top: 10px;
    font-size: 14px;
    line-height: 120%;
    color: $colorGray;
  }
  &.has-error {
    .input__input {
      input,
      textarea {
        border-color: $colorRed;
      }
    }
    .input__label {
      color: $colorRed;
    }
  }

  &.dynamic {
    .input__label {
      position: absolute;
      top: 15px;
      left: 12px;
      padding-left: 2px;
      padding-right: 2px;
      font-size: 13px;
      font-weight: 400;
      color: rgba(0, 0, 0, 0.38);
      background: white;
      z-index: 2;
      pointer-events: none;
      transition: all 0.25s ease-in-out;
    }
    .input__input {
      input,
      textarea {
        padding-top: 16px;
        padding-bottom: 10px;
      }
    }
    &.is-focused {
      .input__label {
        top: -7px;
      }
    }
    &.has-error {
      .input__label {
        top: -7px;
      }
    }
    &.is-iconed.left {
      .input__label {
        left: 45px;
      }
    }
  }
}

input[type="search"]::-webkit-search-decoration,
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-results-button,
input[type="search"]::-webkit-search-results-decoration {
  -webkit-appearance: none;
}
</style>
