<template>
  <div class="stars" :class="[`size-${size}`]">
    <SvgIcon name="star" :class="[rating >= 1 && 'is-active']" />
    <SvgIcon name="star" :class="[rating >= 2 && 'is-active']" />
    <SvgIcon name="star" :class="[rating >= 3 && 'is-active']" />
    <SvgIcon name="star" :class="[rating >= 4 && 'is-active']" />
    <SvgIcon name="star" :class="[rating >= 5 && 'is-active']" />
  </div>
</template>

<script>
export default {
  name: "Error",
  props: {
    rating: {
      type: Number,
    },
    size: {
      type: String,
    },
  },
}
</script>

<style lang="scss" scoped>
.stars {
  display: flex;
  align-items: center;
  margin: -2px;
  .svg-icon {
    font-size: 12px;
    margin: 2px;
    color: $colorLight;
    &.is-active {
      color: #e4a972;
    }
  }
  &.size-big {
    margin: -3px;
    .svg-icon {
      font-size: 13px;
      margin: 3px;
    }
  }
}
</style>
