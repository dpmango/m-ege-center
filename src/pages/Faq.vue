<template>
  <LayoutLanding>
    <div class="faq">
      <div class="container">
        <h1 class="h2-title">Часто задаваемые вопросы</h1>

        <div class="section" v-for="(section, idx) in content.sections" :key="section.id || idx">
          <h2 class="section__title">{{ section.title }}</h2>
          <FaqList :list="section.questions" />
        </div>
      </div>
    </div>
  </LayoutLanding>
</template>

<script>
import content from "./JSON_data/faq"

export default {
  name: "Faq",
  data() {
    return {
      content,
    }
  },
}
</script>

<style lang="scss" scoped>
.faq {
  padding-top: 30px;
  margin-bottom: 45px;
}

.section {
  margin: 16px 0 48px;
  &__title {
    font-weight: bold;
    font-size: 16px;
    margin-bottom: 24px;
  }
}
</style>
