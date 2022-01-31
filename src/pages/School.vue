<template>
  <LayoutLanding>
    <HeroSchool />
    <StaticCourses />
    <StaticVideo />
    <StaticSubjects />
    <StaticSchedule
      title="Расписание занятий"
      subtitle="Расписание ученика зависит от выбранных предметов и учебной нагрузки, но в любом случае частично или полностью соответствует следующему графику:"
      :schedule="content.schedule"
    />
    <StaticFeatures :list="content.features" />
    <StaticReports />
    <StaticCabinet />
    <StaticAtmosphere />
    <StaticOnline className="mt-20 mb-150" />
    <TeacherList
      :list="content.teachers"
      title="Преподаватели экстерната"
      subtitle="Сильнейшая команда преподавателей ЕГЭ-Центра, которая ежедневно работает на результат учеников"
    />
    <TestimonialFeatured :testimonial="content.featuredTestimonial" />
    <StaticStages />
    <TestimonialCarousel
      label="Отзывы"
      title='Что говорят о нас <span class="c-light">5347 отзывов</span>'
      :list="[...content.testimonials, ...content.testimonials]"
    />
    <StaticDocuments />
    <ContactSchool />
    <CtaSignupSchool />
    <StaticInstagram />
  </LayoutLanding>
</template>

<script>
import content from "./JSON_data/school"

export default {
  name: "School",
  data() {
    return {
      content,
    }
  },
}
</script>
