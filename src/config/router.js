import Vue from "vue"
import Router from "vue-router"

Vue.use(Router)

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
  routes: [
    { path: "/", component: () => import("@/pages/Home") },
    {
      path: "/courses",
      component: () => import("@/pages/Courses"),
    },
    {
      path: "/course/:id",
      component: () => import("@/pages/Course"),
    },
    {
      path: "/school",
      component: () => import("@/pages/School"),
    },
    {
      path: "/teachers",
      component: () => import("@/pages/Teachers"),
    },
    {
      path: "/faq",
      component: () => import("@/pages/Faq"),
    },
    {
      path: "/docs",
      component: () => import("@/pages/Docs"),
    },
    {
      path: "/price",
      component: () => import("@/pages/Price"),
    },
    {
      path: "/contact",
      component: () => import("@/pages/Contact"),
    },
    {
      path: "/top-students",
      component: () => import("@/pages/TopStudents"),
    },
    {
      path: "/study-plans",
      component: () => import("@/pages/StudyPlans"),
    },
    {
      path: "*",
      component: () => import("@/pages/NotFound"),
    },
  ],
})

export default router
