<template>
  <section class="topics" :class="className">
    <div class="container">
      <h2 class="topics__title h2-title">Выберите предмет</h2>

      <ul class="topics__list">
        <li>
          <router-link to="course/1">
            <div class="topics__img">
              <img
                src="/static/img/topicIcons/math.png"
                srcset="/static/img/topicIcons/math@2x.png 2x"
                alt="icon"
              />
            </div>
            ЕГЭ по математике
            <SvgIcon name="caret" />
          </router-link>
        </li>
        <li>
          <router-link to="course/1">
            <div class="topics__img">
              <img
                src="/static/img/topicIcons/physics.png"
                srcset="/static/img/topicIcons/physics@2x.png 2x"
                alt="icon"
              />
            </div>
            ЕГЭ по физике
            <SvgIcon name="caret" />
          </router-link>
        </li>
        <li>
          <router-link to="course/1">
            <div class="topics__img">
              <img
                src="/static/img/topicIcons/chemestry.png"
                srcset="/static/img/topicIcons/chemestry@2x.png 2x"
                alt="icon"
              />
            </div>
            ЕГЭ по химии
            <SvgIcon name="caret" />
          </router-link>
        </li>
        <li>
          <router-link to="course/1">
            <div class="topics__img">
              <img
                src="/static/img/topicIcons/biology.png"
                srcset="/static/img/topicIcons/biology@2x.png 2x"
                alt="icon"
              />
            </div>
            ЕГЭ по биологии
            <SvgIcon name="caret" />
          </router-link>
        </li>
        <li>
          <router-link to="course/1">
            <div class="topics__img">
              <img
                src="/static/img/topicIcons/history.png"
                srcset="/static/img/topicIcons/history@2x.png 2x"
                alt="icon"
              />
            </div>
            ЕГЭ по истории
            <SvgIcon name="caret" />
          </router-link>
        </li>
        <li>
          <router-link to="course/1">
            <div class="topics__img">
              <img
                src="/static/img/topicIcons/social.png"
                srcset="/static/img/topicIcons/social@2x.png 2x"
                alt="icon"
              />
            </div>
            ЕГЭ по обществознанию
            <SvgIcon name="caret" />
          </router-link>
        </li>
        <li>
          <router-link to="course/1">
            <div class="topics__img">
              <img
                src="/static/img/topicIcons/russian.png"
                srcset="/static/img/topicIcons/russian@2x.png 2x"
                alt="icon"
              />
            </div>
            ЕГЭ по русскому языку
            <SvgIcon name="caret" />
          </router-link>
        </li>
        <li>
          <router-link to="course/1">
            <div class="topics__img">
              <img
                src="/static/img/topicIcons/english.png"
                srcset="/static/img/topicIcons/english@2x.png 2x"
                alt="icon"
              />
            </div>
            ЕГЭ по английскому языку
            <SvgIcon name="caret" />
          </router-link>
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
.topics {
  margin: 70px 0 35px 0;
  &__list {
    list-style: none;
    margin: 24px -16px;
    padding: 0;
    li {
      display: block;
      &:last-child a {
        border-bottom: 1px solid #d1d1d1;
      }
    }
    a {
      position: relative;
      display: flex;
      align-items: center;
      border-top: 1px solid #d1d1d1;
      padding: 12px 20px 12px 46px;
      transition: color 0.25s $ease;

      .svg-icon {
        flex: 0 0 auto;
        margin-left: auto;
        font-size: 6px;
        color: #757575;
        will-change: transform;
        transform: rotate(-90deg);
        backface-visibility: hidden;
        transition: color 0.25s $ease, transform 0.25s $ease;
      }

      &:hover {
        color: $colorPrimary;
        .svg-icon {
          color: $colorPrimary;
        }
      }
    }
  }
  &__img {
    position: absolute;
    top: 50%;
    left: 0;
    width: 46px;
    transform: translateY(-50%) scale(0.55);
    text-align: center;
    img {
      max-width: 100%;
    }
  }
}
</style>
