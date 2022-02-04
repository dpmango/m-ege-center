<template>
  <section class="signup">
    <div class="container">
      <div class="signup__wrapper">
        <h2 class="h2-title">
          Набор на курсы <br />
          <span class="c-primary">до 30 декабря 2021 г.</span>
        </h2>
        <p class="c-gray">Количество мест ограничено. Успейте записаться!</p>
        <UiButton size="big" @click="() => setModal('signup')">Записаться на курсы</UiButton>
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
  margin: 70px 0;
  &__wrapper {
    text-align: center;
    h2 {
      line-height: $defaultLineHeight;
    }
    p {
      margin-top: 16px;
    }
    button {
      margin-top: 26px;
    }
  }
}
</style>
