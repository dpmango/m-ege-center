<template>
  <section class="atmo">
    <div class="container">
      <div class="atmo__head">
        <h2 class="h2-title">Тимбилдинг, друзья, атмосфера</h2>

        <p class="p-regular">
          Чтобы процесс обучения был эффективным, а учебная атмосфера — дружественной, ЕГЭ-Центр
          организует психологические тренинги, игровые тимбилдинги, встречи с интересными людьми,
          экскурсии, пикники, совместные обсуждения важных тем и многое другое.
        </p>
      </div>

      <swiper class="atmo__photos" :options="swiperOptions">
        <swiper-slide class="atmo__photo">
          <img src="/static/img/static/atmo-1.jpg" />
        </swiper-slide>
        <swiper-slide class="atmo__photo atmo__photo--primary">
          <img src="/static/img/static/atmo-2.jpg" />
        </swiper-slide>
        <swiper-slide class="atmo__photo">
          <img src="/static/img/static/atmo-3.jpg" />
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      swiperOptions: {
        slidesPerView: "auto",
        spaceBetween: 10,
      },
    }
  },
}
</script>

<style lang="scss" scoped>
.atmo {
  padding: 32px 0 40px;
  background: $colorBg;

  &__head {
    text-align: center;
    max-width: 255px;
    margin-left: auto;
    margin-right: auto;
    p {
      margin-top: 20px;
      max-width: 648px;
      margin-left: auto;
      margin-right: auto;
    }
  }

  &__photos {
    margin: 24px -16px 0;
    padding: 0 16px;
  }
  &__photo {
    position: relative;
    z-index: 1;
    flex: 0 0 195px;
    width: 195px;
    border-radius: 20px;
    overflow: hidden;
    font-size: 0;
    user-select: none;
    img {
      width: 100%;
    }
    &--primary {
      flex-basis: 266px;
      width: 266px;
    }
  }
}
</style>
