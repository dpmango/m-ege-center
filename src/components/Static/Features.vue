<template>
  <section class="features" :class="className">
    <div class="container">
      <h2 v-if="title" class="features__title h2-title tac">{{ title }}</h2>

      <div class="features__grid">
        <div class="feature" v-for="feature in list" :key="feature.id">
          <div class="feature__title">{{ feature.label }}</div>
          <p class="p-regular" v-html="feature.description" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    list: Array,
    title: String,
    className: String,
  },
}
</script>

<style lang="scss" scoped>
.features {
  padding: 26px 0 32px 0;
  background: $colorBg;
  &.bg-white {
    background: white;
  }
  &.pb-100 {
    padding-bottom: 110px;
  }
  &__title {
    margin-top: -10px;
    margin-bottom: 70px;
  }
  &__wrapper {
    align-items: center;
  }
  &__grid {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 42px;
  }
}

.feature {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  &__title {
    font-weight: 700;
    font-size: 28px;
    color: $colorPrimary;
  }
  p {
    max-width: 170px;
    margin-top: 8px;
    line-height: 1.5;
  }
}
</style>
