<template>
  <div class="page">
    <div class="page__content">
      <Header />
      <slot />
      <Footer />
      <ModalSignup />
    </div>
    <div class="vp-toggler" @click="viewportToggler">Viewport</div>
  </div>
</template>

<script>
import Header from "./Header"
import Footer from "./Footer"

export default {
  components: { Header, Footer },
  methods: {
    viewportToggler() {
      const viewport = document.head.querySelector('[name="viewport"]')

      if (viewport.getAttribute("content") === "width=320") {
        viewport.setAttribute("content", "width=device-width")
      } else {
        viewport.setAttribute("content", "width=320")
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.page {
  display: flex;
  flex-direction: column;
  &__content {
    flex: 1 0 auto;
    padding-top: 58px;
  }
}

.vp-toggler {
  position: fixed;
  z-index: 99;
  bottom: 10px;
  right: 10px;
  background: $fontColor;
  color: white;
  font-size: 12px;
  padding: 4px 8px;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.25s $ease;
  &:hover {
    background: $colorPrimary;
  }
}
</style>
