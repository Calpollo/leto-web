module.exports = [
  {
    path: "/",
    name: 'Home',
    component: () => import("@/views/Home.vue"),
    meta: { prerender: true }
  },
  {
    path: "/funktionen",
    name: 'Funktionen',
    component: () => import("@/views/Funktionen.vue"),
    meta: { prerender: true }
  },
  {
    path: "/preise",
    name: 'Preise',
    component: () => import("@/views/Preise.vue"),
    meta: { prerender: true }
  },
  {
    path: "/download",
    name: 'Download',
    component: () => import("@/views/Download.vue"),
    meta: { prerender: true }
  },
  {
    path: "/kundeninformationen",
    name: 'Kundeninformationen',
    component: () => import("@/views/KundenInformationen.vue"),
    meta: { prerender: true }
  },
  {
    path: "/kontakt",
    name: 'Kontakt',
    component: () => import("@/views/KontaktView.vue"),
    meta: { prerender: true }
  },
  {
    path: "/hilfe",
    name: 'Hilfe',
    component: () => import("@/views/HilfeView.vue"),
    meta: { prerender: true }
  },
  {
    path: "/status",
    name: 'Status',
    component: () => import("@/views/StatusView.vue"),
    meta: { prerender: true }
  },
  {
    path: "/einloggen",
    name: 'Login',
    component: () => import("@/views/Login.vue"),
    meta: { prerender: true }
  },
  {
    path: "/registrieren",
    name: 'Register',
    component: () => import("@/views/Register.vue"),
    meta: { prerender: true }
  },
  {
    path: "/account",
    name: 'Account',
    component: () => import("@/views/Account.vue"),
    meta: { sitemap: { ignoreRoute: true }, private: true }
  },
  {
    path: "/admin-dashboard",
    name: 'AdminDashboard',
    component: () => import("@/views/AdminDashboard.vue"),
    meta: { sitemap: { ignoreRoute: true }, private: true, admin: true }
  },
  {
    path: "/checkout",
    name: 'Checkout',
    component: () => import("@/views/Checkout.vue"),
    meta: { sitemap: { ignoreRoute: true }, private: true }
  },
  {
    path: "/stripe-success",
    redirect: (to) => {
      return {
        path: "/account", query: {
          toast: JSON.stringify({
            msg: "Stripe Checkout war erfolgreich",
            variant: "success",
            title: "Zahlung erfolgreich"
          }),
          ...to.query
        }
      }
    },
    meta: { sitemap: { ignoreRoute: true } }
  },
  {
    path: "/stripe-cancel",
    redirect: (to) => {
      return {
        path: "/account", query: {
          toast: JSON.stringify({
            msg: "Stripe Checkout war nicht erfolgreich",
            variant: "danger",
            title: "Zahlung abgebrochen"
          }),
          ...to.query
        }
      }
    },
    meta: { sitemap: { ignoreRoute: true } }
  },
  {
    path: "*",
    name: 'PageNotFound',
    component: () => import("@/views/PageNotFound.vue"),
    meta: { sitemap: { ignoreRoute: true } }
  }
];