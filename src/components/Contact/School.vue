<template>
  <section class="locations">
    <div class="container">
      <div class="locations__content">
        <div class="locations__content-wrapper">
          <h2 class="locations__title h2-title">Адрес школы-экстернат</h2>

          <div class="locations__primary">
            <div class="locations__link" @click="() => moveMapToCoords(primaryMetro.station)">
              <span
                class="metro"
                :title="primaryMetro.line.name"
                :style="{ background: `#${primaryMetro.line.hex_color}` }"
              />
              ЕГЭ-Центр Тургеневская
            </div>
            <p class="p-regular">
              <span class="c-light">Адрес:</span> г. Москва, ул. Мясницкая, д. 40, стр. 1 <br />
              <span class="c-light">Часы работы:</span> ежедневно с 10:00 до 19:00
            </p>

            <a class="locations__phone" href="#"> +7 (495) 646-85-92 </a>
          </div>
        </div>
      </div>

      <div class="locations__map">
        <div class="locations__map-scaler">
          <yandex-map
            :settings="map.settings"
            :coords="map.coords"
            :zoom="map.zoom"
            :controls="map.controls"
            :scroll-zoom="false"
            @map-was-initialized="setMapInstance"
            :options="{ suppressMapOpenBlock: true }"
          >
            <ymap-marker
              v-for="marker in markers"
              :key="marker.id"
              :marker-id="marker.id"
              marker-type="placemark"
              :coords="[marker.lat, marker.lng]"
              :icon="map.defaultMarker"
              :hint-content="marker.name"
              :options="{
                hideIconOnBalloonOpen: false,
              }"
            >
              <MapBalloon slot="balloon" :marker="marker" />
            </ymap-marker>
          </yandex-map>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import chunk from "lodash/chunk"
import { yandexMap, ymapMarker } from "vue-yandex-maps"

import { getLineByStation, getStationByName } from "@/pages/JSON_data/moscow-metro.js"
import locations from "./locations"

export default {
  components: { yandexMap, ymapMarker },
  data() {
    return {
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
    markers() {
      return [
        // only primary
        {
          ...getStationByName("Тургеневская"),
          ...{
            title: `ЕГЭ-Центр Тургеневская`,
            hex_color: getLineByStation("Тургеневская").hex_color,
            meta: {
              address: "ул. Гостиничная, д. 3",
              phone: "ежедневно с 10:00 до 19:00",
              hours: "+7 (495) 646-85-92",
            },
          },
        },
      ]
    },
    chunkedLocations() {
      return chunk(this.locations || [], Math.ceil(this.locations.length / 2))
    },
    primaryMetro() {
      return {
        line: getLineByStation("Тургеневская"),
        station: getStationByName("Тургеневская"),
      }
    },
  },
  methods: {
    moveMapToCoords({ lat, lng, id }) {
      this.mapInstance.setCenter([lat, lng])
      this.mapInstance.setZoom(13)
      // this.mapInstance.objects.balloon.open(id)
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
    display: flex;
    flex-direction: column;
  }

  &__phone {
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

  &__map {
    margin-top: 0px;
    display: flex;
    flex-direction: column;
    height: 280px;
    margin-left: -16px;
    margin-right: -16px;
  }
  &__map-scaler {
    flex: 1 0 auto;
    display: flex;
    flex-direction: column;
    position: relative;
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
    ::v-deep ymaps[class$="map-copyrights-promo"] {
      display: none !important;
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
    display: inline-flex;
    align-items: center;
    font-weight: 500;
    // text-decoration: underline;
    cursor: pointer;
    transition: color 0.25s $ease;
    &:hover {
      color: $colorPrimary;
    }
  }
  &__primary {
    margin-top: 24px;
    margin-bottom: 20px;
    p {
      margin-top: 10px;
      line-height: 1.65;
    }
  }
}

.metro {
  display: inline-block;
  flex: 0 0 auto;
  width: 9px;
  height: 9px;
  margin-right: 16px;
  border-radius: 50%;
}
</style>
