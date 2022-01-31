<template>
  <div class="teacher">
    <div class="teacher__avatar">
      <img v-if="avatar" :src="avatar" :alt="name" />
    </div>
    <h4 class="teacher__name h4-title" v-html="name" />
    <div class="teacher__description p-regular" v-if="description">{{ description }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  props: {
    avatar: String,
    name: String,
    description: String,
  },
}
</script>

<style lang="scss" scoped>
.teacher {
  padding: 0 0px;

  &__name {
    margin-top: 6px;
    line-height: 1.4;
  }
  &__description {
    margin-top: 6px;
    font-size: 10px;
    line-height: 1.6;
  }
  &__avatar {
    position: relative;
    z-index: 1;
    font-size: 0;
    width: 110px;
    height: 110px;
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
}
</style>
