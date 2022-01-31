<template>
  <LayoutLanding>
    <div class="price">
      <div class="container">
        <h2 class="h2-title">Стоимость</h2>

        <div class="price__subtitle p-regular">
          Скачать <a href="/dogovor.pdf" target="_blank">бланк договора</a> (PDF-файл, 2.3 Мб)
          <br />
          Оплата и заключение договора производится
          <router-link to="/contact">только в главном корпусе</router-link>
        </div>

        <div class="features">
          <div class="feature">
            <div class="feature__title">Маткапитал</div>
            <p class="feature__description p-regular c-light">
              Мат. капиталом можно <br />полностью оплатить обучение
            </p>
          </div>
          <div class="feature">
            <div class="feature__title">Вычет</div>
            <p class="feature__description p-regular c-light">
              От 6 500 до 15 600 р. вернет <br />налоговая за обучение ребенка
            </p>
          </div>
          <div class="feature">
            <div class="feature__title">Оплата</div>
            <p class="feature__description p-regular c-light">
              По картам, по счету или <br />наличными в кассе ЕГЭ-Центра
            </p>
          </div>
          <div class="feature">
            <div class="feature__title">Бесплатно</div>
            <p class="feature__description p-regular c-light">
              По картам, по счету или <br />наличными в кассе ЕГЭ-Центра
            </p>
          </div>
        </div>

        <table class="table">
          <thead>
            <tr>
              <td>Формат подготовки</td>
              <td>Кол-во предметов</td>
              <td>Частота занятий</td>
              <td>Стоимость</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>Курсы ЕГЭ 2022 <br />11 класс</strong>
              </td>
              <td>
                <p>Обучение по 1 предмету</p>
                <p>Обучение по 2 предметам</p>
                <p>Обучение по 3 предметам</p>
                <p>Обучение по 4 предметам</p>
              </td>
              <td>
                <p>Занятия 1 раз в неделю по любому предмету</p>
                <p>1 курс = 20 учебных недель</p>
              </td>
              <td>
                <p><b>22 000</b> руб./семестр</p>
                <p><b>44 000</b> руб./семестр</p>
                <p><b>66 000</b> руб./семестр</p>
                <p><b>88 000</b> руб./семестр</p>
              </td>
            </tr>
            <!-- tr -->
            <tr>
              <td>
                <strong>
                  <p>Курсы ЕГЭ 2023 <br />10 класс</p>
                  <p>Курсы ОГЭ 2023 <br />9 класс</p>
                </strong>
              </td>
              <td>
                <p>Обучение по 1 предмету</p>
                <p>Обучение по 2 предметам</p>
                <p>Обучение по 3 предметам</p>
                <p>Обучение по 4 предметам</p>
              </td>
              <td>
                <p>Занятия 1 раз в неделю по любому предмету</p>
                <p>1 курс = 20 учебных недель</p>
              </td>
              <td>
                <p><b>20 000</b> руб./семестр</p>
                <p><b>40 000</b> руб./семестр</p>
                <p><b>60 000</b> руб./семестр</p>
                <p><b>80 000</b> руб./семестр</p>
              </td>
            </tr>
            <!-- tr -->
            <tr>
              <td>
                <strong>Школа-экстернат <br />10-11 классы</strong>
              </td>
              <td>
                <p>ЕГЭ по математике (профиль)</p>
                <p>ЕГЭ по математике (база)</p>
                <p>ЕГЭ по любому предмету (профиль)</p>
                <p>ЕГЭ по русскому языку</p>
              </td>
              <td>
                <p>1 курс = 96 занятий</p>
                <p>1 курс = 32 занятия</p>
                <p>1 курс = 64 занятия</p>
                <p>1 курс = 96 занятия</p>
              </td>
              <td>
                <p><b>25 200</b> руб./семестр</p>
                <p><b>8 400</b> руб./семестр</p>
                <p><b>16 800</b> руб./семестр</p>
                <p><b>25 200</b> руб./семестр</p>
              </td>
            </tr>
            <!-- tr -->
            <tr>
              <td>
                <strong>Пробный ЕГЭ</strong>
              </td>
              <td>Любой предмет</td>
              <td>1 тест = 180-235 минут</td>
              <td>
                <p><b>1 500 </b> руб./семестр</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </LayoutLanding>
</template>

<script>
import shuffle from "lodash/shuffle"
import content from "./JSON_data/teachers"

export default {
  name: "Teachers",
  data() {
    return {
      content,
    }
  },
  methods: {
    shuffleList(list) {
      return shuffle(list)
    },
  },
}
</script>

<style lang="scss" scoped>
.price {
  margin: 44px 0 105px;
  &__subtitle {
    margin-top: 22px;
    max-width: 672px;
    line-height: 1.4;
  }
}

.features {
  margin-top: 96px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
}

.feature {
  &__title {
    font-weight: bold;
    font-size: 30px;
    color: $colorPrimary;
  }
  &__description {
    margin-top: 18px;
    line-height: 1.3;
  }
}

.table {
  margin-top: 105px;
  width: 100%;
  border-collapse: collapse;
  thead {
    td {
      background: #f6f6fc;
      font-weight: bold;
      font-size: 20px;
      color: #141f3c;
      border-bottom: 0;
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
      padding: 32px 26px 32px;
      color: $colorGray;
      p + p {
        margin-top: 0.67em;
      }
      &:first-child {
        padding-left: 0;
        p + p {
          margin-top: 1.4em;
        }
      }
      &:nth-child(3) {
        p + p {
          margin-top: 1.4em;
        }
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
    width: 25%;
    border-right: 1px solid #cbcbcb;
    border-bottom: 1px solid #cbcbcb;
  }
}
</style>
