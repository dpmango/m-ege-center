<template>
  <section class="signup">
    <div class="container">
      <div class="signup__wrapper">
        <h2 class="h2-title">Набор в школу до <span class="c-primary">30 декабря 2021 г.</span></h2>
        <p class="c-gray">Количество мест ограничено. Успейте записаться!</p>
        <UiButton size="big" @click="() => setModal('signup')">Записаться на консультацию</UiButton>
      </div>
    </div>
  </section>
</template>

<script>
import { mapMutations } from "vuex"

export default {
  methods: {
    ...mapMutations("ui", ["setModal"]),
  },
}
</script>

<style lang="scss" scoped>
.signup {
  margin: 105px 0;
  &__wrapper {
    text-align: center;
    h2 {
      line-height: $defaultLineHeight;
    }
    p {
      margin-top: 20px;
    }
    button {
      margin-top: 60px;
    }
  }
}
</style>
