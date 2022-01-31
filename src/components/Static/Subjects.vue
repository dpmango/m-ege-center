<template>
  <section class="subjects" :class="className">
    <div class="container">
      <h2 class="subjects__title h2-title">Учитесь только по нужным предметам</h2>

      <table class="subjects__table">
        <thead>
          <tr>
            <td>Предмет</td>
            <td>Частота занятий</td>
            <td>Описание</td>
            <td>Стоимость</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <strong>Математика <br />(база)</strong>
            </td>
            <td>1 раз в неделю</td>
            <td>
              По математике можно выбрать только один из уровней — базовый или профильный. Если
              школьник ориентирован на гумманитарное направление и уверен, что математики нет среди
              ЕГЭ на выбранном факультете, то достаточно сдать «базу».
            </td>
            <td><b>8 400 руб</b>./семестр</td>
          </tr>
          <!-- tr -->
          <tr>
            <td>
              <strong>
                ЕГЭ по математике<br />
                (профиль)
              </strong>
            </td>
            <td>3 раза в неделю</td>
            <td>
              Если в перечне вступительных испытаний указана математика, учащемуся нужно сдавать ЕГЭ
              по математике (профильный уровень). Как правило, «профиль» сдают при поступлении в
              технические вузы, а также на некоторые направления, связанные с экономикой,
              управлением и даже лингвистикой.
            </td>
            <td><b>25 200 руб</b>./семестр</td>
          </tr>
          <!-- tr -->
          <tr>
            <td>
              <strong>ЕГЭ по русскому языку</strong>
            </td>
            <td>1 раз в неделю</td>
            <td>
              Сдача ЕГЭ по русскому языку является обязательной для прохождения государственной
              итоговой аттестации. Если ученик набирает балл ниже порогового, он не сможет получить
              аттестат. К тому же, результаты ЕГЭ по русскому языку обязательны при поступлении в
              ВУЗ на любое направление.
            </td>
            <td><b>25 200</b>./семестр</td>
          </tr>
          <!-- tr -->
          <tr>
            <td>
              <strong>ЕГЭ по любому другому предмету (профиль)</strong>
            </td>
            <td>2 раза в неделю</td>
            <td>
              ЕГЭ проводится по 14 общеобразовательным предметам. Кроме обязательных математики и
              русского языка ученики сдают по выбору 1–2 предмета, необходимые для поступления на
              будущую специальность.
            </td>
            <td><b>16 800</b> руб./тест</td>
          </tr>
          <!-- tr -->
          <tr>
            <td>
              <strong>Дополнительные индивидуальные занятия</strong>
            </td>
            <td>Индивидуально</td>
            <td>
              Если у ребенка есть существенные пробелы за пройденный курс школьной программы, в
              течение года вы можете взять как пару занятий для проработки непонятных тем с
              преподавателями ЕГЭ-Центра, так и назначить регулярные дополнительные занятия.
            </td>
            <td>от <b>2 000</b> руб./занятие</td>
          </tr>
        </tbody>
      </table>
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
.subjects {
  margin: 95px 0 107px 0;

  &__table {
    margin-top: 54px;
    width: 100%;
    border-collapse: collapse;
    thead {
      td {
        // background: #f6f6fc;
        font-weight: bold;
        font-size: 20px;
        color: #141f3c;
        border-bottom: 1px solid #cbcbcb;
        padding: 15px 26px 16px;
        &:first-child {
          border-top-left-radius: 10px;
          padding-left: 0;
        }
        &:last-child {
          border-top-right-radius: 10px;
          padding-right: 0;
        }
      }
    }
    tbody {
      td {
        font-size: 16px;
        padding: 32px 26px 39px;
        color: $colorGray;
        &:first-child {
          padding-left: 0;
        }
        &:last-child {
          padding-right: 0;
        }
      }
      tr:last-child td {
        border-bottom: 0;
      }
    }
    td {
      vertical-align: top;
      // border-right: 1px solid #cbcbcb;
      border-bottom: 1px solid #cbcbcb;
      &:nth-child(1) {
        width: 21%;
      }
      &:nth-child(2) {
        width: 20%;
      }
      &:nth-child(3) {
        width: 40%;
      }
      &:nth-child(4) {
        width: 19%;
      }
      &:last-child {
        border-right: 0;
      }
    }
  }
}
</style>
