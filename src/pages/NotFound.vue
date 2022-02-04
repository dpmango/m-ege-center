<template>
  <LayoutLanding>
    <div class="notFound">
      <div class="container">
        <div class="notFound__decor">404</div>

        <h1 class="notFound__description">Страницы с таким адресом не существует!</h1>
      </div>
    </div>
  </LayoutLanding>
</template>

<style lang="scss" scoped>
.notFound {
  position: relative;
  text-align: center;
  margin: 70px 0 85px;
  &__decor {
    margin: 20px 0;
    font-size: 140px;
    font-size: 80px;
    line-height: 92px;
    color: $colorPrimary;
  }
  &__description {
    margin: 16px auto;
    max-width: 225px;
    font-weight: normal;
    font-size: 20px;
    line-height: 23px;
    color: #000000;
  }
}
</style>
