<template>
  <section class="locations">
    <div class="container">
      <div class="locations__content">
        <div class="locations__content-wrapper">
          <h3 class="locations__title h3-title">Главный корпус</h3>
          <ul class="locations__features">
            <li>
              <SvgIcon name="checkmark" />
              <span>Обучение</span>
            </li>
            <li>
              <SvgIcon name="checkmark" />
              <span>Заключение договоров</span>
            </li>
            <li>
              <SvgIcon name="checkmark" />
              <span>Оплата</span>
            </li>
          </ul>

          <div class="locations__primary">
            <div class="location" :class="[openedLocation === 0 && 'is-active']">
              <div class="location__toggle" @click="() => toggleLocation(0)">
                <div class="locations__link">
                  <span
                    class="metro"
                    :title="primaryMetro.line.name"
                    :style="{ background: `#${primaryMetro.line.hex_color}` }"
                  />
                  ЕГЭ-Центр Тургеневская
                </div>
                <SvgIcon name="caret" />
              </div>

              <slide-up-down :active="openedLocation === 0" :duration="300">
                <div class="location__content">
                  <p class="p-regular">
                    <span class="c-light">Адрес:</span> г. Москва, ул. Мясницкая, д. 40, стр. 1
                    <br />
                    <span class="c-light">Часы работы:</span> ежедневно с 10:00 до 19:00
                  </p>

                  <a class="location__phone" href="#"> +7 (495) 646-85-92 </a>
                  <span class="location__show" @click="() => showMap(0)">Показать на карте</span>
                </div>
                <slide-up-down :active="showingMap.includes(0)" class="locations__map">
                  <div class="locations__map-scaler">
                    <yandex-map
                      :settings="map.settings"
                      :coords="map.coords"
                      :zoom="map.zoom"
                      :controls="map.controls"
                      :scroll-zoom="false"
                    >
                      <ymap-marker
                        :marker-id="getMarker(1).id"
                        marker-type="placemark"
                        :coords="[getMarker(1).lat, getMarker(1).lng]"
                        :icon="map.defaultMarker"
                        :hint-content="getMarker(1).name"
                        :options="{
                          hideIconOnBalloonOpen: false,
                        }"
                      >
                        <MapBalloon slot="balloon" :marker="getMarker(1)" />
                      </ymap-marker>
                    </yandex-map>
                  </div>
                </slide-up-down>
              </slide-up-down>
            </div>
          </div>

          <h3 class="locations__title h3-title">Учебные корпуса</h3>
          <ul class="locations__features">
            <li><SvgIcon name="checkmark" /> <span>Обучение</span></li>
          </ul>

          <div class="locations__list" v-if="locations">
            <div
              class="location"
              v-for="link in locationsWithoutPrimary"
              :key="link.id"
              :data-id="link.id"
            >
              <div class="location__toggle" @click="() => toggleLocation(link.id)">
                <div class="locations__link">
                  <span
                    class="metro"
                    :title="link.line.name"
                    :style="{ background: `#${link.line.hex_color}` }"
                  />
                  {{ link.name }}
                </div>
                <SvgIcon name="caret" />
              </div>

              <slide-up-down :active="openedLocation === link.id" :duration="300">
                <div class="location__content">
                  <p class="p-regular">
                    <span class="c-light">Адрес:</span> г. Москва, ул. Мясницкая, д. 40, стр. 1
                    <br />
                    <span class="c-light">Часы работы:</span> ежедневно с 10:00 до 19:00
                  </p>

                  <a class="location__phone" href="#"> +7 (495) 646-85-92 </a>
                  <span class="location__show" @click="() => showMap(link.id)">
                    Показать на карте
                  </span>
                </div>
                <slide-up-down :active="showingMap.includes(link.id)" class="locations__map">
                  <div class="locations__map-scaler">
                    <yandex-map
                      :settings="map.settings"
                      :coords="map.coords"
                      :zoom="map.zoom"
                      :controls="map.controls"
                      :scroll-zoom="false"
                    >
                      <ymap-marker
                        :marker-id="getMarker(link.id).id"
                        marker-type="placemark"
                        :coords="[getMarker(link.id).lat, getMarker(link.id).lng]"
                        :icon="map.defaultMarker"
                        :hint-content="getMarker(link.id).name"
                        :options="{
                          hideIconOnBalloonOpen: false,
                        }"
                      >
                        <MapBalloon slot="balloon" :marker="getMarker(link.id)" />
                      </ymap-marker>
                    </yandex-map>
                  </div>
                </slide-up-down>
              </slide-up-down>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { yandexMap, ymapMarker } from "vue-yandex-maps"
import SlideUpDown from "vue-slide-up-down"

import { getLineByStation, getStationByName } from "@/pages/JSON_data/moscow-metro.js"
import locations from "./locations"

export default {
  components: { yandexMap, ymapMarker, SlideUpDown },
  data() {
    return {
      openedLocation: null,
      showingMap: [],
      locations: locations,
      mapInstance: null,
      map: {
        settings: {
          apiKey: "9ba9a278-66f0-47c6-8197-0d404ee0def5",
          lang: "ru_RU",
        },
        coords: [55.75322, 37.622513],
        zoom: 10.4,
        controls: ["zoomControl"],
        defaultMarker: {
          layout: "default#image",
          imageSize: [30, 40],
          imageOffset: [-15, -30],
          imageHref: "/static/marker@2x.png",
        },
      },
    }
  },
  computed: {
    primaryMetro() {
      return {
        line: getLineByStation("Тургеневская"),
        station: getStationByName("Тургеневская"),
      }
    },
    locationsWithoutPrimary() {
      return this.locations.slice(1, this.locations.length)
    },
  },
  methods: {
    toggleLocation(id) {
      if (this.openedLocation === id) {
        this.openedLocation = null
      } else {
        this.openedLocation = id
      }
    },
    showMap(id) {
      if (this.showingMap.includes(id)) {
        this.showingMap = this.showingMap.filter((x) => x !== id)
      } else {
        this.showingMap = [...this.showingMap, id]
      }
    },
    getMarker(id) {
      return this.locations.find((x) => x.id === id).station
    },

    setMapInstance(instance) {
      this.mapInstance = instance
    },
  },
  watch: {},
}
</script>

<style lang="scss" scoped>
.locations {
  position: relative;
  overflow: hidden;
  background: $colorBg;
  &__content {
    padding: 28px 0px 0px 0px;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
  // &__content-wrapper {
  //   // max-width: 520px;
  // }

  &__title {
    font-size: 20px;
  }

  &__subtitle {
    margin-top: 46px;
    font-weight: 500;
    color: $colorPrimary;
  }

  &__features {
    list-style: none;
    margin: 18px 0 18px;
    padding: 0;
    li {
      display: flex;
      align-items: center;
      margin-bottom: 5px;
      font-weight: 500;
      font-size: 11px;
      .svg-icon {
        color: $colorGreen;
        margin-right: 11px;
        margin-left: 4px;
        font-size: 10px;
      }
    }
  }

  &__map {
    display: flex;
    flex-direction: column;
  }
  &__map-scaler {
    flex: 1 0 auto;
    display: flex;
    flex-direction: column;
    position: relative;
    height: 350px;
    img,
    picture {
      position: absolute;
      z-index: 1;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center center;
    }
    ::v-deep .ymap-container {
      flex: 1 1 auto;
    }
    ::v-deep ymaps[class$="balloon__content"] {
      padding: 0;
      border-radius: 10px;
      margin-right: 0;
    }
    ::v-deep ymaps[class$="balloon__close-button"] {
      background-image: url("data:image/svg+xml,%3Csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9 10.0016L1.00164 18L0 16.9984L7.99836 9L5.62878e-07 1.00164L1.00164 0L9 7.99836L16.9984 0L18 1.00164L10.0016 9L18 16.9984L16.9984 18L9 10.0016Z' fill='red'/%3E%3C/svg%3E%0A");
      opacity: 0.5;
      filter: grayscale(1);
      width: 30px;
      transition: filter 0.25s $ease;
      &:hover {
        filter: none;
      }
    }
  }
  &__link {
    display: flex;
    align-items: center;
    font-weight: 500;
    text-decoration: underline;
    cursor: pointer;
    transition: color 0.25s $ease;
    &:hover {
      color: $colorPrimary;
    }
  }
  &__primary {
    margin-top: 24px;
    margin-bottom: 20px;
    margin-left: -16px;
    margin-right: -16px;
    p {
      margin-top: 10px;
      line-height: 1.65;
    }
  }
  &__list {
    margin-left: -16px;
    margin-right: -16px;
    .locations__link {
      font-weight: 400;
      padding: 3px 0;
    }
  }
}

.metro {
  display: inline-block;
  flex: 0 0 auto;
  width: 8px;
  height: 8px;
  margin-right: 10px;
  border-radius: 50%;
}

.location {
  border-top: 1px solid $borderColor;
  border-bottom: 1px solid $borderColor;
  margin-bottom: -1px;
  &__toggle {
    display: flex;
    align-items: center;
    padding: 12px 16px;
    font-size: 12px;
    cursor: pointer;
    .svg-icon {
      margin-left: auto;
      font-size: 6px;
      color: $colorGray;
      transition: transform 0.25s $ease;
    }
    &:hover {
      .locations__link {
        text-decoration: none;
        color: $colorPrimary;
      }
    }
  }
  &__content {
    display: flex;
    flex-direction: column;
    padding-left: 34px;
    padding-right: 16px;
    padding-bottom: 20px;
  }
  &__phone,
  &__show {
    display: inline-block;
    margin-top: 12px;
    color: $colorPrimary;
    font-size: 12px;
    cursor: pointer;
    transition: color 0.25s $ease;
    &:hover {
      color: $colorPrimaryHover;
    }
  }
  &.is-active {
    .location__toggle .svg-icon {
      transform: rotate(180deg);
    }
  }
}
</style>
