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

      <div class="atmo__photos">
        <div class="atmo__photo">
          <img src="/static/img/static/atmo-1.jpg" />
        </div>
        <div class="atmo__photo atmo__photo--primary">
          <img src="/static/img/static/atmo-2.jpg" />
        </div>
        <div class="atmo__photo">
          <img src="/static/img/static/atmo-3.jpg" />
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
.atmo {
  padding: 94px 0 98px;
  background: $colorBg;

  &__head {
    text-align: center;
    p {
      margin-top: 48px;
      max-width: 648px;
      margin-left: auto;
      margin-right: auto;
    }
  }

  &__photos {
    margin: 115px auto 0;
    max-width: 934px;
    display: grid;
    align-items: center;
    grid-template-columns: repeat(3, auto);
    grid-gap: 26px;
  }
  &__photo {
    position: relative;
    z-index: 1;
    border-radius: 20px;
    overflow: hidden;
    font-size: 0;
    user-select: none;
    &--primary {
      box-shadow: -13px 0px 60px rgba(110, 112, 201, 0.15);
    }
    img {
      max-width: 100%;
    }
  }
}
</style>
