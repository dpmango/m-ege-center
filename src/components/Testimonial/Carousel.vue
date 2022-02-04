<template>
  <section class="testimonials" :class="className">
    <div class="container">
      <div class="testimonials__head">
        <div>
          <div class="testimonials__label" v-if="label">{{ label }}</div>
          <h2 class="h2-title" v-if="title" v-html="title" />
        </div>
      </div>

      <swiper class="testimonials__slider" :options="swiperOptions">
        <swiper-slide v-for="(slide, idx) in list" class="testimonials__slide slide" :key="idx">
          <TestimonialCard :data="slide" />
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
    label: String,
    title: String,
    className: String,
  },

  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper
    },
  },
}
</script>

<style lang="scss" scoped>
.testimonials {
  position: relative;
  overflow: hidden;
  background: $colorBg;
  padding: 32px 0 36px;
  &.compact {
    padding: 16px 0 8px 0px;
    .testimonials__head {
      align-items: center;
    }
  }
  &__label {
    font-weight: 500;
    color: $colorGreen;
  }
  &__slider {
    margin-top: 30px;
    overflow: visible;
  }
  &__slide {
    flex: 0 0 250px;
    width: 250px;
    padding-right: 12px;
    min-width: 1px;
  }
  &__head {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    h2 {
      margin-top: 8px;
    }
  }
}
</style>
