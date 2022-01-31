<template>
  <section class="insta">
    <div class="container">
      <div class="insta__wrapper">
        <h2 class="h2-title">
          Больше о жизни в школе <br />в нашем <span class="c-primary">Instagram</span>
        </h2>

        <a href="https://www.instagram.com/egecentr_msk" target="_blank" class="insta__badge">
          <SvgIcon name="insta" />
          <span>egecentr_msk</span>
        </a>

        <div class="insta__photos">
          <a
            href="https://www.instagram.com/egecentr_msk"
            target="_blank"
            class="insta__photo"
            v-for="(photo, idx) in photos"
            :key="idx"
          >
            <img :src="photo" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      photos: [
        "/static/img/insta/insta-1.jpg",
        "/static/img/insta/insta-2.jpg",
        "/static/img/insta/insta-3.jpg",
        "/static/img/insta/insta-4.jpg",
        "/static/img/insta/insta-5.jpg",
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.insta {
  margin: 105px 0;
  &__wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    max-width: 785px;
    margin: 0 auto;
  }
  &__badge {
    position: relative;
    z-index: 1;
    margin-top: 52px;
    display: inline-flex;
    align-items: center;
    border: 1px solid #cbcbcb;
    border-radius: 30px;
    padding: 8px 26px;
    color: $colorGray;
    font-size: 18px;
    transition: color 0.25s $ease, border 0.25s $ease;
    overflow: hidden;
    &::after {
      display: inline-block;
      content: " ";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: radial-gradient(circle farthest-corner at 35% 90%, #fec564, transparent 50%),
        radial-gradient(circle farthest-corner at 0 140%, #fec564, transparent 50%),
        radial-gradient(ellipse farthest-corner at 0 -25%, #5258cf, transparent 50%),
        radial-gradient(ellipse farthest-corner at 20% -50%, #5258cf, transparent 50%),
        radial-gradient(ellipse farthest-corner at 100% 0, #893dc2, transparent 50%),
        radial-gradient(ellipse farthest-corner at 60% -20%, #893dc2, transparent 50%),
        radial-gradient(ellipse farthest-corner at 100% 100%, #d9317a, transparent),
        linear-gradient(#6559ca, #bc318f 30%, #e33f5f 50%, #f77638 70%, #fec66d 100%);
      opacity: 0;
      transition: opacity 0.25s $ease;
    }
    &:hover {
      border-color: transparent;
      color: white;
      &::after {
        opacity: 1;
      }
    }
    .svg-icon {
      position: relative;
      z-index: 2;
      font-size: 21px;
      margin-right: 12px;
    }
    span {
      position: relative;
      z-index: 2;
    }
  }

  &__photos {
    margin-top: 54px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 20px;
  }
  &__photo {
    display: inline-block;
    position: relative;
    z-index: 1;
    padding-bottom: 100%;
    width: 141px;
    border-radius: 5px;
    overflow: hidden;
    font-size: 0;
    user-select: none;
    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
