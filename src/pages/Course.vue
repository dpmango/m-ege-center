<template>
  <LayoutLanding>
    <div class="course">
      <div class="container">
        <h1 class="h2-title">Программа подготовки к ЕГЭ по математике для 11 класса</h1>
        <div class="course__description">
          Запись на курсы до 22 января 2022 г. <br />
          Продолжительность курса: с 20 декабря 2021 г. по 25 мая 2022 г.<br />
          Срок обучения: 5 месяцев / 20 занятия / 60 ак. часов (1 ак. час = 45 минут)<br />
          Программа утверждена: 20 апреля 2021 года директором "ЕГЭ-Центра" Эрдманом К.А.
        </div>

        <div class="section" v-for="(section, idx) in content.sections" :key="section.id || idx">
          <h2 class="section__title">{{ section.title }}</h2>
          <FaqList :list="section.program" />
        </div>
      </div>
    </div>
  </LayoutLanding>
</template>

<script>
import content from "./JSON_data/course"

export default {
  name: "Course",
  data() {
    return {
      content,
    }
  },
}
</script>

<style lang="scss" scoped>
.course {
  margin-top: 16px;
  margin-bottom: 70px;
  .h2-title {
    line-height: 1.2;
  }
  &__description {
    margin-top: 16px;
    font-size: 11px;
    line-height: 1.6;
  }
}

.section {
  margin: 30px 0 44px;
  &__title {
    font-weight: bold;
    font-size: 16px;
    margin-bottom: 16px;
  }
}
</style>
