<template>
  <div class="testimonialCard">
    <div class="testimonialCard__head">
      <div class="testimonialCard__avatar">
        <img :src="data.author.avatar" :alt="data.author.name" />
      </div>
      <div class="testimonialCard__head-content">
        <span class="f-700">{{ data.author.name }}</span>
        <small v-if="data.author.position">{{ data.author.position }}</small>
      </div>
    </div>

    <div class="testimonialCard__rating" v-if="data.rating">
      <UiStars :rating="data.rating" />
    </div>

    <div class="testimonialCard__content" v-if="data.content">
      <p v-html="data.content" />
    </div>

    <div class="testimonialCard__subject" v-if="data.subject">
      {{ data.subject }}
    </div>
    <div class="testimonialCard__date" v-if="data.date">
      {{ data.date }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: Object,
  },
}
</script>

<style lang="scss" scoped>
.testimonialCard {
  background: #ffffff;
  box-shadow: 0px 0px 40px 6px rgba(110, 112, 175, 0.05);
  border-radius: 20px;
  padding: 28px 24px 26px;
  &__head {
    display: flex;
    align-items: center;
  }
  &__head-content {
    display: flex;
    flex-direction: column;
    padding-left: 14px;
    span {
      font-size: 9px;
    }
    small {
      font-size: 9px;
      color: $colorLight;
    }
  }
  &__avatar {
    flex: 0 0 auto;
    position: relative;
    z-index: 1;
    font-size: 0;
    width: 27px;
    height: 27px;
    border-radius: 50%;
    overflow: hidden;
    user-select: none;
    img,
    picture {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  &__rating {
    margin-top: 16px;
  }
  &__content {
    margin-top: 11px;
    p {
      font-size: 10px;
      line-height: 1.6;
      color: $colorGray;
    }
  }
  &__subject {
    margin-top: 8px;
    font-size: 10px;
    font-weight: 500;
    color: $colorPrimary;
  }
  &__date {
    margin-top: 8px;
    font-size: 10px;
    color: $colorLight;
  }
}
</style>
