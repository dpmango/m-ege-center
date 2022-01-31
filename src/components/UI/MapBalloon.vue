<template>
  <div class="marker" id="marker">
    <div class="marker__head">
      <span class="metro" :title="marker.name" :style="{ background: `#${marker.hex_color}` }" />
      <span class="f-500">{{ marker.title }}</span>
    </div>
    <p class="p-regular">
      <span class="c-light">Адрес:</span> {{ marker.meta.address }} <br />
      <span class="c-light">Телефон:</span> {{ marker.meta.phone }}<br />
      <span class="c-light">Часы работы:</span> {{ marker.meta.hours }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    marker: Object,
  },
  methods: {},
}
</script>

<style lang="scss">
.marker {
  padding: 16px 25px;
  background: white;
  font-family: $baseFont;
  &__head {
    display: flex;
    align-items: center;
    font-size: 13px;
    margin-bottom: 8px;
  }
  p {
    font-size: 13px;
  }
}

.metro {
  display: inline-block;
  flex: 0 0 auto;
  width: 9px;
  height: 9px;
  margin-right: 10px;
  border-radius: 50%;
}
</style>
