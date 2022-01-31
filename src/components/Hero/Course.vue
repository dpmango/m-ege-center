<template>
  <section class="hero">
    <div class="container">
      <div class="hero__content">
        <div class="hero__content-wrapper">
          <h1 class="hero__title h1-title">
            Курсы ЕГЭ <br />по <span class="c-primary">обществознанию</span> <br />для 11 класса
          </h1>

          <p class="hero__subtitle">90+ баллов набирает наш каждый <br />второй выпускник</p>
        </div>
      </div>

      <div class="hero__image">
        <div class="hero__image-scaler">
          <img
            src="/static/img/hero/hero_course.jpg"
            srcset="/static/img/hero/hero_course@2x.jpg 2x"
            alt="Hero image"
          />
          <div class="hero__image-caption">
            <h5 class="h5-title">Тюрин Дмитрий Александрович</h5>
            <p>
              Преподаватель обществознания.
              <br />
              Автор методических разработок в области преподавания. Магистр социально-
              экономического образования
            </p>
          </div>
        </div>
      </div>

      <div class="hero__actions">
        <UiButton size="big" @click="() => setModal('signup')">Записаться на курсы</UiButton>
      </div>
    </div>
  </section>
</template>

<script>
import { mapMutations } from "vuex"

export default {
  data() {
    return {
      publicPath: process.env.BASE_URL,
    }
  },
  methods: {
    ...mapMutations("ui", ["setModal"]),
  },
}
</script>

<style lang="scss" scoped>
.hero {
  display: block;
  position: relative;
  overflow: hidden;
  background: $colorBg;
  padding-bottom: 35px;
  &__content {
    padding: 24px 60px 30px 0px;
  }
  // &__content-wrapper {
  //   max-width: 520px;
  // }

  &__subtitle {
    margin-top: 22px;
    font-size: 11px;
    color: $colorGray;
  }

  &__image {
    display: flex;
    flex-direction: column;
    background: $colorBg;
    padding-bottom: 56px;
    margin-left: -16px;
    margin-right: -16px;
  }
  &__image-scaler {
    flex: 1 0 auto;
    height: 256px;
    position: relative;
    img,
    picture {
      position: absolute;
      z-index: 1;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center center;
    }
  }
  &__image-caption {
    position: absolute;
    z-index: 2;
    bottom: -62px;
    left: 16px;
    padding: 15px 17px 17px 17px;
    max-width: 235px;
    background: #ffffff;
    box-shadow: 1px 31px 50px -17px rgba(67, 70, 213, 0.1);
    border-radius: 10px;
    h5 {
      margin-bottom: 10px;
    }
    p {
      font-size: 10px;
      line-height: 1.35;
      color: $colorGray;
    }
  }

  &__actions {
    margin-top: 38px;
    display: flex;
    justify-content: center;
  }
}
</style>
