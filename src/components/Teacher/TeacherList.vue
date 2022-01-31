<template>
  <section class="teachers" :class="className">
    <div class="container">
      <h2 class="h2-title">
        {{ title }} <span class="c-light" v-if="titleCount">{{ titleCount }}</span>
      </h2>

      <div v-if="subtitle" class="teachers__subtitle p-regular">{{ subtitle }}</div>

      <swiper class="teachers__slider" :options="swiperOptions">
        <swiper-slide v-for="(teacher, idx) in list" class="teachers__slide" :key="idx">
          <TeacherCard
            :avatar="teacher.avatar"
            :name="teacher.name"
            :description="teacher.description"
          />
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      swiperOptions: {
        slidesPerView: "auto",
        spaceBetween: 0,
      },
    }
  },
  props: {
    list: Array,
    title: String,
    titleCount: String || Number,
    subtitle: String,
    className: String,
  },
}
</script>

<style lang="scss" scoped>
.teachers {
  margin: 32px 0 40px;
  &.m0 {
    margin: 0;
    .teachers__grid {
      margin-top: 0;
    }
    .container {
      padding-left: 0;
      padding-right: 0;
    }
  }
  &__subtitle {
    margin-top: 56px;
    max-width: 480px;
  }
  &__slider {
    margin: 20px -16px;
    padding-left: 16px;
    padding-right: 16px;
  }
  &__slide {
    flex: 0 0 134px;
    padding-right: 24px;
  }
}
</style>
