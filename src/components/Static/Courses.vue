<template>
  <section class="courses" :class="className">
    <div class="container">
      <h2 class="courses__title h2-title">Программы</h2>

      <div class="courses__grid">
        <div class="course">
          <div class="course__title">10-11 класс за 1 год</div>
          <p class="course__description p-regular">
            Ускоренная программа - экстернат. Подходит для учеников, которые хотят окончить школу
            быстрее, но при этом готовы заниматься в интенсивном темпе. Высокие результаты напрямую
            зависят от мотивации учащегося.
          </p>
        </div>
        <div class="course">
          <div class="course__title">10-11 класс за 2 года</div>
          <p class="course__description p-regular">
            Стандартная программа, в которой обучение сконцентрировано только на профильных
            предметах. Характеризуется глубокой и пошаговой проработкой тем. Подходит ученикам,
            нацеленным на высокий результат ЕГЭ.
          </p>
        </div>
        <div class="course">
          <div class="course__title">11 класс за 1 год</div>
          <p class="course__description p-regular">
            Годовая программа. Подходит для старшеклассников, которые хотят уменьшить общую школьную
            нагрузку и сосредоточиться на подготовке к ЕГЭ, не прибегая дополнительно к помощи
            репетиторов и курсов.
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
.courses {
  margin: 32px 0 40px 0;

  &__grid {
    margin-top: 24px;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 12px;
  }
}

.course {
  padding: 20px 30px 22px 30px;
  border: 1.5px solid #cbcbcb;
  border-radius: 20px;
  &__title {
    font-weight: bold;
    font-size: 20px;
    color: $colorPrimary;
  }
  &__description {
    margin-top: 14px;
  }
}
</style>
