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

        <swiper class="features" :options="swiperOptions">
          <swiper-slide class="feature">
            <div class="feature__title">Маткапитал</div>
            <p class="feature__description p-regular c-light">
              Мат. капиталом можно полностью оплатить обучение
            </p>
          </swiper-slide>
          <swiper-slide class="feature">
            <div class="feature__title">Вычет</div>
            <p class="feature__description p-regular c-light">
              От 6 500 до 15 600 р. вернет налоговая за обучение ребенка
            </p>
          </swiper-slide>
          <swiper-slide class="feature">
            <div class="feature__title">Оплата</div>
            <p class="feature__description p-regular c-light">
              По картам, по счету или>наличными в кассе ЕГЭ-Центра
            </p>
          </swiper-slide>
          <swiper-slide class="feature">
            <div class="feature__title">Бесплатно</div>
            <p class="feature__description p-regular c-light">
              По картам, по счету или наличными в кассе ЕГЭ-Центра
            </p>
          </swiper-slide>
        </swiper>

        <div class="list">
          <div class="list__section">
            <div class="list__title">Курсы ЕГЭ 2022 <br />11 класс</div>
            <p class="list__content">
              1 предмет - занятия 1 раз в неделю<br />
              1 курс - 33 занятия в сумме <br />
              <b>19 800</b> руб./триместр
            </p>
            <p class="list__content">
              2 предмета - занятия 2 раз в неделю<br />
              1 курс - 66 занятий в сумме<br />
              <b>39 600</b> руб./триместр
            </p>
            <p class="list__content">
              3 предмет - занятия 3 раза в неделю<br />
              1 курс - 99 занятий в сумме<br />
              <b>59 400</b> руб./триместр
            </p>
            <p class="list__content">
              4 предмета - занятия 4 раза в неделю<br />
              1 курс - 132 занятия в сумме<br />
              <b>79 200</b> руб./триместр
            </p>
          </div>

          <!-- section -->
          <div class="list__section">
            <div class="list__title">
              Курсы ОГЭ/ЕГЭ-2023<br />
              9-10 класс
            </div>
            <p class="list__content">
              1 предмет - занятия 1 раз в неделю<br />
              1 курс - 33 занятия в сумме<br />
              <b>19 800</b> руб./триместр
            </p>
            <p class="list__content">
              2 предмета - занятия 2 раз в неделю<br />
              1 курс - 66 занятий в сумме<br />
              <b>39 600</b> руб./триместр
            </p>
            <p class="list__content">
              3 предмет - занятия 3 раза в неделю<br />
              1 курс - 99 занятий в сумме<br />
              <b>59 400</b> руб./триместр
            </p>
            <p class="list__content">
              4 предмета - занятия 4 раза в неделю<br />
              1 курс - 132 занятия в сумме<br />
              <b>79 200</b> руб./триместр
            </p>
          </div>

          <!-- section -->
          <div class="list__section">
            <div class="list__title">
              Школа-экстернат<br />
              10-11 классы
            </div>
            <p class="list__content">
              ЕГЭ по математике (профиль)<br />
              1 курс - 96 занятия в сумме<br />
              <b>25 200</b> руб./месяц
            </p>
            <p class="list__content">
              ЕГЭ по математике (база)<br />
              1 курс - 32 занятия в сумме<br />
              <b>8 400 </b>руб./месяц
            </p>
            <p class="list__content">
              ЕГЭ по любому предмету (профиль)<br />
              1 курс - 64 занятия в сумме<br />
              <b>16 800</b> руб./месяц
            </p>
            <p class="list__content">
              ЕГЭ по русскому языку<br />
              1 курс - 96 занятий в сумме<br />
              <b>25 200</b> руб./месяц
            </p>
          </div>

          <!-- section -->
          <div class="list__section">
            <div class="list__title">Пробный ЕГЭ</div>
            <p class="list__content">
              Любой предмет<br />
              1 тест - 180-235 минут<br />
              <b>19 800</b> руб./триместр
            </p>
          </div>
        </div>
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
      swiperOptions: {
        slidesPerView: "auto",
        spaceBetween: 16,
      },
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
  margin: 32px 0 44px;
  &__subtitle {
    margin-top: 14px;
    line-height: 1.5;
  }
}

.features {
  margin-top: 44px;
  margin-left: -16px;
  margin-right: -16px;
  padding-left: 16px;
  padding-right: 16px;
}

.feature {
  background: #f8f8f8;
  flex: 0 0 182px;
  width: 182px;
  padding: 20px;
  text-align: center;
  border-radius: 5px;
  &__title {
    font-weight: bold;
    font-size: 16px;
    color: $colorPrimary;
  }
  &__description {
    margin-top: 12px;
    line-height: 1.3;
  }
}

.list {
  margin-top: 40px;
  &__section {
    margin-bottom: 48px;
  }
  &__title {
    font-weight: bold;
    font-size: 20px;
    color: #141f3c;
  }
  &__content {
    margin: 18px 0 0;
    font-size: 12px;
    line-height: 1.5;
    color: $colorGray;
  }
}
</style>
