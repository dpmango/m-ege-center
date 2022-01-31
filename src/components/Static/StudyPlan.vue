<template>
  <section class="plan">
    <div class="container">
      <div class="plan__image"><img src="/static/img/static/studyPlan_decor.svg" alt="" /></div>

      <div class="plan__content">
        <p class="plan__label">Учебный план</p>
        <h2 class="h2-title">5 тематических модулей обществоведческого курса:</h2>
        <ul class="ul">
          <li>Человек и общество</li>
          <li>Познание и духовная культура</li>
          <li>Экономика</li>
          <li>Социальные отношения</li>
          <li>Политика и право</li>
        </ul>
        <p class="p-regular">
          Параллельно с изучением теретического материала, учащиеся закрепляют полученные знания,
          практикуясь на решении типовых тестовых заданий, аналогичным заданиям, содержащихся в
          контрольно-измерительных материалах ЕГЭ, и написанием эссе.
        </p>

        <div class="plan__stats">
          <div class="plan__stat">
            <span class="plan__stat-value">8</span>
            <span class="plan__stat-label">Учебных <br />месяцев</span>
          </div>
          <div class="plan__stat">
            <span class="plan__stat-value">1</span>
            <span class="plan__stat-label">Занятие <br />в неделю</span>
          </div>
          <div class="plan__stat">
            <span class="plan__stat-value">125</span>
            <span class="plan__stat-label">Минут <br />длится урок</span>
          </div>
        </div>

        <router-link to="course/1">
          <UiButton theme="accent">подробная программа курса</UiButton>
        </router-link>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.plan {
  padding: 35px 0 35px 0;
  &__wrapper {
    align-items: center;
  }
  &__content {
    margin-top: 28px;
    h2 {
      margin-top: 6px;
      line-height: 1.4;
    }
    ul {
      margin-top: 17px;
      margin-bottom: 19px;
      color: $colorGray;
    }
    p {
      max-width: 262px;
      line-height: 1.6;
    }
  }
  &__label {
    font-weight: 500;
    color: $colorGreen;
  }

  &__image {
    text-align: left;
    max-width: 127px;
    img {
      max-width: 100%;
    }
  }

  &__stats {
    margin-top: 20px;
    margin-bottom: 8px;
    display: flex;
    flex-wrap: wrap;
  }
  &__stat {
    flex: 0 0 auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-right: 44px;
    margin-bottom: 20px;
    &:last-child {
      margin-right: 0;
    }
  }
  &__stat-value {
    margin-right: 16px;
    font-family: "HK Grotesk";
    font-style: normal;
    font-weight: bold;
    font-size: 40px;
    line-height: 1.3;
    color: $colorPrimary;
  }
  &__stat-label {
    color: $colorGray;
  }
}
</style>
