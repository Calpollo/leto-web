<template>
  <div id="Login" data-view>
    <section
      id="landingSection"
      :style="{
        backgroundImage: 'url(' + bbblurry + ')',
        backgroundSize: 'cover',
      }"
      role="region"
      aria-label="Login"
    >
      <b-card title="Login" title-tag="h1" class="w-75">
        <b-form>
          <b-form-group label="Benutzername" label-for="username-input">
            <b-input
              id="username-input"
              type="text"
              v-model="username"
              placeholder="Benutzername"
              autocomplete="username"
            />
          </b-form-group>
          <b-form-group label="Passwort" label-for="password-input">
            <b-input
              id="password-input"
              type="password"
              v-model="password"
              placeholder="Passwort"
              autocomplete="current-password"
            />
          </b-form-group>

          <b-row id="buttonRow">
            <b-col>
              Du hast noch kein Konto?
              <b-button variant="link" :to="{ name: 'Register' }">
                Konto erstellen
              </b-button>
            </b-col>
            <b-col :style="{ textAlign: 'end' }">
              <b-button
                variant="primary"
                @click="login"
                :style="{ color: 'white' }"
              >
                Einloggen
              </b-button>
            </b-col>
          </b-row>
        </b-form>
      </b-card>
      <b-card class="mt-2 w-75">
        <b-list-group>
          <b-list-group-item disabled>
            <b-icon-google class="mr-2" />
            Google
          </b-list-group-item>
          <b-list-group-item disabled>
            <b-icon-github class="mr-2" />
            Github
          </b-list-group-item>
          <b-list-group-item disabled>
            <b-icon-facebook class="mr-2" />
            Facebook
          </b-list-group-item>
          <b-list-group-item disabled>
            <b-icon-linkedin class="mr-2" />
            LinkedIn
          </b-list-group-item>
        </b-list-group>
        <b-card-text>
          <p class="text-center text-muted mt-2 mb-0">
            <small>(bald verfügbar)</small>
          </p>
        </b-card-text>
      </b-card>
    </section>
    <section class="py-4">
      <b-card
        title="Wie kann ich ein Konto erstellen?"
        title-tag="h2"
        class="w-75 my-2"
      >
        <b-card-text>
          Unter dem obigen Login-Formular findest du den Link "Konto erstellen".
          Damit kannst du dir ein Konto neu einrichten. Alternativ
          <router-link
            :to="{ name: 'Register' }"
            class="text-decoration-underline"
          >
            klicke hier zum Registrieren
          </router-link>
        </b-card-text>
      </b-card>
      <b-card
        title="Ich kann mich nicht einloggen. Was kann ich tun?"
        title-tag="h2"
        class="w-75 my-2"
      >
        <b-card-text>
          Wenn du dich nicht einloggen kannst, kann das viele Gründe haben.
          Machen davon kannst du selbst beheben:
        </b-card-text>
        <b-card-text>
          Versichere dich, dass du immer noch mit dem Internet verbunden bist,
          indem du die Seite einfach einmal neu lädst.
        </b-card-text>
        <b-card-text>
          Vergewisser dich, dass du deine Login-Daten richtig eingegeben hast.
          Achtung: Das obige Login-Formular fragt dich nach deinem
          Benutzernamen, nicht nach deiner E-Mail-Adresse!
        </b-card-text>
        <b-card-text>
          Sind alle Leto-Services aktuell online? Diese Statusanzeige sollte
          einen Hinweis darauf geben: <br />
          <iframe
            title="Status-Badge der Leto-Services"
            src="https://leto.betteruptime.com/badge"
            width="200"
            height="30"
            frameborder="0"
            scrolling="no"
            class="ml-2"
          ></iframe
          ><br />
          Wenn Services offline sind, kannst du nichts tun. Wir werden
          automatisch darüber benachrichtigt und kümmern uns um eine
          schnellstmögliche Lösung!
        </b-card-text>
        <b-card-text>
          Wenn alle Stricke reißen, schreib uns eine Nachricht! <br />
          <b-button :to="{ name: 'Kontakt' }" variant="outline-primary">
            Zur Kontaktseite
          </b-button>
        </b-card-text>
      </b-card>
    </section>
  </div>
</template>

<script>
import bbblurry from "@/assets/backgrounds/bbblurry.svg";
import UserService from "@/services/UserService";
export default {
  name: "LoginView",
  metaInfo: {
    title: "Einloggen",
    meta: [
      {
        name: "description",
        content:
          "Logge dich ein und leg los! Leto ist dein Terminplaner für Physiotherapiepraxen. Schnell. Sicher. Kostenlos.",
      },
    ],
  },
  data() {
    return {
      bbblurry,
      username: null,
      password: null,
    };
  },
  methods: {
    login() {
      UserService.login(this.username, this.password)
        .then(() => {
          this.$router.push(this.$route.query?.redirectUrl || "/account");
        })
        .catch((err) => {
          console.warn(err);
          this.$bvToast.toast(err.response?.data, {
            title: "Login nicht möglich",
            autoHideDelay: 5000,
            variant: "danger",
            solid: true,
          });
        });
    },
  },
  mounted() {
    if (this.$route.query?.toast) {
      const toast = JSON.parse(this.$route.query.toast);
      this.$bvToast.toast(toast.msg, {
        title: toast.title || "Benachrichtigung",
        autoHideDelay: 5000,
        variant: toast.variant,
        solid: true,
      });
    }
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/colors.scss";

section {
  min-height: 90vh;

  display: grid;
  place-items: center;
}

#Login {
  text-align: start;
}

#login-card {
  min-width: 60%;
}

.card-title {
  text-align: center;
}

#buttonRow {
  text-align: start;
}

b {
  color: $primary;
}
</style>
