<template>
  <div class="course">
    <div class="course__head">
      <div class="course__image">
        <img
          v-if="iconName"
          :src="`/static/img/courseIcons/${iconName}.png`"
          :srcset="`/static/img/courseIcons/${iconName}@2x.png 2x`"
          :alt="title"
        />
      </div>
      <div class="course__head-content">
        <div class="course__title">{{ title }}</div>
        <div class="course__price" v-if="price" v-html="price"></div>
      </div>
    </div>

    <div class="course__description p-regular" v-if="description">{{ description }}</div>

    <router-link to="#" class="iconed-link">
      Узнать подробнее <SvgIcon name="arrow-right"
    /></router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  props: {
    title: String,
    price: String,
    description: String,
    iconName: String,
  },
}
</script>

<style lang="scss" scoped>
.course {
  padding: 44px 44px 56px;
  background: white;
  box-shadow: 0px 0px 30px rgba(110, 112, 201, 0.1);
  border-radius: 30px;

  &__head {
    display: flex;
    align-items: center;
  }

  &__head-content {
    padding-left: 20px;
  }

  &__image {
    flex: 0 0 auto;
    width: 52px;
    font-size: 0;
    img {
      max-width: 100%;
    }
  }

  &__title {
    font-weight: bold;
    font-size: 24px;
  }

  &__price {
    font-weight: 500;
    margin-top: 8px;
    color: $colorGray;
  }

  &__description {
    margin-top: 26px;
  }
}

.iconed-link {
  margin-top: 28px;
  position: relative;
  display: inline-flex;
  align-items: center;
  font-weight: bold;
  text-decoration: underline;
  transition: color 0.25s $ease;
  .svg-icon {
    margin-left: 15px;
    font-size: 11px;
  }
  &:hover {
    color: $colorPrimary;
  }
}
</style>
