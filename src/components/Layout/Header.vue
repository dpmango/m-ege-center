<template>
  <header class="header">
    <div class="header__wrapper">
      <div class="container">
        <div class="header__top">
          <router-link to="/" class="header__logo">
            <svg
              width="49"
              height="36"
              viewBox="0 0 49 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M49 8.18115C49 8.18115 41.5 8.18116 36.5 9C31.5 9.81884 26 13 26 13V36C26 36 30.9897 33.3827 35 33.5C38.6349 33.6063 42 36 42.5 36C43 36 49 8.18115 49 8.18115Z"
                fill="#BEAC83"
              />
              <path
                d="M0 8.18115C0 8.18115 7.5 8.18116 12.5 9C17.5 9.81884 23 13 23 13V36C23 36 18.0103 33.3827 14 33.5C10.3651 33.6063 7 36 6.5 36C6 36 0 8.18115 0 8.18115Z"
                fill="#FFC423"
              />
              <path
                d="M42.5 0.54C42.5 0.54 38.5 -0.96 33.5 1.04C28.5 3.04 25 8.53998 25 8.53998V11C25 11 28 8.5 33.5 7C39 5.5 42.5 5.5 42.5 5.5V0.54Z"
                fill="#916F5D"
              />
              <path
                d="M6.5 0.54C6.5 0.54 10.5 -0.96 15.5 1.04C20.5 3.04 24 8.53998 24 8.53998V11C24 11 21 8.5 15.5 7C10 5.5 6.5 5.5 6.5 5.5V0.54Z"
                fill="#FE8A1E"
              />
            </svg>
            <span>ЕГЭ Центр</span>
          </router-link>

          <div class="header__cta">
            <a class="header__phone" href="tel:+74956468592">
              <SvgIcon name="phone" />
            </a>
            <div class="header__hamburger" @click="() => (menuActive = !menuActive)">
              <div class="hamburger">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>

        <slide-up-down :active="menuActive" class="header__menu-opener" :fixPxForward="0">
          <div class="header__menu">
            <li v-for="(li, idx) in menu" :key="idx">
              <a
                v-if="li.submenu"
                :class="[activeSubmenu === idx && 'is-active']"
                @click="handleSubmenuClick(idx)"
              >
                {{ li.label }} <SvgIcon name="caret" />
              </a>
              <router-link v-else :to="li.to">{{ li.label }}</router-link>

              <slide-up-down
                :active="activeSubmenu === idx"
                v-if="li.submenu"
                tag="ul"
                :fixPxForward="0"
              >
                <li v-for="(subli, idx) in li.submenu" :key="idx">
                  <div
                    class="header__menu-sub"
                    :class="[activeSubmenu2Lvl === idx && 'is-active']"
                    @click="handleSubmenu2Click(idx)"
                  >
                    {{ subli.title }} <SvgIcon name="caret" />
                  </div>
                  <slide-up-down
                    :active="activeSubmenu2Lvl === idx"
                    v-if="subli.list"
                    tag="ul"
                    :fixPxForward="0"
                  >
                    <li v-for="(lastli, idx) in subli.list" :key="idx">
                      <router-link :to="lastli.to">{{ lastli.label }}</router-link>
                    </li>
                  </slide-up-down>
                </li>
              </slide-up-down>
            </li>
          </div>
        </slide-up-down>
      </div>
    </div>
  </header>
</template>

<script>
import SlideUpDown from "@/plugins/SlideToggle"

export default {
  components: {
    SlideUpDown,
  },
  data() {
    return {
      menuActive: false,
      activeSubmenu: null,
      activeSubmenu2Lvl: null,

      menu: [
        {
          to: "/courses",
          label: "Курсы",
          submenu: [
            {
              title: "Курсы ЕГЭ для 11 класса",
              list: [
                { to: "/course/1", label: "Математика" },
                { to: "/course/1", label: "Физика" },
                { to: "/course/1", label: "Химия" },
                { to: "/course/1", label: "Биология" },
                { to: "/course/1", label: "История" },
                { to: "/course/1", label: "Обществознание" },
                { to: "/course/1", label: "Русский язык" },
                { to: "/course/1", label: "Литература" },
                { to: "/course/1", label: "Информатика" },
                { to: "/course/1", label: "Английский язык" },
                { to: "/course/1", label: "Итоговое сочинение" },
              ],
            },
            {
              title: "Курсы ЕГЭ для 10 класса",
              list: [
                { to: "/course/1", label: "Математика" },
                { to: "/course/1", label: "Физика" },
                { to: "/course/1", label: "Химия" },
                { to: "/course/1", label: "Биология" },
                { to: "/course/1", label: "История" },
                { to: "/course/1", label: "Обществознание" },
                { to: "/course/1", label: "Русский язык" },
                { to: "/course/1", label: "Английский язык" },
              ],
            },
            {
              title: "Курсы ОГЭ для 9 класса",
              list: [
                { to: "/course/1", label: "Математика" },
                { to: "/course/1", label: "Физика" },
                { to: "/course/1", label: "Химия" },
                { to: "/course/1", label: "Биология" },
                { to: "/course/1", label: "История" },
                { to: "/course/1", label: "Обществознание" },
                { to: "/course/1", label: "Русский язык" },
                { to: "/course/1", label: "Английский язык" },
              ],
            },
            {
              title: "Другое",
              list: [
                { to: "/study-plans", label: "Учебные планы" },
                { to: "/", label: "Пробный ЕГЭ" },
              ],
            },
          ],
        },
        { to: "/school", label: "Школа-экстернат" },
        { to: "/teachers", label: "Преподаватели" },
        { to: "/faq", label: "Вопрос-ответ" },
        { to: "/docs", label: "Документы" },
        { to: "/price", label: "Стоимость" },
        { to: "/contact", label: "Адреса" },
      ],
    }
  },
  methods: {
    handleSubmenuClick(idx) {
      this.activeSubmenu = this.activeSubmenu === idx ? null : idx
    },
    handleSubmenu2Click(idx) {
      this.activeSubmenu2Lvl = this.activeSubmenu2Lvl === idx ? null : idx
    },
  },
}
</script>

<style lang="scss" scoped>
.header {
  position: relative;
  z-index: 9;
  &__wrapper {
    position: relative;
    background: white;
  }
  &__top {
    position: relative;
    z-index: 2;
    display: flex;
    align-items: center;
    padding: 17px 0 17px;
    background: white;
  }
  &__logo {
    flex: 0 0 auto;
    margin-right: 20px;
    display: flex;
    align-items: center;
    font-size: 0;
    img,
    svg {
      max-width: 32px;
      max-height: 24px;
      margin-right: 8px;
    }
    span {
      font-weight: 500;
      font-size: 16px;
      line-height: 1;
      color: #000000;
      transition: color 0.25s $ease;
    }

    &:hover {
      span {
        color: $colorPrimary;
      }
    }
  }

  &__cta {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    margin-left: auto;
  }

  &__phone {
    display: inline-block;
    font-size: 0;
    transition: color 0.25s $ease;
    .svg-icon {
      font-size: 20px;
    }
    &:hover {
      color: $colorPrimary;
    }
  }

  &__hamburger {
    margin-left: 20px;
  }

  // &__menu-opener {
  //   // backface-visibility: hidden;
  //   // transform: translateZ(0);
  //   // will-change: height;
  // }

  &__menu {
    margin: 14px 0;
    padding: 0;
    li {
      display: block;
      font-size: 16px;
      line-height: 15px;
      margin: 0px 0px 0px;

      ul {
        margin: 0px 0px 0px 18px;
        // backface-visibility: hidden;
        // transform: translateZ(0);
        // will-change: height;
        li {
          font-size: 14px;
        }
      }
    }
    > li:last-child {
      margin-bottom: 0;
    }

    a {
      display: inline-flex;
      align-items: center;
      padding: 0px 0px;
      margin-bottom: 26px;
      cursor: pointer;
      transition: color 0.25s $ease;
      .svg-icon {
        margin-left: 10px;
        font-size: 6px;
        will-change: transform;
        transition: transform 0.25s $ease;
      }
      &:hover {
        color: $colorPrimary;
      }
      &.is-active {
        .svg-icon {
          transform: rotate(180deg);
        }
      }
    }
  }
  &__menu-sub {
    display: inline-flex;
    align-items: center;
    font-size: 14px;
    padding: 0px 4px;
    margin-bottom: 26px;
    transition: color 0.25s $ease;
    cursor: pointer;
    .svg-icon {
      margin-left: 10px;
      font-size: 6px;
      will-change: transform;
      transition: transform 0.25s $ease;
    }
    &:hover {
      color: $colorPrimary;
    }
    &.is-active {
      .svg-icon {
        transform: rotate(180deg);
      }
    }
  }
}
</style>
