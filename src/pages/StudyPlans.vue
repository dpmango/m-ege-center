<template>
  <LayoutLanding>
    <div class="course">
      <div class="container">
        <h1 class="h2-title">Учебные планы</h1>

        <div class="section" v-for="(section, idx) in content.sections" :key="section.id || idx">
          <h2 class="section__title">{{ section.title }}</h2>
          <ul class="section__list">
            <li v-for="(link, idx) in section.links" :key="idx">
              <a :href="link.href" target="_blank">{{ link.label }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </LayoutLanding>
</template>

<script>
import content from "./JSON_data/studyplans"

export default {
  name: "StudyPlans",
  data() {
    return {
      content,
    }
  },
}
</script>

<style lang="scss" scoped>
.course {
  margin-top: 44px;
  margin-bottom: 105px;
}

.section {
  margin: 42px 0 52px;
  &__title {
    font-weight: bold;
    font-size: 30px;
  }
  &__list {
    list-style: none;
    margin: 18px 0;
    padding: 0;
    li {
      display: block;
      margin-bottom: 2px;
    }
    a {
      color: $colorPrimary;
      text-decoration: underline;
      transition: color 0.25s $ease;
      &:hover {
        text-decoration: none;
        color: $fontColor;
      }
    }
  }
}
</style>
