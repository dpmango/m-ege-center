<template>
  <section class="hero">
    <div class="hero__content">
      <div class="hero__content-wrapper">
        <h1 class="hero__title h1-title">ЕГЭ-Центр: <br />школа-экстернат</h1>

        <p class="hero__subtitle">
          Усиленная подготовка к ЕГЭ по <span class="c-primary">выбранным предметам</span> <br />с
          получением государственного аттестата
        </p>

        <div class="hero__actions">
          <UiButton size="big">Записаться на консультацию</UiButton>
        </div>

        <div class="hero__start">
          <div class="hero__start-icon">
            <SvgIcon name="checkmark" />
          </div>
          <div class="hero__start-content">Запись на курсы до <span>22 ноября 2021 г.</span></div>
        </div>
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
  </section>
</template>

<script>
export default {
  data() {
    return {
      publicPath: process.env.BASE_URL,
    }
  },
}
</script>

<style lang="scss" scoped>
.hero {
  display: flex;
  position: relative;
  overflow: hidden;
  background: $colorBg;
  &__content {
    flex: 0 0 50%;
    padding: 42px 60px 20px calc((100vw - 1240px) / 2 + 35px);
    height: 100%;
    min-height: 570px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  &__content-wrapper {
    max-width: 520px;
  }

  &__subtitle {
    margin-top: 18px;
    color: $colorGray;
  }

  &__actions {
    margin-top: 60px;
  }

  &__start {
    margin-top: 54px;
    display: flex;
    align-items: center;
  }
  &__start-icon {
    flex: 0 0 auto;
    margin-right: 10px;
    font-size: 0;
    color: #3eb24a;
    .svg-icon {
      font-size: 12px;
    }
  }

  &__start-content {
    color: $colorGray;
    font-size: 16px;
    span {
      font-weight: 500;
      font-size: 18px;
      color: $fontColor;
    }
  }

  &__image {
    flex: 0 0 50%;
    width: 50%;
    display: flex;
    flex-direction: column;
    background: $colorBg;
    padding-right: calc((100vw - 1240px) / 2 + 35px);
  }
  &__image-scaler {
    flex: 1 0 auto;
    max-width: 780px;
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
      object-position: 50% center;
    }
  }
  &__image-caption {
    position: absolute;
    z-index: 2;
    bottom: 70px;
    right: 20px;
    padding: 28px 32px 32px 40px;
    max-width: 360px;
    background: #ffffff;
    box-shadow: 1px 31px 50px -17px rgba(67, 70, 213, 0.1);
    border-radius: 30px;
    h5 {
      margin-bottom: 20px;
    }
    p {
      font-size: 14px;
      color: $colorGray;
    }
  }
}

@include r(1240) {
  .hero {
    &__content {
      padding-left: 35px;
    }
    &__image {
      padding-right: 35px;
    }
  }
}
</style>
