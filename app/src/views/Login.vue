<template>
  <div
    id="Login"
    :style="{
      display: 'grid',
      placeItems: 'center',
      backgroundImage: 'url(' + bbblurry + ')',
      backgroundSize: 'cover',
    }"
  >
    <b-aspect
      aspect="4:3"
      id="login-card"
      :style="{ display: 'grid', placeItems: 'center' }"
    >
      <b-card title="Login">
        <b-form>
          <b-form-group label="Benutzername" label-for="username-input">
            <b-input
              id="username-input"
              type="text"
              v-model="username"
              placeholder="Benutzername"
            />
          </b-form-group>
          <b-form-group label="Passwort" label-for="password-input">
            <b-input
              id="password-input"
              type="password"
              v-model="password"
              placeholder="Passwort"
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
    </b-aspect>
  </div>
</template>

<script>
import bbblurry from "@/assets/backgrounds/bbblurry.svg";
import UserService from "@/services/UserService";
export default {
  name: "LoginView",
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
</style>
