<template>
  <LayoutLanding>
    <HeroCourse />
    <StaticTopics />
    <StaticStudyPlan />
    <StaticSchedule
      label="Расписание занятий"
      title="Занятия в группах проходят <br/>в следующих интервалах:"
      :schedule="content.schedule"
    />
    <StaticFeatures :list="content.features" />
    <StaticReports />
    <StaticCabinet />
    <StaticOnline />
    <TestimonialFeatured :testimonial="content.featuredTestimonial" />
    <TeacherList :list="content.teachers" title="Наши преподаватели" />
    <StaticTrialExam />
    <TestimonialCarousel
      label="Отзывы"
      title='Что говорят о нас <br/><span class="c-light">5347 отзывов</span>'
      :list="[...content.testimonials, ...content.testimonials]"
    />
    <!-- <CtaSignup /> -->
    <Gallery :slides="content.gallery" />
    <ContactLocations />
    <CtaSignup />
  </LayoutLanding>
</template>

<script>
import content from "./JSON_data/courses"

export default {
  name: "Course",
  data() {
    return {
      content,
    }
  },
}
</script>
