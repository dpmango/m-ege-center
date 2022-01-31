<template>
  <div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "app",
  async created() {
    // await this.$store.dispatch("init", { token: this.token })
  },
}
</script>

<style lang="scss">
@import "@/assets/styles/index.scss";
</style>
