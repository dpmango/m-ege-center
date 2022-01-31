<template>
  <div class="modal" :class="[activeModal === 'signup' && 'is-active']">
    <div class="modal__wrapper" @click="() => setModal(null)">
      <div class="modal__body" @click.stop v-scroll-lock="activeModal === 'signup'">
        <div class="modal__close" @click="() => setModal(null)">
          <SvgIcon name="close" />
        </div>
        <div class="modal__title h2-title">Запишитесь <br />на курсы сейчас</div>
        <div class="modal__subtitle">
          Заполните форму ниже и сотрудники ЕГЭ-Центра свяжутся с вами
        </div>
        <ValidationObserver
          ref="form"
          v-slot="{ invalid }"
          tag="form"
          class="form"
          @submit.prevent="handleSubmit"
        >
          <div class="form_error" v-if="error">{{ error }}</div>

          <div class="form__checkboxes">
            <UiCheckbox
              :value="activeCheckboxes.includes(1)"
              @onChange="(v) => handleCheckboxChange(1, v)"
            >
              Математика
            </UiCheckbox>
            <UiCheckbox
              :value="activeCheckboxes.includes(2)"
              @onChange="(v) => handleCheckboxChange(2, v)"
            >
              Физика
            </UiCheckbox>
            <UiCheckbox
              :value="activeCheckboxes.includes(3)"
              @onChange="(v) => handleCheckboxChange(3, v)"
            >
              Химия
            </UiCheckbox>
            <UiCheckbox
              :value="activeCheckboxes.includes(4)"
              @onChange="(v) => handleCheckboxChange(4, v)"
            >
              Биология
            </UiCheckbox>
            <UiCheckbox
              :value="activeCheckboxes.includes(5)"
              @onChange="(v) => handleCheckboxChange(5, v)"
            >
              История
            </UiCheckbox>

            <UiCheckbox
              :value="activeCheckboxes.includes(6)"
              @onChange="(v) => handleCheckboxChange(6, v)"
            >
              Обществознание
            </UiCheckbox>
            <UiCheckbox
              :value="activeCheckboxes.includes(7)"
              @onChange="(v) => handleCheckboxChange(7, v)"
            >
              Русский язык
            </UiCheckbox>
            <UiCheckbox
              :value="activeCheckboxes.includes(8)"
              @onChange="(v) => handleCheckboxChange(8, v)"
            >
              Литература
            </UiCheckbox>
            <UiCheckbox
              :value="activeCheckboxes.includes(9)"
              @onChange="(v) => handleCheckboxChange(9, v)"
            >
              Информатика
            </UiCheckbox>
            <UiCheckbox
              :value="activeCheckboxes.includes(10)"
              @onChange="(v) => handleCheckboxChange(10, v)"
            >
              Английский язык
            </UiCheckbox>
          </div>

          <div class="form__group">
            <UiSelect
              placeholder="-"
              label="Выберите класс"
              :value="classSelect"
              :options="['9', '10', '11']"
              :clearable="false"
              @onSelect="(v) => (classSelect = v)"
            />
          </div>
          <div class="form__group">
            <UiSelect
              placeholder="-"
              label="Выберите удобный филиал"
              :value="branchSelect"
              :options="['1', '2', '3']"
              :clearable="false"
              @onSelect="(v) => (branchSelect = v)"
            />
          </div>

          <ValidationProvider v-slot="{ errors }" class="form__group" rules="required">
            <UiInput
              :value="name"
              theme="dynamic"
              label="Ваше имя"
              type="text"
              :error="errors[0]"
              @onChange="(v) => (name = v)"
            />
          </ValidationProvider>

          <ValidationProvider v-slot="{ errors }" class="form__group" rules="required|tel">
            <UiInput
              v-mask="'+7 (###) ###-####'"
              :value="phone"
              theme="dynamic"
              label="Ваш телефон"
              type="tel"
              :error="errors[0]"
              @onChange="(v) => (phone = v)"
            />
          </ValidationProvider>

          <div class="form_error" v-if="error">{{ error }}</div>

          <ValidationProvider v-slot="{ errors }" :rules="{ required: { allowFalse: false } }">
            <UiCheckbox :value="agree" :error="errors[0]" @onChange="(v) => (agree = v)">
              Я согласен на
              <a href="#" target="_blank">обработку персональных данных</a>
            </UiCheckbox>
          </ValidationProvider>

          <div class="form__cta">
            <UiButton type="submit" size="big">Отправить заявку</UiButton>
          </div>

          <div class="h3-title">Набор <span class="c-primary">до 4 декабря 2021 г.</span></div>
        </ValidationObserver>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex"

export default {
  data() {
    return {
      activeCheckboxes: [],
      classSelect: null,
      branchSelect: null,
      name: "",
      phone: "",
      agree: false,
      error: null,
    }
  },
  computed: {
    ...mapState("ui", ["activeModal"]),
  },
  methods: {
    handleCheckboxChange(id, value) {
      if (this.activeCheckboxes.includes(id)) {
        this.activeCheckboxes = this.activeCheckboxes.filter((x) => x !== id)
      } else {
        this.activeCheckboxes = [...this.activeCheckboxes, id]
      }
    },
    async handleSubmit() {
      const isValid = await this.$refs.form.validate()
      if (!isValid) {
        return
      }

      const { activeCheckboxes, name, phone, agree } = this
      // await this.login({ topics: activeCheckboxes, name, phone, agree })
      //   .then((_res) => {
      //     this.error = null
      //   })
      //   .catch((err) => {
      //     const { data, code } = err

      //     if (data && code === 401) {
      //       Object.keys(data).forEach((key) => {
      //         this.error = data[key]
      //       })
      //     }
      //   })
    },
    ...mapMutations("ui", ["setModal"]),
  },
}
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  z-index: 99;
  display: flex;
  flex-direction: column;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  opacity: 0;
  backface-visibility: hidden;
  transition: opacity 0.25s $ease;
  &__wrapper {
    flex: 1 0 auto;
    height: 100%;
    position: relative;
    display: flex;
    justify-content: flex-end;
    background: rgba(0, 0, 0, 0.15);
  }
  &__body {
    position: relative;
    width: 100%;
    background: white;
    max-width: 720px;
    padding: 30px 16px;
    transform: translate3d(100%, 0, 0);
    will-change: transform;
    overflow-x: auto;
    backface-visibility: hidden;
    transition: transform 0.25s $ease;
  }
  &__close {
    position: absolute;
    z-index: 2;
    top: 10px;
    right: 10px;
    font-size: 0;
    padding: 10px;
    cursor: pointer;
    transition: color 0.25s $ease;
    .svg-icon {
      font-size: 18px;
    }
    &:hover {
      color: $colorRed;
    }
  }
  &__title {
    line-height: 1.25;
  }
  &__subtitle {
    margin-top: 14px;
    font-size: 14px;
    color: $colorGray;
  }
  &.is-active {
    opacity: 1;
    pointer-events: all;
    .modal__body {
      transform: none;
    }
  }
}

.form {
  &__error {
    font-weight: 500;
    font-size: 14px;
    color: $colorRed;
  }
  &__checkboxes {
    margin-top: 32px;
    margin-bottom: 42px;
    display: flex;
    flex-direction: column;
    .checkbox {
      margin-bottom: 8px;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
  &__group {
    display: block;
    margin-bottom: 20px;
  }
  &__cta {
    margin-top: 44px;
    margin-bottom: 42px;
  }
}
</style>
