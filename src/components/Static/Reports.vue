<template>
  <section class="reports">
    <div class="container">
      <div class="reports__wrapper">
        <div class="reports__content">
          <h2 class="h2-title">Отчеты преподавателей</h2>
          <p class="p-regular">
            Каждые 6–8 занятий преподавателями заполняются отчеты об успеваемости ученика по 5
            характеристикам и отправляются прямо на email родителей.
          </p>
          <p class="p-regular">
            Подобные отчеты дают предельное понимание о состоянии и динамике обучения.
          </p>

          <h3 class="h3-title">СМС-оповещение</h3>
          <p class="p-regular">
            При важном событии, отсутствии ученика на занятии и даже при его опоздании родителям
            отправляются СМС-оповещения.
          </p>
        </div>

        <div class="reports__image">
          <img
            src="/static/img/static/reports.png"
            srcset="/static/img/static/reports@2x.png 2x"
            alt=""
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
.reports {
  margin: 32px 0 32px 0;

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
    max-width: 320px;
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
