<template>
  <div class="faqList" :class="className">
    <FaqCard v-for="(card, idx) in list" :key="idx" :label="card.label" :content="card.content" />
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  props: {
    list: Array,
    className: String,
  },
}
</script>

<style lang="scss" scoped>
.faqList {
  position: relative;
}
</style>
