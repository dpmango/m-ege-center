<template>
  <div
    class="select"
    :class="[{ 'has-error': error }, theme, opened && 'is-opened', value && 'has-value']"
  >
    <label class="select__label" v-if="label" :for="_uid">{{ getLabel }}</label>

    <v-select
      :id="_uid"
      :options="options"
      :value="value"
      :placeholder="placeholderText"
      :searchable="searchable"
      @input="setSelected"
      @open="() => (opened = true)"
      @close="() => (opened = false)"
      v-bind="$attrs"
      v-on="$listeners"
    >
      <template #open-indicator="{ attributes }">
        <span v-bind="attributes">
          <SvgIcon name="select-caret" />
        </span>
      </template>
      <template #no-options="{ search, searching, loading }">
        <span> Не найдено</span>
      </template>
    </v-select>
  </div>
</template>

<script>
export default {
  name: "Select",
  data() {
    return {
      opened: false,
    }
  },
  props: {
    value: {
      type: [String, Array, Object],
      required: false,
    },
    options: {
      type: Array,
      required: true,
      default() {
        return []
      },
    },
    label: {
      type: String,
      required: false,
    },
    placeholder: {
      type: String,
      required: false,
    },
    searchable: {
      type: Boolean,
      default: false,
    },
    theme: {
      type: String,
      required: false,
    },
    error: {
      type: [String, Array],
      required: false,
    },
  },
  computed: {
    placeholderText() {
      return this.placeholder || "Выберите"
    },
    getLabel() {
      return typeof this.error === "string" ? this.error : this.label
    },
  },
  methods: {
    setSelected(val) {
      this.$emit("onSelect", val)
    },
  },
}
</script>

<style lang="scss" scoped>
.select {
  position: relative;
  &__label {
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
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  &.has-error {
    .select__label {
      color: $colorRed;
    }
  }
  &.is-opened,
  &.has-value {
    .select__label {
      top: -9px;
    }
  }
}
</style>

<style lang="scss">
.select {
  .vs__dropdown-toggle {
    background: transparent;
    border: 1px solid $borderColor;
    padding: 0;
    border: 1px solid rgba(0, 0, 0, 0.26);
    transition: border 0.25s $ease, background 0.25s $ease;
    &:hover {
      background-color: transparent;
    }
  }
  .vs__selected-options {
    padding: 0;
    min-width: 1px;
    flex-wrap: nowrap;
    white-space: nowrap;
    overflow: hidden;
  }
  .vs__search,
  .vs__search:focus {
    margin: 0;
    padding: 15px 12px;
    font-family: $baseFont;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.3;
    border: 0;
    color: $colorGray;
  }
  .vs__selected {
    position: relative;
    color: $fontColor;
    background: transparent;
    margin: 0;
    padding: 14px 12px 13.5px;
    border: 0;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.3;
    + .vs__selected {
      padding-left: 0;
      margin-left: -6px;
      &::before {
        display: inline-block;
        content: ",";
        position: absolute;
        left: -13px;
        top: 13px;
      }
    }
    + .vs__search {
      margin-left: -6px;
      padding-left: 0;
    }
  }
  .vs__actions {
    padding: 0 16px 0 0px;
  }
  .vs__open-indicator {
    fill: rgba(0, 0, 0, 0.35) !important;
    width: 10px;
    font-size: 0;
    .svg-icon {
      font-size: 5px;
    }
  }
  .vs__dropdown-menu {
    top: calc(100% - 1px);
    padding: 0;
    box-shadow: none;
    border: 0;
    background: white;
    border: 1px solid $fontColor;
    border-radius: 0 0 5px 5px;
  }
  .vs__dropdown-option {
    position: relative;
    padding: 9px 16px;
    color: $fontColor;
    font-family: $baseFont;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.3;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    transition: background 0.1s $ease, color 0.25s $ease;
  }
  .vs__dropdown-option--highlight {
    background: #e6e7e8;
    color: $fontColor;
  }
  .vs__dropdown-option--selected {
    padding-right: 16px;
  }
  .vs__no-options {
    padding: 14px 20px;
    font-size: 14px;
    text-align: center;
  }
  .vs__clear {
    margin-right: 12px;
    font-size: 0;
    .svg-icon {
      font-size: 10px;
    }
    &:hover {
      color: $colorPrimary;
    }
  }
  &.has-error {
    .vs__dropdown-toggle {
      border-color: $colorRed;
    }
  }
  .vs--open {
    .vs__open-indicator {
      transform: none;
    }
    .vs__dropdown-toggle {
      border-color: $colorGray;
    }
  }
}
</style>
