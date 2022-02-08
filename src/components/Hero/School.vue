<template>
  <section class="hero">
    <div class="container">
      <div class="hero__content">
        <div class="hero__content-wrapper">
          <h1 class="hero__title h1-title">ЕГЭ-Центр: <br />школа-экстернат</h1>

          <p class="hero__subtitle">
            Усиленная подготовка к ЕГЭ по <span class="c-primary">выбранным предметам</span> с
            получением государственного аттестата
          </p>
        </div>
      </div>

      <div class="hero__image">
        <div class="hero__image-scaler">
          <img
            src="/static/img/hero/hero_school.jpg"
            srcset="/static/img/hero/hero_school@2x.jpg 2x"
            alt="Hero image"
          />
          <div class="hero__image-caption">
            <h5 class="h5-title">Лалаян Меланья Эдуардовна</h5>
            <p>
              Преподаватель по русскому языку. <br />Классный руководитель частной школы ЕГЭ-Центра.
              Лауреат премии "Лучший учитель года"
            </p>
          </div>
        </div>
      </div>

      <div class="hero__actions">
        <UiButton size="big" @click="() => setModal('signup')">Записаться на курсы</UiButton>
      </div>

      <div class="hero__start">Запись в школу до <span>22 ноября 2021 г.</span></div>
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
  display: flex;
  position: relative;
  overflow: hidden;
  background: $colorBg;
  padding-bottom: 25px;
  &__content {
    padding: 24px 60px 30px 0px;
  }

  &__subtitle {
    margin-top: 15px;
    font-size: 11px;
    color: $colorGray;
  }

  &__start {
    margin-top: 24px;
    text-align: center;
    color: $colorGray;
    font-size: 11px;
    span {
      font-weight: 500;
      color: $fontColor;
    }
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
    position: relative;
    img,
    picture {
      width: 100%;
    }
  }
  &__image-caption {
    position: absolute;
    z-index: 2;
    bottom: -72px;
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
    margin-top: 58px;
    display: flex;
    justify-content: center;
  }
}
</style>
