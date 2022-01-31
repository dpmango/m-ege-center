<template>
  <section class="exam" :class="className">
    <div class="container">
      <div class="exam__wrapper">
        <div class="exam__image">
          <img src="/static/img/static/textExam_decor.svg" alt="" />
        </div>

        <div class="exam__content">
          <h2 class="h2-title">
            Пройдите <span class="c-primary">пробный ЕГЭ</span> <br />в ЕГЭ-Центре
          </h2>

          <p class="p-regular">
            Каждый ученик ЕГЭ-Центра может пройти пробный ЕГЭ по любому предмету, полностью
            имитирующий настоящий ЕГЭ, и реально оценить свою готовность к экзамену.
          </p>
          <p class="p-regular">
            Также пробный ЕГЭ позволяет существенно снизить панику на настоящем ЕГЭ и в целом быть
            психологически более готовым.
          </p>

          <router-link to="course/1">
            <UiButton theme="accent" class="exam__cta">узнать подробнее</UiButton>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    className: String,
  },
}
</script>

<style lang="scss" scoped>
.exam {
  margin: 70px 0 40px 0;
  &.mt-0 {
    margin-top: 0px;
  }
  &__wrapper {
    align-items: center;
  }
  &__content {
    margin-top: 24px;
    h2 {
      line-height: 1.4;
    }
    p {
      margin-top: 16px;
      max-width: 460px;
      + p {
        margin-top: 22px;
      }
    }
  }
  &__cta {
    margin-top: 24px;
  }
  &__image {
    max-width: 170px;
    text-align: center;
    font-size: 0;
    img {
      max-width: 100%;
    }
  }
}
</style>
