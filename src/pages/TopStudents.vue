<template>
  <LayoutLanding>
    <div class="students">
      <div class="container">
        <div class="students__head">
          <h1 class="h2-title">100 лучших учеников</h1>
          <p class="p-regular">
            Ученики сдавшие ЕГЭ и ОГЭ нга самые высокие былим среди многих тысяч ученикорв
            отучившихся за последние годы. Ученики сдавшие ЕГЭ и ОГЭ нга самые высокие былим среди
            многих тысяч ученикорв отучившихся за последние годы. Ученики сдавшие ЕГЭ и ОГЭ нга
            самые высокие былим среди многих тысяч ученикорв отучившихся за последние годы.
          </p>
        </div>
      </div>

      <div class="students__grid">
        <TestimonialCarousel
          title="9 класс"
          className="compact"
          :list="[...content.testimonials, ...content.testimonials]"
        />

        <TestimonialCarousel
          title="10 класс"
          className="compact"
          :list="[...content.testimonials, ...content.testimonials]"
        />

        <TestimonialCarousel
          title="11 класс"
          className="compact"
          :list="[...content.testimonials, ...content.testimonials]"
        />

        <TestimonialCarousel
          title="Школа-экстернат"
          className="compact"
          :list="[...content.testimonials, ...content.testimonials]"
        />
      </div>
    </div>
  </LayoutLanding>
</template>

<script>
// import chunk from "lodash/chunk"
import content from "./JSON_data/topstudents"

export default {
  name: "TopStudents",
  data() {
    return {
      content,
    }
  },
  computed: {
    // gridRows() {
    //   const cols = 3
    //   return chunk(this.content.testimonials, Math.floor(this.content.testimonials.length / cols))
    // },
  },
}
</script>

<style lang="scss" scoped>
.students {
  margin-top: 44px;
  &__head {
    p {
      margin-top: 44px;
      line-height: 1.5;
    }
  }
  &__grid {
    margin-top: 52px;
  }
}
</style>
