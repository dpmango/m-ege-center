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
  padding: 80px 0 95px;
  background: $colorBg;

  &__grid {
    margin-top: 56px;
    display: grid;
    grid-gap: 20px;
    grid-template-columns: 1fr 1fr;
  }
}
</style>
