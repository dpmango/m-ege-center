import gsap from "gsap"

export default {
  name: "SlideUpDown",

  props: {
    active: Boolean,
    duration: {
      type: Number,
      default: 500,
    },
    tag: {
      type: String,
      default: "div",
    },
    useHidden: {
      type: Boolean,
      default: true,
    },
    fixPxForward: {
      type: Number,
      default: 0,
    },
    fixPxBackward: {
      type: Number,
      default: 0,
    },
  },

  data: () => ({
    style: {},
    initial: false,
    hidden: false,
  }),

  watch: {
    active() {
      this.layout()
    },
  },

  render(h) {
    return h(
      this.tag,
      {
        style: this.style,
        attrs: this.attrs,
        ref: "container",
        on: { transitionend: this.onTransitionEnd },
      },
      this.$slots.default
    )
  },

  mounted() {
    this.layout()
    this.initial = true
  },

  created() {
    this.hidden = !this.active
  },

  computed: {
    el() {
      return this.$refs.container
    },

    attrs() {
      const attrs = {
        "aria-hidden": !this.active,
        "aria-expanded": this.active,
      }

      if (this.useHidden) {
        attrs.hidden = this.hidden
      }

      return attrs
    },
  },

  methods: {
    getElementHeight() {
      return this.el.scrollHeight + "px"
    },
    layout() {
      if (this.active) {
        this.hidden = false
        this.$emit("open-start")

        if (this.initial) {
          this.setHeight("0px", () => this.el.scrollHeight + this.fixPxForward + "px")
        }
      } else {
        this.$emit("close-start")

        this.setHeight(this.el.scrollHeight + this.fixPxBackward + "px", () => "0px")
      }
    },

    asap(callback) {
      if (!this.initial) {
        callback()
      } else {
        this.$nextTick(callback)
      }
    },

    setHeight(temp, afterRelayout) {
      this.asap(() => {
        // force relayout so the animation will run
        this.__ = this.el.scrollHeight

        this.style = {
          overflow: "hidden",
        }

        gsap.fromTo(
          this.el,
          { height: temp },
          {
            height: afterRelayout(),
            duration: this.duration / 1000,
            onComplete: this.onTransitionEnd,
          }
        )
      })
    },

    onTransitionEnd(event) {
      if (this.active) {
        this.style = {
          height: "auto",
        }
        this.$emit("open-end")
      } else {
        this.style = {
          height: "0",
          overflow: "hidden",
        }
        this.hidden = true
        this.$emit("close-end")
      }
    },
  },
}
