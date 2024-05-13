<template>
  <div
    id="Register"
    :style="{
      display: 'grid',
      placeItems: 'center',
      backgroundImage: 'url(' + bbblurry + ')',
      backgroundSize: 'cover',
    }"
    data-view
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
  </div>
</template>

<script>
import bbblurry from "@/assets/backgrounds/bbblurry.svg";
import UserService from "@/services/UserService";
export default {
  name: "RegisterView",
  metaInfo: {
    title: "Registrieren",
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
