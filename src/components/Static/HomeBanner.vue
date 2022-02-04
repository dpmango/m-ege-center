<template>
  <section class="banner">
    <div class="container">
      <div class="banner__row">
        <div class="banner__image banner__image--left">
          <img src="/static/img/static/homebanner-1.svg" alt="" />
        </div>

        <div class="banner__image banner__image--right">
          <img src="/static/img/static/homebanner-2.svg" alt="" />
        </div>
      </div>

      <div class="banner__content">
        <h1 class="h1-title">Готовьтесь к ЕГЭ заранее</h1>
        <p class="p-regular">
          Сеть образовательных центров в Москве по подготовке школьников 9–11 классов к ЕГЭ и ОГЭ.
          Также на базе ЕГЭ-Центра работает утренняя школа для учеников 10 и 11 классов,
          <br />выдающая аттестаты государственного образца
        </p>
        <UiButton size="big" @click="() => setModal('signup')">Записаться на курсы</UiButton>
      </div>
    </div>
  </section>
</template>

<script>
import { mapMutations } from "vuex"

export default {
  data() {
    return {}
  },
  methods: {
    ...mapMutations("ui", ["setModal"]),
  },
}
</script>

<style lang="scss" scoped>
.banner {
  margin: 48px 0 12px;
  &__row {
    display: flex;
    justify-content: space-between;
  }
  &__content {
    margin-top: 42px;
    text-align: center;
    p {
      margin-top: 24px;
      max-width: 272px;
      margin-left: auto;
      margin-right: auto;
    }
    button {
      margin-top: 24px;
    }
  }
  &__image {
    flex: 0 0 auto;
    font-size: 0;
    text-align: center;
    img {
      max-width: 100%;
    }
    &--left {
      width: 137px;
      margin-left: -7px;
    }
    &--right {
      width: 120px;
      margin-top: -10px;
      margin-right: -10px;
    }
  }
}
</style>
