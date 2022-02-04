<template>
  <section class="courses">
    <div class="container">
      <h2 class="h2-title">Программы</h2>

      <div class="courses__grid">
        <CourseCard
          v-for="(course, idx) in list"
          :key="idx"
          :title="course.title"
          :price="course.price"
          :description="course.description"
          :iconName="course.iconName"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {}
  },
  props: {
    list: Array,
    title: String,
  },
}
</script>

<style lang="scss" scoped>
.courses {
  padding: 32px 0 44px;
  background: $colorBg;

  &__grid {
    margin-top: 18px;
    display: grid;
    grid-gap: 16px;
    grid-template-columns: 1fr;
  }
}
</style>
