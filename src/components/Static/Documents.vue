<template>
  <section class="documents" :class="className">
    <div class="container">
      <h2 class="h2-title">Необходимые документы</h2>

      <ul class="documents__list">
        <li>Копия паспорта представителя</li>
        <li>Копия паспорта учащегося</li>
        <li>Копия свидетельства о рождении учащегося</li>
        <li>Аттестат об основном общем образовании (9 класс)</li>
        <li>
          Личное дело обучающегося (заверенное печатью образовательного учреждения, в котором он
          обучался ранее)
        </li>
        <li>Копия медицинского страхового полиса учащегося</li>
        <li>Копия СНИЛС учащегося</li>
        <li>
          Выписка из домовой книги, подтверждающая регистрацию обучающегося по месту жительства
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    className: String,
  },
}
</script>

<style lang="scss" scoped>
.documents {
  padding: 96px 0 118px 0;

  &__list {
    margin: 56px 0 0;
    padding: 0 0 0 20px;
    li {
      font-size: 18px;
      margin-bottom: 14px;
    }
  }
}
</style>
