<template>
  <section class="video" :class="className">
    <div class="container">
      <div class="video__row row">
        <div class="col col-6">
          <div class="player" :class="[videoPlaying && 'is-playing']">
            <div class="player__cover">
              <img
                src="/static/img/static/videoCover.jpg"
                srcSet="/static/img/static/videoCover@2x.jpg 2x"
                alt="Обложка видео"
              />
            </div>
            <div class="player__video">
              <iframe
                src="https://www.youtube.com/embed/yfdZ0QSh3Iw"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div class="player__play" @click="playVideo">
              <SvgIcon name="play" />
            </div>
          </div>
        </div>
        <div class="col col-6">
          <h2 class="h2-title">Посмотрите видеоролик о школе-экстернат</h2>
          <p class="video__description p-regular">
            Главные герои этого видеоролика – наши ученики и педагоги. За три с половиной минуты мы
            постарались передать атмосферу ЕГЭ-Центра и ответить на ключевые вопросы родителей: кто
            выбирает экстернат и почему, как строится процесс обучения, кто ведет занятия и зачем
            проходить 2 года за один.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      videoPlaying: false,
    }
  },
  props: {
    className: String,
  },
  methods: {
    playVideo() {
      this.videoPlaying = true
    },
  },
}
</script>

<style lang="scss" scoped>
.video {
  margin: 220px 0 205px 0;
  &__row {
    align-items: center;
  }
  &__description {
    margin-top: 46px;
  }
}

.player {
  position: relative;
  z-index: 1;
  overflow: hidden;
  border-radius: 20px;
  max-width: 550px;
  &.is-playing {
    .player__cover {
      opacity: 0;
      pointer-events: none;
    }
    .player__video {
      opacity: 1;
      pointer-events: all;
    }
    .player__play {
      opacity: 0;
      pointer-events: none;
    }
  }
  &__cover {
    position: relative;
    z-index: 1;
    font-size: 0;
    transition: opacity 0.25s $ease;
    img {
      width: 100%;
    }
  }
  &__video {
    position: absolute;
    z-index: 2;
    display: flex;
    flex-direction: column;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    pointer-events: none;
    font-size: 0;
    transition: opacity 0.25s $ease;
    iframe {
      flex: 1 1 auto;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  &__play {
    position: absolute;
    z-index: 3;
    top: 50%;
    left: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transform: translate(-50%, -50%);
    background: white;
    border-radius: 50%;
    width: 100px;
    height: 100px;
    color: $colorGreen;
    font-size: 0;
    cursor: pointer;
    will-change: transform;
    backface-visibility: hidden;
    transition: 0.25s $ease;
    .svg-icon {
      font-size: 32px;
      margin-right: -8px;
      transition: 0.25s $ease;
      will-change: transform;
      backface-visibility: hidden;
    }
    &:hover {
      transform: translate(-50%, -50%) scale(0.8);
      .svg-icon {
        transform: scale(1.2);
      }
    }
  }
}
</style>
