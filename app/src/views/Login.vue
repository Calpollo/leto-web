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
              placeholder="Benutzername"
            />
          </b-form-group>
          <b-form-group label="Passwort" label-for="password-input">
            <b-input
              id="password-input"
              type="password"
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
                type="submit"
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
export default {
  name: "LoginView",
  data() {
    return {
      bbblurry,
      username: null,
      password: null,
    };
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
