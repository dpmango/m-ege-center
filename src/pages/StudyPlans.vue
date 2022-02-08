<template>
  <LayoutLanding>
    <div class="course">
      <div class="container">
        <h1 class="h2-title">Учебные планы</h1>

        <div class="section" v-for="(section, idx) in content.sections" :key="section.id || idx">
          <h2 class="section__title">{{ section.title }}</h2>
          <ul class="section__list">
            <li v-for="(link, idx) in section.links" :key="idx">
              <a :href="link.href" target="_blank">{{ link.label }} <SvgIcon name="caret" /></a>
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
  padding-top: 32px;
  margin-bottom: 70px;
}

.section {
  margin: 32px 0 58px;
  &__title {
    font-weight: bold;
    font-size: 16px;
  }
  &__list {
    list-style: none;
    margin: 18px -16px;
    padding: 0;
    li {
      display: block;
      &:last-child a {
        border-bottom: 1px solid #d1d1d1;
      }
    }
    a {
      display: flex;
      align-items: center;
      border-top: 1px solid #d1d1d1;
      padding: 11px 16px 12px;
      transition: color 0.25s $ease;

      .svg-icon {
        flex: 0 0 auto;
        margin-left: auto;
        font-size: 6px;
        color: #757575;
        will-change: transform;
        transform: rotate(-90deg);
        backface-visibility: hidden;
        transition: color 0.25s $ease, transform 0.25s $ease;
      }

      &:hover {
        color: $colorPrimary;
        .svg-icon {
          color: $colorPrimary;
        }
      }
    }
  }
}
</style>
