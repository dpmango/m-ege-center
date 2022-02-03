<template>
  <section class="schedule" :class="className">
    <div class="container">
      <div class="schedule__wrapper">
        <div class="schedule__head">
          <p v-if="label" class="schedule__label">Расписание занятий</p>
          <h2 v-if="title" class="h2-title" v-html="title"></h2>
          <div v-if="subtitle" class="schedule__subtitle p-regular">
            Расписание ученика зависит от выбранных предметов и учебной нагрузки, но в любом случае
            частично или полностью соответствует следующему графику:
          </div>
        </div>

        <div class="schedule__grid">
          <div class="schedule__day" v-for="day in schedule" :key="day.id">
            <label>{{ day.label }}</label>

            <ul v-if="day.times && day.times.length">
              <li v-for="(time, idx) in day.times" :key="idx">
                {{ time }}
              </li>
            </ul>
            <div v-else class="schedule__day-empty c-red">Занятий нет</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    schedule: Array,
    label: String,
    title: String,
    subtitle: String,
    className: String,
  },
}
</script>

<style lang="scss" scoped>
.schedule {
  padding: 32px 0 30px 0;
  background: $colorBg;

  &__head {
    h2 {
      line-height: 1.4;
    }
  }
  &__label {
    font-weight: 500;
    margin-bottom: 8px;
    color: $colorGreen;
  }
  &__subtitle {
    margin-top: 16px;
    max-width: 602px;
  }
  &__grid {
    margin-top: 32px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: flex-start;
    grid-gap: 10px;
  }
  &__day {
    background: #ffffff;
    box-shadow: 0px 29px 60px -17px rgba(110, 112, 175, 0.1);
    border-radius: 20px;
    padding: 32px 8px 20px;
    text-align: center;
    min-height: 155px;
    label {
      font-weight: 500;
      color: $colorPrimary;
    }
    ul {
      margin: 14px 0 0px;
      li {
        display: block;
        font-family: "HK Grotesk";
        font-weight: 600;
        margin-bottom: 8px;
      }
    }
  }
  &__day-empty {
    font-weight: 500;
    margin-top: 30px;
  }
}
</style>
