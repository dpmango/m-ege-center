<template>
  <LayoutLanding>
    <div class="teachers">
      <div class="container">
        <h2 class="h2-title">Преподаватели ЕГЭ-Центра</h2>

        <div class="teachers__subtitle p-regular">
          В ЕГЭ-Центре преподают более 60 преподавателей по 10 основным школьным предметам. Среди
          преподавателей: эксперты ЕГЭ и ОГЭ, члены проверочных комиссий ЕГЭ, преподаватели
          московских вузов, школ, гимназий, лицеев.
        </div>

        <div class="section" v-for="(group, idx) in content.teachers" :key="idx">
          <div class="section__title">{{ group.title }}</div>
          <TeacherList :list="shuffleList(group.list)" className="m0" />
        </div>
      </div>
    </div>
  </LayoutLanding>
</template>

<script>
import shuffle from "lodash/shuffle"
import content from "./JSON_data/teachers"

export default {
  name: "Teachers",
  data() {
    return {
      content,
    }
  },
  methods: {
    shuffleList(list) {
      return shuffle(list)
    },
  },
}
</script>

<style lang="scss" scoped>
.teachers {
  margin: 44px 0 12px;
  &__subtitle {
    margin-top: 30px;
    max-width: 672px;
  }
}

.section {
  margin: 75px 0 90px;
  &__title {
    font-weight: bold;
    font-size: 35px;
    line-height: 40px;
    margin-bottom: 54px;
  }
  ::v-deep .teachers__grid {
    grid-gap: 72px 0;
    margin-top: 0;
  }
}
</style>
