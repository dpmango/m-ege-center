<template>
  <section class="cabinet">
    <div class="container">
      <div class="cabinet__wrapper">
        <div class="cabinet__content">
          <h2 class="h2-title">Личный кабинет родителя</h2>
          <p class="p-regular">
            Расписание на весь год, список пройденных тем и будущих занятий, отчеты, статистика
            посещений и пропусков занятий доступны родителям через личный кабинет.
          </p>
        </div>

        <div class="cabinet__image">
          <img
            src="/static/img/static/cabinet.png"
            srcset="/static/img/static/cabinet@2x.png 2x"
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
.cabinet {
  margin: 70px 0;
  &__wrapper {
    align-items: center;
  }
  &__content {
    padding: 50px 0 20px;
    p {
      margin-top: 26px;
      max-width: 460px;
    }
    h3 {
      margin-top: 60px;
    }
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
