<template>
  <LayoutLanding>
    <div class="notFound">
      <div class="container">
        <h1 class="h1-title c-gray">Страница не найдена</h1>

        <div class="notFound__decor">404</div>

        <div class="notFound__action">
          <router-link to="/">
            <UiButton size="big">На главную</UiButton>
          </router-link>
        </div>
      </div>
    </div>
  </LayoutLanding>
</template>

<style lang="scss" scoped>
.notFound {
  position: relative;
  text-align: center;
  margin: 105px 0;
  &__decor {
    margin: 20px 0;
    font-size: 140px;
    font-family: $groteskFont;
    font-weight: 800;
    line-height: $defaultLineHeight;
    color: $colorLight;
  }
  &__action {
    margin-top: 4px;
    display: flex;
    justify-content: center;
  }
}
</style>
