<template>
  <section class="online" :class="className">
    <div class="container">
      <div class="online__wrapper">
        <div class="online__content">
          <h2 class="h2-title">
            Переходим в <span class="c-primary">онлайн</span>, если потребуется, и обратно
          </h2>
          <p class="p-regular">
            ЕГЭ-Центр имеет необходимое техническое оснащение для перехода в онлайн в случае запрета
            на посещение образовательных учреждений в очном режиме.
          </p>
          <p class="p-regular">
            Занятия проводятся через программу Zoom. Ученики видят и слышат преподавателя, могут
            задавать ему вопросы, дискутировать. Количество учеников в группе и расписание не
            меняется.
          </p>
        </div>
      </div>
      <div class="online__image">
        <img src="/static/img/static/online.svg" alt="" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {}
  },
  props: {
    className: String,
  },
}
</script>

<style lang="scss" scoped>
.online {
  margin: 70px 0 70px;
  &.mt-20 {
    margin-top: 20px;
  }
  &.mb-150 {
    margin-bottom: 170px;
  }
  &__wrapper {
    align-items: center;
  }
  &__content {
    padding: 0px 0 36px;
    p {
      margin-top: 16px;
      max-width: 320px;
    }
    h3 {
      margin-top: 26px;
    }
  }
  &__image {
    max-width: 170px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    font-size: 0;
    img {
      max-width: 100%;
    }
  }
}
</style>
