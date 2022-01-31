<template>
  <LayoutLanding>
    <div class="docs">
      <div class="container">
        <h1 class="h2-title">Сведения об образовательной организации</h1>

        <div class="section" v-for="(section, idx) in content.sections" :key="section.id || idx">
          <h2 class="section__title">{{ section.title }}</h2>
          <div class="doc" v-for="(doc, idx) in section.docs" :key="idx">
            <div class="doc__label" v-html="doc.label" />
            <div v-if="doc.meta" class="doc__meta">{{ doc.meta }}</div>
            <a v-if="doc.link" :href="doc.link" class="doc__link">cкачать</a>
          </div>
        </div>
      </div>
    </div>
  </LayoutLanding>
</template>

<script>
import content from "./JSON_data/docs"

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
.docs {
  margin-top: 44px;
  margin-bottom: 105px;
}

.section {
  margin: 44px 0 60px;
  &__title {
    font-weight: bold;
    font-size: 30px;
    margin-bottom: 24px;
  }
}

.doc {
  display: flex;
  border: 1px solid #e0e0e0;
  padding: 16px 24px;
  margin-top: -1px;
  font-size: 20px;
  &__label,
  &__meta,
  &__link {
    flex: 0 0 auto;
    width: 100%;
  }
  &__label {
    max-width: 70%;
    padding-right: 30px;
  }
  &__meta {
    max-width: 15%;
    padding-right: 10px;
  }
  &__link {
    display: inline-block;
    max-width: 15%;
    text-align: right;
    color: $colorPrimary;
    text-decoration: underline;
    transition: color 0.25s $ease;
    &:hover {
      text-decoration: none;
      color: $colorPrimaryHover;
    }
  }
}
</style>
