<template>
  <LayoutLanding>
    <div class="docs">
      <div class="container">
        <h1 class="h2-title">Сведения об образовательной организации</h1>

        <div class="section" v-for="(section, idx) in content.sections" :key="section.id || idx">
          <h2 class="section__title">{{ section.title }}</h2>
          <div class="doc" v-for="(doc, idx) in section.docs" :key="idx">
            <div class="doc__label" v-html="doc.label" />

            <div v-if="doc.meta" class="doc__meta">
              <a v-if="doc.link" :href="doc.link" class="doc__link">cкачать PDF</a> {{ doc.meta }}
            </div>
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
  margin-top: 32px;
  margin-bottom: 64px;
  .h2-title {
    line-height: 1.2;
  }
}

.section {
  margin: 22px 0 42px;
  &__title {
    font-weight: bold;
    font-size: 16px;
    margin-bottom: 20px;
  }
}

.doc {
  font-size: 11px;
  margin-bottom: 24px;
  &:last-child {
    margin-bottom: 0;
  }
  &__meta {
    margin-top: 4px;
  }
  &__link {
    display: inline-block;
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
