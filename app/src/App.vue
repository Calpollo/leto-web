<template>
  <div id="app">
    <b-navbar toggleable="md" sticky variant="white">
      <b-navbar-brand :to="{ name: 'Home' }">
        <img
          src="@/assets/Leto - Text.svg"
          :style="{ minWidth: '100px' }"
          width="100"
          height="46"
          alt="Leto"
        />
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse" />

      <b-collapse
        id="nav-collapse"
        is-nav
        class="p-2"
        :style="{ backgroundColor: 'white', width: '100%' }"
      >
        <b-navbar-nav>
          <b-nav-item :to="{ name: 'Funktionen' }" class="my-1">
            Funktionen
          </b-nav-item>
          <b-nav-item :to="{ name: 'Preise' }" class="my-1">Preise</b-nav-item>
          <b-nav-item :to="{ name: 'Download' }" class="my-1"
            >Download</b-nav-item
          >
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <b-nav-item
            v-if="
              $store.state.loggedIn || $store.state?.me?.RoleName == 'Admin'
            "
          >
            <b-button-group :style="{ width: '100%' }">
              <b-button
                variant="outline-primary"
                v-if="$store.state?.me?.RoleName == 'Admin'"
                :to="{ name: 'AdminDashboard' }"
                v-b-toggle.nav-collapse
              >
                Admin-Dashboard
              </b-button>
              <b-button
                variant="primary"
                v-if="$store.state.loggedIn"
                href="https://app.leto.andreasnicklaus.de"
                v-b-toggle.nav-collapse
              >
                <b-icon-box-arrow-up-right />
                Zur App
              </b-button>
            </b-button-group>
          </b-nav-item>
          <b-nav-item v-if="!this.$store.state.loggedIn">
            <b-button
              class="pulse-button"
              :to="{ name: 'Login' }"
              variant="outline-primary"
              v-b-toggle.nav-collapse
              block
            >
              Einloggen / Registrieren
            </b-button>
          </b-nav-item>
          <b-nav-item-dropdown v-else right>
            <template #button-content>
              <b-icon-person />
              {{ $store.state.me?.username || "Mein Konto" }}
            </template>
            <b-dropdown-item :to="{ name: 'Account' }">
              <b-icon-person />
              Mein Profil
            </b-dropdown-item>
            <b-dropdown-item variant="danger" @click="logout" to="/">
              <b-icon-door-open />
              Ausloggen
            </b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <router-view class="view" />

    <footer class="pt-4">
      <b-row align-h="around" class="p-2">
        <b-col cols="11" md="auto">
          <h1>Über Leto</h1>
          <b-nav vertical>
            <b-nav-item :to="{ name: 'Funktionen' }">Funktionen</b-nav-item>
            <b-nav-item :to="{ name: 'Preise' }">Preise</b-nav-item>
            <b-nav-item :to="{ name: 'Kundeninformationen' }">
              Kundeninformationen
            </b-nav-item>
            <b-nav-item :to="{ name: 'Download' }">Download</b-nav-item>
          </b-nav>
        </b-col>
        <b-col cols="11" md="auto">
          <h1>Nutzerbereich</h1>
          <b-nav vertical>
            <b-nav-item :to="{ name: 'Kontakt' }">Kontakt</b-nav-item>
            <b-nav-item href="https://app.leto.andreasnicklaus.de">
              Zur App
            </b-nav-item>
            <b-nav-item :to="{ name: 'Account' }">Dein Profil</b-nav-item>
            <b-nav-item :to="{ name: 'Hilfe' }">Hilfe</b-nav-item>
          </b-nav>
        </b-col>
      </b-row>
      <b-row align-h="around" class="p-2">
        <b-col cols="auto" class="businessinfo">
          <img
            src="@/assets/Leto - Text.svg"
            :style="{ width: '200px' }"
            width="200"
            height="92"
            alt="Leto"
            loading="lazy"
          />
          <hr />
          <p><b>Projekt Leto</b></p>
          <p>Gründer: Andreas Nicklaus</p>
          <p><em>gestartet: Juni 2022</em></p>
          <p>
            E-mail:
            <a href="mailto:nicklaus.leto@gmail.com">nicklaus.leto@gmail.com</a>
          </p>
          <p v-if="$store.state.loggedIn">
            Telefon:
            <a href="tel:+49 160 90899730">+49 160 90899730 </a>
          </p>
        </b-col>
      </b-row>
      <div class="bottom-bar">Leto @ 2023</div>
    </footer>
  </div>
</template>

<script>
import UserService from "./services/UserService";
export default {
  name: "App",
  metaInfo: {
    titleTemplate: "%s - Leto",
    meta: [
      {
        name: "keywords",
        content:
          "Leto, Calpollo, Physiotherapie, Terminplaner, Software, Leto by Calpollo, Praxis, Abrechnung",
      },
      {
        name: "description",
        content:
          "Dein Terminplaner für Physiotherapiepraxen. Schnell. Sicher. Kostenlos.",
      },
      {
        name: "author",
        content: "Leto",
      },
    ],
  },
  mounted() {
    if (!window.__PRERENDER_INJECTED) this.$store.dispatch("updateMe");
  },
  methods: {
    logout() {
      UserService.logout(
        this.$route.name != "Home" ? { name: "Home" } : null
      ).then(() => {
        this.$bvToast.toast("Du wurdest ausgeloggt", {
          title: "Logout",
          autoHideDelay: 3000,
          variant: "danger",
          solid: true,
        });
      });
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/colors.scss";

html {
  scroll-behavior: smooth;
}

#app {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.view {
  text-align: center;
  min-height: 90vh;
}
</style>

<style lang="scss" scoped>
@import "@/assets/colors.scss";

div .bottom-bar {
  text-align: center;
  background-color: $primary;
  color: white;
  padding: 8pt;
}

.navbar {
  min-height: 10vh;
  box-shadow: 0 0 20px #495f4133;
}

#nav-collapse > .nav-link {
  color: $primary !important;
}

.businessinfo {
  & p {
    margin: 0;
  }
  & b {
    color: $primary;
  }
  & hr {
    border-color: $primary;
  }
}

footer {
  & h1 {
    @extend h4;
    color: $primary;
  }
}

.pulse-button {
  box-shadow: 0 0 0 0 $primary;
  -webkit-animation: pulsing 4s infinite cubic-bezier(0.66, 0, 0, 1);
  -moz-animation: pulsing 4s infinite cubic-bezier(0.66, 0, 0, 1);
  -ms-animation: pulsing 4s infinite cubic-bezier(0.66, 0, 0, 1);
  animation: pulsing 4s infinite cubic-bezier(0.66, 0, 0, 1);
}

.pulse-button:hover {
  -webkit-animation: none;
  -moz-animation: none;
  -ms-animation: none;
  animation: none;
  color: #ffffff;
}

@-webkit-keyframes pulsing {
  50% {
    box-shadow: 0 0 0 20px #6927d300;
  }
  100% {
    box-shadow: 0 0 0 20px #6927d300;
  }
}

@-moz-keyframes pulsing {
  50% {
    box-shadow: 0 0 0 20px #6927d300;
  }
  100% {
    box-shadow: 0 0 0 20px #6927d300;
  }
}

@-ms-keyframes pulsing {
  50% {
    box-shadow: 0 0 0 20px #6927d300;
  }
  100% {
    box-shadow: 0 0 0 20px #6927d300;
  }
}

@keyframes pulsing {
  50% {
    box-shadow: 0 0 0 20px #6927d300;
  }
  100% {
    box-shadow: 0 0 0 20px #6927d300;
  }
}
</style>
