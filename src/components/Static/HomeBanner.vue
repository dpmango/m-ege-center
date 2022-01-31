<template>
  <section class="banner">
    <div class="container">
      <div class="banner__row">
        <div class="banner__image banner__image--left">
          <img src="/static/img/static/homebanner-1.svg" alt="" />
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

        <div class="banner__image banner__image--right">
          <img src="/static/img/static/homebanner-2.svg" alt="" />
        </div>
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
  margin: 125px 0 80px;
  &__row {
    display: flex;
  }
  &__content {
    flex: 1 1 auto;
    text-align: center;
    padding: 0 30px;
    p {
      margin-top: 36px;
    }
    button {
      margin-top: 54px;
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
      width: 226px;
    }
    &--right {
      width: 205px;
      margin-top: -20px;
    }
  }
}
</style>
