<template>
  <section class="ft" :class="className">
    <div class="container">
      <div class="ft__avatar" v-if="testimonial.author.avatar">
        <img :src="testimonial.author.avatar" :alt="testimonial.author.name" />
      </div>

      <div class="ft__name" v-if="testimonial.author.name">{{ testimonial.author.name }}</div>
      <div class="ft__position" v-if="testimonial.author.position">
        {{ testimonial.author.position }}
      </div>

      <div class="ft__stars" v-if="testimonial.rating">
        <UiStars :rating="testimonial.rating" size="big" />
      </div>

      <div class="ft__body">
        <h3 class="h3-title" v-html="testimonial.title" />
        <div class="p-regular" v-html="testimonial.content" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    testimonial: Object,
    className: String,
  },
}
</script>

<style lang="scss" scoped>
.ft {
  background: $colorBg;
  padding: 36px 0 32px;
  text-align: center;
  &.bg-white {
    background: white;
  }
  &__avatar {
    position: relative;
    z-index: 1;
    width: 110px;
    height: 110px;
    margin: 0px auto;
    overflow: hidden;
    border-radius: 50%;
    user-select: none;
    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  &__name {
    margin-top: 32px;
    font-size: 12px;
    font-weight: 500;
  }
  &__position {
    font-size: 10px;
    color: $colorLight;
  }
  &__stars {
    margin-top: 12px;
    display: flex;
    justify-content: center;
  }

  &__body {
    margin-top: 32px;
    max-width: 320px;
    margin-left: auto;
    margin-right: auto;
    p,
    .p-regular {
      font-size: 12px;
      margin-top: 20px;
      line-height: 1.6;
      color: $colorLight;
    }
  }
}
</style>
