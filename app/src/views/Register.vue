<template>
  <div id="Register" data-view>
    <section
      id="landingSection"
      :style="{
        backgroundImage: 'url(' + bbblurry + ')',
        backgroundSize: 'cover',
      }"
      role="region"
      aria-label="Login"
    >
      <b-aspect
        aspect="4:3"
        id="register-card"
        :style="{ display: 'grid', placeItems: 'center' }"
      >
        <b-card title="Konto erstellen" title-tag="h1">
          <b-form @submit="register">
            <b-form-group label="E-Mail-Adresse" label-for="email-input">
              <b-form-input
                id="email-input"
                type="text"
                placeholder="E-Mail-Adresse"
                v-model="email"
                required
                :state="emailValid"
                autocomplete="email"
              />
              <b-form-invalid-feedback id="email-input-feedback">
                Deine E-Mail-Adresse ist nicht valid
              </b-form-invalid-feedback>
            </b-form-group>
            <b-form-group label="Benutzername" label-for="username-input">
              <b-form-input
                id="username-input"
                type="text"
                placeholder="Benutzername"
                v-model="username"
                required
                :state="usernameValid"
                autocomplete="username"
              />
              <b-form-invalid-feedback id="username-input-feedback">
                Dein Benutzername muss mindestens 6 Zeichen lang sein
              </b-form-invalid-feedback>
            </b-form-group>
            <b-form-group label="Passwort" label-for="password-input">
              <b-form-input
                id="password-input"
                type="password"
                placeholder="Passwort"
                v-model="password"
                required
                :state="passwordValid"
                autocomplete="new-password"
              />

              <b-form-invalid-feedback id="password-input-feedback">
                Dein Passwort muss die folgenden Anforderungen erfüllen:
                <ul class="ml-4">
                  <li>Mindestens 8 Zeichen</li>
                  <li>Mindestens 1 Ziffer</li>
                </ul>
              </b-form-invalid-feedback>

              <b-form-input
                id="npassword-input"
                type="password"
                placeholder="Passwort wiederholen"
                v-model="npassword"
                required
                :state="npasswordValid"
                autocomplete="new-password"
              />

              <b-form-invalid-feedback id="npassword-input-feedback">
                Dein wiederholtes Passwort muss dem ersten gleichen
              </b-form-invalid-feedback>
            </b-form-group>

            <b-row id="buttonRow">
              <b-col>
                Du hast schon ein Konto?
                <b-button variant="link" :to="{ name: 'Login' }"
                  >Jetzt einloggen</b-button
                >
              </b-col>
              <b-col :style="{ textAlign: 'end' }">
                <b-button
                  variant="primary"
                  type="submit"
                  :style="{ color: 'white' }"
                >
                  Konto erstellen
                </b-button>
              </b-col>
            </b-row>
          </b-form>
        </b-card>
      </b-aspect>
    </section>
    <section class="py-4">
      <b-card
        title="Ich habe schon ein Konto. Wie kann ich mich einloggen?"
        title-tag="h2"
        class="w-75 my-2"
      >
        <b-card-text>
          Unter dem obigen Anmelde-Formular findest du den Link "Jetzt
          einloggen". Damit kannst du dich mit deinem Konto anmelden. Alternativ
          <router-link
            :to="{ name: 'Login' }"
            class="text-decoration-underline"
          >
            klicke hier zum Anmelden
          </router-link>
        </b-card-text>
      </b-card>
      <b-card
        title="Ich kann mich nicht registrieren. Was kann ich tun?"
        title-tag="h2"
        class="w-75 my-2"
      >
        <b-card-text>
          Wenn du dich nicht registrieren kannst, kann das viele Gründe haben.
          Machen davon kannst du selbst beheben:
        </b-card-text>
        <b-card-text>
          Versichere dich, dass du immer noch mit dem Internet verbunden bist,
          indem du die Seite einfach einmal neu lädst.
        </b-card-text>
        <b-card-text>
          Vergewisser dich, dass du deine Daten richtig eingegeben hast.
          Achtung: Das obige Anmelde-Formular zeigt dir Fehler an. Vergewissere
          dich, dass keine Fehler mehr angezeigt werden!
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
      <b-card
        title="Wofür werden meine Daten verwendet?"
        title-tag="h2"
        class="w-75 my-2"
      >
        <b-card-text>
          Wir sammeln von deinem Konto nur die Informationen, die technisch für
          die Kontoverwaltung notwendig sind.
        </b-card-text>
        <b-card-text>
          Deine E-Mailadresse nutzen wir außerdem, um dich im Falle eines
          technischen Fehlers zu kontaktieren. Das machen wir aber nur absoluten
          Notfall.
        </b-card-text>
      </b-card>
    </section>
  </div>
</template>

<script>
import bbblurry from "@/assets/backgrounds/bbblurry.svg";
import UserService from "@/services/UserService";
export default {
  name: "RegisterView",
  metaInfo: {
    title: "Registrieren",
    meta: [
      {
        name: "description",
        content:
          "Registriere dich jetzt und lege gleich los! Leto ist dein Terminplaner für Physiotherapiepraxen. Schnell. Sicher. Kostenlos.",
      },
    ],
  },
  data() {
    return {
      bbblurry,
      emailRegex: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      email: null,
      username: null,
      password: null,
      npassword: null,
    };
  },
  methods: {
    register(event) {
      event.preventDefault();
      if (
        this.usernameValid &&
        this.emailValid &&
        this.passwordValid &&
        this.npasswordValid
      ) {
        UserService.signup(this.username, this.email, this.password)
          .then(() => {
            this.$router.push("/account");
          })
          .catch((err) => {
            console.warn(err);
            this.$bvToast.toast(err.response?.data, {
              title: "Kontoerstellung nicht möglich",
              autoHideDelay: 5000,
              variant: "danger",
              solid: true,
            });
          });
      }
    },
  },
  computed: {
    emailValid() {
      return this.email && this.emailRegex.test(this.email);
    },
    usernameValid() {
      return this.username && this.username.length >= 6;
    },
    passwordValid() {
      return (
        this.password && this.password.length >= 8 && /\d/.test(this.password)
      );
    },
    npasswordValid() {
      return this.npassword && this.npassword == this.password;
    },
  },
};
</script>

<style lang="scss" scoped>
#Register {
  text-align: start;
}

section {
  min-height: 90vh;

  display: grid;
  place-items: center;
}

#register-card {
  min-width: 60%;
}

.card-title {
  text-align: center;
}

#buttonRow {
  text-align: start;
}
</style>
