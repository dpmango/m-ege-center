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
  padding: 30px 0 0px;
  &__subtitle {
    margin-top: 30px;
    max-width: 672px;
  }
}

.section {
  margin: 44px 0 48px;
  &__title {
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 24px;
  }
}
</style>
