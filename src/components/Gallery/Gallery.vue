<template>
  <section class="gallery">
    <div class="container">
      <swiper class="gallery__slider" :options="swiperOptions">
        <swiper-slide v-for="(slide, idx) in slides" class="gallery__slide" :key="idx">
          <div class="gallery__image">
            <img :src="slide.image.src" :alt="slide.image.alt" />
          </div>
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
        spaceBetween: 14,
        freeMode: true,
      },
    }
  },
  props: {
    slides: Array,
  },
  computed: {},
}
</script>

<style lang="scss" scoped>
.gallery {
  position: relative;
  overflow: hidden;
  padding: 64px 0 64px;
  user-select: none;
  &__slider {
    padding: 0px;
    overflow: visible;
    padding-bottom: 0px;
  }
  &__slide {
    flex: 0 0 240px;
    width: 240px;
    min-width: 1px;
  }
  &__image {
    position: relative;
    z-index: 1;
    font-size: 0;
    border-radius: 10px;
    overflow: hidden;
    img,
    picture {
      max-width: 100%;
    }
  }
}
</style>
