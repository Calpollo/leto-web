module.exports = [
  {
    path: "/",
    name: 'Home',
    component: () => import("@/views/Home.vue")
  },
  {
    path: "/funktionen",
    name: 'Funktionen',
    component: () => import("@/views/Funktionen.vue")
  },
  {
    path: "/preise",
    name: 'Preise',
    component: () => import("@/views/Preise.vue")
  },
  {
    path: "/download",
    name: 'Download',
    component: () => import("@/views/Download.vue")
  },
  {
    path: "/kundeninformationen",
    name: 'Kundeninformationen',
    component: () => import("@/views/KundenInformationen.vue")
  },
  {
    path: "/kontakt",
    name: 'Kontakt',
    component: () => import("@/views/KontaktView.vue")
  },
  {
    path: "/hilfe",
    name: 'Hilfe',
    component: () => import("@/views/HilfeView.vue")
  },
  {
    path: "/login",
    name: 'Login',
    component: () => import("@/views/Login.vue")
  },
  {
    path: "/register",
    name: 'Register',
    component: () => import("@/views/Register.vue")
  },
  {
    path: "/account",
    name: 'Account',
    component: () => import("@/views/Account.vue"),
    meta: { sitemap: { ignoreRoute: true } }
  },
  {
    path: "/admin-dashboard",
    name: 'AdminDashboard',
    component: () => import("@/views/AdminDashboard.vue"),
    meta: { sitemap: { ignoreRoute: true } }
  },
  {
    path: "/checkout",
    name: 'Checkout',
    component: () => import("@/views/Checkout.vue"),
    meta: { sitemap: { ignoreRoute: true } }
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
  }
];