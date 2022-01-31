<template>
  <section class="stages" :class="className">
    <div class="container">
      <h2 class="stages__title h2-title tac">Этапы и экзамены</h2>

      <div class="stages__grid">
        <div class="stage">
          <div class="stage__head">
            <div class="stage__num"><span>1.</span></div>
            <div class="stage__title h4-title">Подача документов</div>
          </div>

          <p class="stage__description p-regular">
            Для заключения договора необходимо предоставить: паспорт представителя и учащегося,
            свидетельство о рождении, аттестат за 9 класс, личную карту, медицинский страховой полис
            и СНИЛС учащегося.
          </p>
        </div>
        <!--step-->
        <div class="stage">
          <div class="stage__head">
            <div class="stage__num"><span>2.</span></div>
            <div class="stage__title h4-title">Подготовка</div>
          </div>

          <p class="stage__description p-regular">
            Занятия проходят в малочисленных группах. У каждого ученика — индивидуальная программа
            подготовки к ЕГЭ. Обучение проходит в дневное время. Длительность одного занятия — 125
            минут.
          </p>
        </div>
        <!--step-->
        <div class="stage">
          <div class="stage__head">
            <div class="stage__num"><span>3.</span></div>
            <div class="stage__title h4-title">Декабрьское сочинение</div>
          </div>

          <p class="stage__description p-regular">
            Программа по русскому языку включает в себя подготовку к декабрьскому сочинению, которое
            является допуском к государственной итоговой аттестации.
          </p>
        </div>

        <!--step-->
        <div class="stage">
          <div class="stage__head">
            <div class="stage__num"><span>4.</span></div>
            <div class="stage__title h4-title">Аттестация</div>
          </div>

          <p class="stage__description p-regular">
            По непрофильным предметам учащиеся сдают промежуточную аттестацию во второй половине
            учебного года.
          </p>
        </div>
        <!--step-->
        <div class="stage">
          <div class="stage__head">
            <div class="stage__num"><span>5.</span></div>
            <div class="stage__title h4-title">Сдача ЕГЭ</div>
          </div>

          <p class="stage__description p-regular">
            ЕГЭ по математике и русскому языку являются обязательными. Оба предмета необходимы для
            получения аттестата. При поступлении в вуз выпускник дополнительно предъявляет
            результаты ЕГЭ по одному или двум предметам на выбор.
          </p>
        </div>
        <!--step-->
        <div class="stage">
          <div class="stage__head">
            <div class="stage__num"><span>6.</span></div>
            <div class="stage__title h4-title">Государственный аттестат</div>
          </div>

          <p class="stage__description p-regular">
            После сдачи обязательных экзаменов учащиеся школы-экстерната получают аттестат
            государственного образца о среднем (полном) общем образовании при аккредитованной
            средней школе.
          </p>
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
.stages {
  margin: 98px 0 109px 0;

  &__grid {
    margin-top: 108px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 102px 20px;
  }
}

.stage {
  &__head {
    display: flex;
    align-items: center;
  }
  &__num {
    margin-right: 20px;
    min-width: 50px;
    min-height: 52px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: #f6f6fc;
    border-radius: 15px;
    font-weight: bold;
    font-size: 30px;
    color: $colorPrimary;
  }
  &__title {
    font-weight: bold;
  }
  &__description {
    line-height: 1.6;
    margin-top: 26px;
    max-width: 305px;
  }
}
</style>
